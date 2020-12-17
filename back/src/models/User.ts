import * as mongoose from 'mongoose';

export const { Schema } = mongoose;
// export const { ObjectId } = mongoose.Types;
// export const { Mixed } = mongoose.Schema.Types;

export interface UserModel extends mongoose.Document {
  firstname: string;
  lastname: string;
  email: string;
  // event: number;
  // avatar: string;
  // group: string;
}

const userSchema = new Schema({
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
  // event: {
  // type: Schema.Types.ObjectId,
  // ref: 'Event',
  // },
  group: String,
});

const User = mongoose.model('user', userSchema);

export default User;
