import { Competition } from "../entity/competition";
import { Competitor } from "../entity/competitor";
import { Round } from "../entity/round";
import { Match } from "../entity/match";
import { Request } from 'express';

const createCompetitionForFour = (competition : Competition, competitors : Competitor[]) => {
    let matchArray : Match[];
    let roundArray : Round[] = [];

    let round1 : Round = new Round();
    let match1 : Match = new Match();
    let match2 : Match = new Match();

    match1.competitor1 = competitors[0];
    match1.competitor2 = competitors[1];
    match2.competitor1 = competitors[2];
    match2.competitor2 = competitors[3];
    matchArray = [match1, match2];
    round1.matches = matchArray;
    roundArray.push(round1);

    let round2 : Round = new Round();
    let match3 : Match = new Match();
    let match4 : Match = new Match();

    match3.competitor1 = competitors[0];
    match3.competitor2 = competitors[2];
    match4.competitor1 = competitors[1];
    match4.competitor2 = competitors[3];
    matchArray = [match3, match4];
    round2.matches = matchArray;
    roundArray.push(round2);

    let round3 : Round = new Round();
    let match5 : Match = new Match();
    let match6 : Match = new Match();

    match5.competitor1 = competitors[0];
    match5.competitor2 = competitors[3];
    match6.competitor1 = competitors[1];
    match6.competitor2 = competitors[2];
    matchArray = [match5, match6];
    round3.matches = matchArray;
    roundArray.push(round3);

    competition.rounds = roundArray;
}

const createCompetitionForFive = (competition : Competition, competitors : Competitor[]) => {
    let matchArray : Match[];
    let roundArray : Round[] = [];

    let round1 : Round = new Round();
    let match1 : Match = new Match();
    let match2 : Match = new Match();

    match1.competitor1 = competitors[0];
    match1.competitor2 = competitors[1];
    match2.competitor1 = competitors[2];
    match2.competitor2 = competitors[3];
    round1.matches.push(match1);
    round1.matches.push(match2);
    competition.rounds.push(round1);

    let round2 : Round = new Round();
    let match3 : Match = new Match();
    let match4 : Match = new Match();

    match3.competitor1 = competitors[0];
    match3.competitor2 = competitors[2];
    match4.competitor1 = competitors[1];
    match4.competitor2 = competitors[4];
    round2.matches.push(match3);
    round2.matches.push(match4);
    competition.rounds.push(round2);

    let round3 : Round = new Round();
    let match5 : Match = new Match();
    let match6 : Match = new Match();

    match5.competitor1 = competitors[0];
    match5.competitor2 = competitors[3];
    match6.competitor1 = competitors[2];
    match6.competitor2 = competitors[4];
    round3.matches.push(match5);
    round3.matches.push(match6);
    competition.rounds.push(round3);

    let round4 : Round = new Round();
    let match7 : Match = new Match();
    let match8 : Match = new Match();

    match7.competitor1 = competitors[0];
    match7.competitor2 = competitors[4];
    match8.competitor1 = competitors[3];
    match8.competitor2 = competitors[1];
    round4.matches.push(match7);
    round4.matches.push(match8);
    competition.rounds.push(round4);
}

const createCompetitionForSix = (competition : Competition,  competitors : Competitor[]) => {
    let round1 : Round = new Round();
    let match1 : Match = new Match();
    let match2 : Match = new Match();
    let match3 : Match = new Match();

    match1.competitor1 = competitors[0];
    match1.competitor2 = competitors[1];
    match2.competitor1 = competitors[2];
    match2.competitor2 = competitors[3];
    match3.competitor1 = competitors[4];
    match3.competitor2 = competitors[5];
    round1.matches.push(match1);
    round1.matches.push(match2);
    round1.matches.push(match3);
    competition.rounds.push(round1);

    let round2 : Round = new Round();
    let match4 : Match = new Match();
    let match5 : Match = new Match();
    let match6 : Match = new Match();

    match4.competitor1 = competitors[0];
    match4.competitor2 = competitors[2];
    match5.competitor1 = competitors[1];
    match5.competitor2 = competitors[4];
    match6.competitor1 = competitors[3];
    match6.competitor2 = competitors[5];
    round2.matches.push(match4);
    round2.matches.push(match5);
    round2.matches.push(match6);
    competition.rounds.push(round2);

    let round3 : Round = new Round();
    let match7 : Match = new Match();
    let match8 : Match = new Match();
    let match9 : Match = new Match();

    match7.competitor1 = competitors[0];
    match7.competitor2 = competitors[3];
    match8.competitor1 = competitors[1];
    match8.competitor2 = competitors[5];
    match9.competitor1 = competitors[2];
    match9.competitor2 = competitors[4];
    round3.matches.push(match7);
    round3.matches.push(match8);
    round3.matches.push(match9);
    competition.rounds.push(round3);

    let round4 : Round = new Round();
    let match10 : Match = new Match();
    let match11 : Match = new Match();
    let match12 : Match = new Match();

    match10.competitor1 = competitors[0];
    match10.competitor2 = competitors[4];
    match11.competitor1 = competitors[3];
    match11.competitor2 = competitors[1];
    match12.competitor1 = competitors[5];
    match12.competitor2 = competitors[2];
    round4.matches.push(match10);
    round4.matches.push(match11);
    round4.matches.push(match12);
    competition.rounds.push(round4);

    let round5 : Round = new Round();
    let match13 : Match = new Match();
    let match14 : Match = new Match();
    let match15 : Match = new Match();

    match13.competitor1 = competitors[0];
    match13.competitor2 = competitors[5];
    match14.competitor1 = competitors[4];
    match14.competitor2 = competitors[3];
    match15.competitor1 = competitors[1];
    match15.competitor2 = competitors[2];
    round5.matches.push(match13);
    round5.matches.push(match14);
    round5.matches.push(match15);
    competition.rounds.push(round5);
}

const createCompetitionForSeven = (competition : Competition, competitors : Competitor[]) => {
    let round1 : Round = new Round();
    let match1 : Match = new Match();
    let match2 : Match = new Match();
    let match3 : Match = new Match();

    match1.competitor1 = competitors[0];
    match1.competitor2 = competitors[1];
    match2.competitor1 = competitors[2];
    match2.competitor2 = competitors[3];
    match3.competitor1 = competitors[4];
    match3.competitor2 = competitors[5];
    round1.matches.push(match1);
    round1.matches.push(match2);
    round1.matches.push(match3);
    competition.rounds.push(round1);

    let round2 : Round = new Round();
    let match4 : Match = new Match();
    let match5 : Match = new Match();
    let match6 : Match = new Match();
    
    match4.competitor1 = competitors[0];
    match4.competitor2 = competitors[2];
    match5.competitor1 = competitors[1];
    match5.competitor2 = competitors[6];
    match6.competitor1 = competitors[3];
    match6.competitor2 = competitors[4];
    round2.matches.push(match4);
    round2.matches.push(match5);
    round2.matches.push(match6);
    competition.rounds.push(round2);

    let round3 : Round = new Round();
    let match7 : Match = new Match();
    let match8 : Match = new Match();
    let match9 : Match = new Match();

    match7.competitor1 = competitors[0];
    match7.competitor2 = competitors[3];
    match8.competitor1 = competitors[2];
    match8.competitor2 = competitors[6];
    match9.competitor1 = competitors[1];
    match9.competitor2 = competitors[5];
    round3.matches.push(match7);
    round3.matches.push(match8);
    round3.matches.push(match9);
    competition.rounds.push(round3);


    let round4 : Round = new Round();
    let match10 : Match = new Match();
    let match11 : Match = new Match();
    let match12 : Match = new Match();

    match10.competitor1 = competitors[0];
    match10.competitor2 = competitors[4];
    match11.competitor1 = competitors[3];
    match11.competitor2 = competitors[1];
    match12.competitor1 = competitors[5];
    match12.competitor2 = competitors[2];
    round4.matches.push(match10);
    round4.matches.push(match11);
    round4.matches.push(match12);
    competition.rounds.push(round4);

    let round5 : Round = new Round();
    let match13 : Match = new Match();
    let match14 : Match = new Match();
    let match15 : Match = new Match();

    match13.competitor1 = competitors[0];
    match13.competitor2 = competitors[5];
    match14.competitor1 = competitors[4];
    match14.competitor2 = competitors[6];
    match15.competitor1 = competitors[1];
    match15.competitor2 = competitors[3];
    round5.matches.push(match13);
    round5.matches.push(match14);
    round5.matches.push(match15);
    competition.rounds.push(round5);

    let round6 : Round = new Round();
    let match16 : Match = new Match();
    let match17 : Match = new Match();
    let match18 : Match = new Match();

    match16.competitor1 = competitors[0];
    match16.competitor2 = competitors[6];
    match17.competitor1 = competitors[5];
    match17.competitor2 = competitors[3];
    match18.competitor1 = competitors[2];
    match18.competitor2 = competitors[4];
    round6.matches.push(match16);
    round6.matches.push(match17);
    round6.matches.push(match18);
    competition.rounds.push(round6);
}

const createCompetitionForEight = (competition : Competition, competitors : Competitor[]) => {
    let round1 : Round = new Round();
    let match1 : Match = new Match();
    let match2 : Match = new Match();
    let match3 : Match = new Match();
    let match4 : Match = new Match();

    match1.competitor1 = competitors[0];
    match1.competitor2 = competitors[1];
    match2.competitor1 = competitors[2];
    match2.competitor2 = competitors[3];
    match3.competitor1 = competitors[4];
    match3.competitor2 = competitors[5];
    match4.competitor1 = competitors[6];
    match4.competitor2 = competitors[7];
    round1.matches.push(match1);
    round1.matches.push(match2);
    round1.matches.push(match3);
    round1.matches.push(match4);
    competition.rounds.push(round1);

    let round2 : Round = new Round();
    let match5 : Match = new Match();
    let match6 : Match = new Match();
    let match7 : Match = new Match();
    let match8 : Match = new Match();

    match5.competitor1 = competitors[0];
    match5.competitor2 = competitors[2];
    match6.competitor1 = competitors[1];
    match6.competitor2 = competitors[3];
    match7.competitor1 = competitors[4];
    match7.competitor2 = competitors[6];
    match8.competitor1 = competitors[5];
    match8.competitor2 = competitors[7];
    round2.matches.push(match5);
    round2.matches.push(match6);
    round2.matches.push(match7);
    round2.matches.push(match8);
    competition.rounds.push(round2);

    let round3 : Round = new Round();
    let match9 : Match = new Match();
    let match10 : Match = new Match();
    let match11 : Match = new Match();
    let match12 : Match = new Match();

    match9.competitor1 = competitors[0];
    match9.competitor2 = competitors[3];
    match10.competitor1 = competitors[2];
    match10.competitor2 = competitors[1];
    match11.competitor1 = competitors[4];
    match11.competitor2 = competitors[7];
    match12.competitor1 = competitors[6];
    match12.competitor2 = competitors[5];
    round3.matches.push(match9);
    round3.matches.push(match10);
    round3.matches.push(match11);
    round3.matches.push(match12);
    competition.rounds.push(round3);

    let round4 : Round = new Round();
    let match13 : Match = new Match();
    let match14 : Match = new Match();
    let match15 : Match = new Match();
    let match16 : Match = new Match();

    match13.competitor1 = competitors[0];
    match13.competitor2 = competitors[4];
    match14.competitor1 = competitors[1];
    match14.competitor2 = competitors[5];
    match15.competitor1 = competitors[2];
    match15.competitor2 = competitors[6];
    match16.competitor1 = competitors[7];
    match16.competitor2 = competitors[3];
    round4.matches.push(match13);
    round4.matches.push(match14);
    round4.matches.push(match15);
    round4.matches.push(match16);
    competition.rounds.push(round4);

    let round5 : Round = new Round();
    let match17 : Match = new Match();
    let match18 : Match = new Match();
    let match19 : Match = new Match();
    let match20 : Match = new Match();

    match17.competitor1 = competitors[0];
    match17.competitor2 = competitors[5];
    match18.competitor1 = competitors[4];
    match18.competitor2 = competitors[1];
    match19.competitor1 = competitors[3];
    match19.competitor2 = competitors[6];
    match20.competitor1 = competitors[2];
    match20.competitor2 = competitors[7];
    round5.matches.push(match17);
    round5.matches.push(match18);
    round5.matches.push(match19);
    round5.matches.push(match20);
    competition.rounds.push(round5);

    let round6 : Round = new Round();
    let match21 : Match = new Match();
    let match22 : Match = new Match();
    let match23 : Match = new Match();
    let match24 : Match = new Match();

    match21.competitor1 = competitors[0];
    match21.competitor2 = competitors[6];
    match22.competitor1 = competitors[7];
    match22.competitor2 = competitors[1];
    match23.competitor1 = competitors[4];
    match23.competitor2 = competitors[2];
    match24.competitor1 = competitors[3];
    match24.competitor2 = competitors[5];
    round6.matches.push(match21);
    round6.matches.push(match22);
    round6.matches.push(match23);
    round6.matches.push(match24);
    competition.rounds.push(round6);
}

function createCompetitorsEntityArray(competitors : string[]) {
    let competitorsNumber : number = competitors.length;
    let competitorsEntityArray : Competitor[] = new Array<Competitor>(competitorsNumber);

    for(let i : number = 0; i < competitorsNumber; i++) {
        let competitorEntity : Competitor = new Competitor();
        competitorEntity.name = competitors[i];
        competitorsEntityArray[i] = competitorEntity;
    }

    return competitorsEntityArray;
}

function setScoringSystem(competition : Competition, req : Request) {
    competition.win = req.body.win;
    competition.draw = req.body.draw;
    competition.lose = req.body.lose;
}


export { createCompetitionForFour, createCompetitionForFive, createCompetitionForSix, createCompetitionForSeven, createCompetitionForEight, createCompetitorsEntityArray, setScoringSystem };