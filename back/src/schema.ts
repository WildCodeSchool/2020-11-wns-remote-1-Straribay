import { buildSchema } from 'graphql';

export const schema = buildSchema(`
scalar Date
  type Query {
    event(id: Int!) : Event
    events(theme: String): [Event]
  }

  type Event {
    id: Int!
    title: String
    author: String
    theme: String
    date_start: Date
    description: String
    infos: String
    img: String
    attending: String
    invits: [String]
  }
`)