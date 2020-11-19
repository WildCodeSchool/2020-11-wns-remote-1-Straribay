import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    event(id: Int!) : Event
    events(theme: String): [Event]
  }

  type Event {
    id: Int!
    title: String
    author: String
    theme: String
    date_start Date
    description: String
    infos: string
    img: String
    attending: String
    invits: [String]
  }
`)