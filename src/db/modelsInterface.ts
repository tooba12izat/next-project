import mongoose from "mongoose";

export interface IFriend{
    userId:mongoose.Schema.Types.ObjectId,
    friendId:mongoose.Schema.Types.ObjectId,
}

