import mongoose from "mongoose";

const MongoConnection = mongoose
  .connect("mongodb://127.0.0.1:27017/virtualschool", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  })
  // eslint-disable-next-line no-console
  .then(() => console.log("Connected to database"))
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));

export default MongoConnection;
