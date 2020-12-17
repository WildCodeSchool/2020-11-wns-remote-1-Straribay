import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';
import User from './models/User';

const app = express();
const port = 7777;

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
    getUser(email: String): User
    getUsers: [User]
  }

  type Mutation {
    addUser(user: InputUser): User
  }
`;
interface InputUser {
  firstname: string;
  lastname: string;
  email: string;
}

const resolvers = {
  Query: {
    getUser: async (_: unknown, { email }: { email: string }) => {
      // eslint-disable-next-line no-console
      console.log('email', email);
      const user = await User.findOne({ email });
      return user;
    },
    getUsers: async () => User.find({}),
  },

  Mutation: {
    addUser: async (args: InputUser) => {
      try {
        const user = new User(args);
        const response = await user.save();
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
