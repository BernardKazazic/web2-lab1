import express from 'express';
import indexRouter from './routes/homeRouter';
import { auth, requiresAuth } from 'express-openid-connect';
import loadEnv from './config/config';

loadEnv();

const config = {
  authRequired: false,
  idpLogout: true,
  secret: process.env.SECRET,
  baseURL: 'http://localhost:3000',
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  authorizationParams: {
    response_type: 'code',
  },
}

const app = express();

app.set('view engine', 'ejs');
app.use(auth(config));


app.use('/', indexRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});