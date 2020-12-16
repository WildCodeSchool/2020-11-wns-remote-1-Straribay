"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
exports.schema = graphql_1.buildSchema(`
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
`);
