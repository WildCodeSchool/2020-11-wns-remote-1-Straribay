import express from 'express';
import mongoose from 'mongoose';
import User from './models/User';
import { ApolloServer, gql } from 'apollo-server-express';

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
    app.listen(port, () =>
      console.log(
        `Express GraphQL Server is now running on localhost:${port}${server.graphqlPath}`
      )
    );
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

const typeDefs = gql`
  input InputUser {
    firstname: String
    lastname: String
    email: String
  }

  type User {
    _id: ObjectId
    firstname: String
    lastname: String
    email: String
  }

  type Query {
    getUser(id: String): User
    getUsers: [User]
  }

  type Mutation {
    addUser(firstname: String!, lastname: String!, email: String!): User
  }
`;
interface InputUser {
  _id?: String;
  firstname: String;
  lastname: String;
  email: String;
}
const resolvers = {
  Query: {
    getUser: async (id: string) => await User.findOne({ _id: id }).exec(),
    getUsers: async () => await User.find({}).exec(),
  },

  Mutation: {
    addUser: async (_: any, args: any) => {
      try {
        let response = await User.create(args);
        console.log(response, args);
        return response;
      } catch (e) {
        return e.message;
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
