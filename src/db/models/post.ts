import mongoose, { Document, Schema,models } from 'mongoose';


const postSchema:Schema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
},{ timestamps: true });

const Post =models.Post || mongoose.model("Post", postSchema);
export default Post;