"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MongoConnection = mongoose_1.default.connect("mongodb://127.0.0.1:27017/virtualschool", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
})
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));
//mongoose.connection.once("open", () => {
//  console.log("connected to database");
//});
exports.default = MongoConnection;
