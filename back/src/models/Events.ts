import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema({
  author: String,
  title: String,
  theme: String,
  date_start: Date,
  description: String,
  infos: String,
  img: String,
  attending: String,
  invits: [String]
})

export default mongoose.model('event', EventSchema);