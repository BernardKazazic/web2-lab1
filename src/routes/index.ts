import express, { Router } from 'express';
import homePage from '../controllers/homeController';


const indexRouter: Router = express.Router();

indexRouter.get('/', homePage);

export default indexRouter;