import mongoose, { Document, Schema,models } from 'mongoose';

const UserSchema:Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password:{type: String, required: true},
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},{ timestamps: true });

const User=  models.User || mongoose.model('User', UserSchema)

export default User;