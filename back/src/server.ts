import express from 'express';
import mongoose, { Document } from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';
import User from './models/User';

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
    // eslint-disable-next-line no-console
    console.log('Connected to database');
    app.listen(port, () =>
      // eslint-disable-next-line no-console
      console.log(
        `Express GraphQL Server is now running on localhost:${port}${server.graphqlPath}`
      )
    );
  } catch (err) {
    // eslint-disable-next-line no-console
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
    _id: String
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
interface InputUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
}
const resolvers = {
  Query: {
    getUser: async (id: string) => User.find({ _id: id }).exec(),
    getUsers: async () => User.find({}).exec(),
  },

  Mutation: {
    addUser: async (_ , args: InputUser) => {
      try {
        const response = await User.create(args);
        // eslint-disable-next-line no-console
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
