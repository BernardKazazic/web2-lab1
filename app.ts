import express from 'express';
import indexRouter from './routes/homeRouter';
import competitionRouter from './routes/competitionRouter';
import { auth } from 'express-openid-connect';
import { AppDataSource } from './config/datasource';
import { Auth0Config } from './config/auth0';
import bodyParser from 'body-parser';

AppDataSource.initialize();

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(auth(Auth0Config));

// routes
app.use('/', indexRouter);
app.use('/', competitionRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});