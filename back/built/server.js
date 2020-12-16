"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
// //Database
mongoose_1.default.connect("mongodb://127.0.0.1:27017/virtualschool", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
})
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));
//   mongoose.connection.once('open', () => {
//     console.log('connected to database');
// })
// var getEvents = function() {
//   return EventSchema.find()
// }
// let root = {
//   events: getEvents
// };
//Create an express server and a GraphQL endpoint
const app = express_1.default();
//middleware
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Welcome Home !");
});
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true
// }));
app.listen(8080, () => console.log("Express GraphQL Server is now running on localhost:8080"));
