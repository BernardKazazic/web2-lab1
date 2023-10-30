import { Request, Response } from 'express';
import { Competition } from '../entity/competition';
import { Competitor } from "../entity/competitor";
import { AppDataSource } from '../config/datasource';
import { createCompetitionForFour, createCompetitionForFive, createCompetitionForSix, createCompetitionForSeven, createCompetitionForEight, createCompetitorsEntityArray, setScoringSystem } from '../util/competitionCreation';
import re from 'express-openid-connect';

const createCompetition = (req: Request, res: Response) => {
    let userId : string = req.oidc.user?.sub;
    let competition : Competition = new Competition();
    let competitors : string[] = req.body.competitors.split(";");

    if(competitors.length < 4 || competitors.length > 8) {
        res.render('createCompetition', { error: "Number of competitors must be between 4 and 8" });
    }

    if(req.body.win === undefined || req.body.draw === undefined || req.body.lose === undefined) {
        res.render('createCompetition', { error: "You must set scoring system" });
    }

    let competitorsEntityArray : Competitor[] = createCompetitorsEntityArray(competitors);

    competition.userId = userId;
    setScoringSystem(competition, req);

    switch(competitors.length) {
        case 4:
            createCompetitionForFour(competition, competitorsEntityArray);
            break;
        case 5:
            createCompetitionForFive(competition, competitorsEntityArray);
            break;
        case 6:
            createCompetitionForSix(competition, competitorsEntityArray);
            break;
        case 7:
            createCompetitionForSeven(competition, competitorsEntityArray);
            break;
        case 8:
            createCompetitionForEight(competition, competitorsEntityArray);
            break;
    }

    let competitionId : number = 0;
    let redirect : string;

    AppDataSource.manager.save(Competition, competition).then((result) => {
        let competitionId : number = result.id;
        let redirect : string = '/competition/' + competitionId;
    }).catch((error) => {
        console.log(error.message);
        res.render('createCompetition', { error: "Failed while saving competition" });
    });



    for(let i = 0; i < competition.rounds.length; i++) {
        competition.rounds[i].competition.id = competitionId;
        let roundId : number = 0;
        AppDataSource.manager.save(competition.rounds[i]).then((result) => {
            roundId = result.id;
            console.log("Round saved");
        }).catch((error) => {
            console.log(error.message);
            res.render('createCompetition', { error: "Failed while saving round" });
        });
        for(let j = 0; j < competition.rounds[i].matches.length; j++) {
            competition.rounds[i].matches[j].round.id = roundId;
            AppDataSource.manager.save(competition.rounds[i].matches[j].competitor1).then((result) => {
                console.log("Competitor saved");
            }).catch((error) => {
                console.log(error.message);
                res.render('createCompetition', { error: "Failed while saving competitor" });
            });

            AppDataSource.manager.save(competition.rounds[i].matches[j].competitor2).then((result) => {
                console.log("Competitor saved");
            }).catch((error) => {
                console.log(error.message);
                res.render('createCompetition', { error: "Failed while saving competitor" });
            });

            AppDataSource.manager.save(competition.rounds[i].matches[j]).then((result) => {
                console.log("Match saved");
            }).catch((error) => {
                console.log(error.message);
                res.render('createCompetition', { error: "Failed while saving match" });
            });
        }
    }

    res.redirect('redirect');
}

const newCompetitionPage = (req: Request, res: Response) => {
    res.render('createCompetition');
}

const competitionPage = (req: Request, res: Response) => {
    if(req.params.id === undefined) {
        res.render('competition', { error: "Invalid id" });
    }

    let competitionId : number = parseInt(req.params.id);

    AppDataSource.manager.findOne(Competition, {
        relations: {
            competitors: true,
            rounds: {
                matches: true
            },
        },
        where: {
            id: competitionId
        },
    }).then((competition) => {
    res.render('competition', { competition });
    }).catch((error) => {
        console.log(error.message);
        res.render('competition', { error: "Failed while fetching competition" });
    });
}

export { createCompetition, newCompetitionPage, competitionPage };