import express from 'express';
import mongoose from 'mongoose';
import Debug from 'debug';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import tabRoutes from './routes/tab.route';

// Set up the express app
const app = express();
const port = process.env.PORT || 8000;
const debug = Debug('app');

// Log requests to the console
app.use(logger('dev'));

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();
app.use('/api/v1', router);

tabRoutes(router);

app.get('/', (req, res) => {
  res.json({ message: 'welcome to climedo api' });
});

const kickOff = () => {
  mongoose.connect(process.env.DATABASE_URL,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }).then(
    () => {
      app.listen(port, () => {
        debug(`Climedo App listening at http://localhost:${port}`);
      });
    },
  );
};

kickOff();
