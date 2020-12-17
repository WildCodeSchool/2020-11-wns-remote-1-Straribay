import express from 'express';
import mongoose from 'mongoose';
import schema from './models/User';

const app = express();
const port = 7777;

const start = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/virtualschool', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      autoIndex: true,
    });
    console.log('Connected to database');
    app.listen(port, () => console.log(`Express GraphQL Server is now running on localhost:${port}`));
  } catch (err) {
    console.log(err);
  }

  // middleware
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Welcome Home !');
  });
};
start();
