'use server'

import { revalidatePath } from 'next/cache'
import {connectDb} from "@/db/dbConn";
import User from "@/db/models/user";


export const createAction = async (id: string, formData: FormData) => {
    await connectDb();
    const friendId = formData.get('userId');
    const userId=id;

    try {
        console.log("entered function");
        const friend = await User.findById(friendId);
        const user = await User.findById(userId);

         user.friends.push(friend._id);
         await user.save();
         console.log("done")
    }
    catch (error) {
        return {
            message: 'Database Error: Failed to Update User.',
        };
    }
    revalidatePath(`/users/${id}/friends`)
    //redirect('/users')
}

export const deleteAction = async (friendId:string,userId: string) => {
    // throw new Error('Failed to Delete Invoice');
    await connectDb();
    try {
        const friend = await User.findById(friendId);
        const user = await User.findById(userId);
        user.friends.pull(friend._id);
        await user.save();
    }
    catch (error) {
        return {
            message: 'Database Error: Failed to delete user',
        };
    }
    revalidatePath(`/users/${userId}/friends`)
}
