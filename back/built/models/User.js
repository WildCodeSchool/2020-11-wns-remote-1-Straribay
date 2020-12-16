"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    event: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Event",
    },
    avatar: String,
    friends: [{
            type: String
        }],
    group: String,
});
exports.default = mongoose_1.model("User", UserSchema);
