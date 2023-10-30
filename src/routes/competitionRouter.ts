import express, { Router } from 'express';
import { competitionPage, createCompetition, newCompetitionPage } from '../controllers/competitionController';
import { requiresAuth } from 'express-openid-connect';


const competitionRouter: Router = express.Router();

competitionRouter.get('/createCompetition', requiresAuth(), newCompetitionPage);
competitionRouter.post('/createCompetition', requiresAuth(), createCompetition);
competitionRouter.get('/competition/:id', competitionPage);

export default competitionRouter;