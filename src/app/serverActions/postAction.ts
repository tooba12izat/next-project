'use server'
import { revalidatePath } from 'next/cache'
import {connectDb} from "@/db/dbConn";
import User from "@/db/models/user";
import Post from "@/db/models/post";

export const createAction = async (id: string, formData: FormData) => {
    await connectDb();
    const title = formData.get('title');
    const content = formData.get('content')

    try {
        const userId = id;
        const getUser = await User.findById({_id: userId});
        const user=getUser._id
        const newPost = new Post({
            title,
            content,
            user
        });
        await newPost.save();
    }
    catch (error) {
        return {
            message: 'Database Error: Failed to Create post.',
        };
    }
    revalidatePath('/posts')
    //redirect('/users')
}

export const deleteAction = async (id: string) => {

    await connectDb();
    try{
        await Post.findByIdAndDelete({_id: id});
    }
    catch (error) {
        return {
            message: 'Database Error: Failed to delete post',
        };
    }
    revalidatePath('/posts')
}
