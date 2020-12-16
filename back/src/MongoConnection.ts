import mongoose from "mongoose";

const MongoConnection = mongoose.connect(
  "mongodb://127.0.0.1:27017/virtualschool",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  }
)
.then(() => console.log("Connected to database"))
.catch((err) => console.log(err));


export default MongoConnection;
