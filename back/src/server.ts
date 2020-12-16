import express from "express";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { execArgv } from "process";

import MongoConnection from "./MongoConnection";
import { schema } from "./schema";
import EventSchema from "./models/Events";

const port = 7777;

const start = async() => {
  // //Database
await mongoose
.connect("mongodb://127.0.0.1:27017/virtualschool", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  autoIndex: true,
})
console.log("Connected to database")
// .catch((err) => console.log(err));
//Create an express server and a GraphQL endpoint
const app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Home !");
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(port, () =>
  console.log(`Express GraphQL Server is now running on localhost:${port}`)
);
}


var getEvents = function() {
  return EventSchema.find()
}

let root = {
  events: getEvents
};

start()
