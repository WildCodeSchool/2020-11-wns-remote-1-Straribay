import express from 'express';
import mongoose from 'mongoose';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

import { schema } from './schema';
import { execArgv } from 'process';
import EventSchema from './models/Events';

//Database 
const db = mongoose
  .connect("mongodb://127.0.0.1:27017/virtualschool", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  })

  mongoose.connection.once('open', () => {
    console.log('connected to database');
})

var getEvents = function() {
  return EventSchema.find()
}

let root = {
  events: getEvents
};

//Create an express server and a GraphQL endpoint
const app = express();
//middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(8080, () => console.log('Express GraphQL Server is now running on localhost:8080/graphql'));
