import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    firstname: { 
        type: String,
        required: true
    },
    lastname: { 
        type:String,
        required: true
    },
    email: { 
        type: String, 
        unique: true,
        required: true 
    },
    event: {
        type :Schema.Types.ObjectId,
        ref : "Event",
    },
    avatar: String,
    friends: [{
        type: String
    }],
    group: String,
    
});

export default model("User", UserSchema);