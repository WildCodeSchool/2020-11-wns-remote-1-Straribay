import * as mongoose from 'mongoose';

export const Schema = mongoose.Schema;
export const ObjectId = mongoose.Types.ObjectId;
export const Mixed = mongoose.Schema.Types.Mixed;

export interface UserModel extends mongoose.Document {
  firstname: string;
  lastname: string;
  email: string;
  event: number;
  avatar: string;
  group: string;
}

const schema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
  group: String,
});

export default schema;
