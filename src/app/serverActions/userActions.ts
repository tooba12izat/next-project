'use server'
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache'
import {connectDb} from "@/db/dbConn";
import User from "@/db/models/user";
import {redirect} from "next/navigation";


export const updateAction = async (id: string, formData: FormData) => {
    await connectDb();
    const name = formData.get('name');
    const email = formData.get('email')
    const password = formData.get('password');
    //const hashedPassword = await bcrypt.hash(password, 5);
    const data = {name: name, email: email, password: password}
    try {
        const updatedStudent = await User.findByIdAndUpdate({_id: id}, data, {new: true})
    }
    catch (error) {
        return {
            message: 'Database Error: Failed to Update User.',
        };
    }
    revalidatePath('/users')
    redirect('/users')
}
export const deleteAction = async (id: string) => {
   // throw new Error('Failed to Delete Invoice');
    await connectDb();
    try{
    await User.findByIdAndDelete({_id: id})
    }
    catch (error) {
        return {
            message: 'Database Error: Failed to delete user',
        };
    }
    revalidatePath('/users')
}


export const createAction=async (formData:FormData)=>{
    await connectDb();
    const name = formData.get('name');
    const email = formData.get('email')
    const password = formData.get('password');
    try {
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return ("Email is already in use");
        }
        const newUser = new User({
            name,
            email,
            password,
        });
        await newUser.save();
    }
    catch (error) {
        return {
            message: 'Database Error: Failed to Create User.',
        };
    }

    revalidatePath('/users');
    redirect('/users');

}