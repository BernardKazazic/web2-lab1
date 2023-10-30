import express from 'express';
import indexRouter from './routes/index';


const app = express();

app.use('/', indexRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});