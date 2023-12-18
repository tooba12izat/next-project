import {connectDb} from "@/db/dbConn";
import Post from "@/db/models/post";
import User from "@/db/models/user";
import {NextResponse} from "next/server";
import {PostsListType, userType} from "@/app/types";
import {revalidatePath} from "next/cache";

export const GET=async (request: Request, {params}: { params: { id: string } })=> {
    try {
        const id=params.id;
        await connectDb();
        const userr = await User.findById({_id: id});
        const user=userr._id
        const data:PostsListType[]= await Post.find({user:user}).populate('user')
        if (data) {
            return NextResponse.json({data}, {status: 200,})
        } else {
            return NextResponse.json({message: "data not found"}, {status: 400,})
        }
    } catch (error) {
        return NextResponse.json({error})
    }
}

export const POST=async (request: Request, {params}: { params: { id: string } })=> {
    try {
        await connectDb();
        const userid = params.id;
        const userr = await User.findById({_id: userid});
        const user=userr._id
        const {title,content}=await request.json()

        const newPost = new Post({
            title,
            content,
            user
        });
       const newData= await newPost.save();
       revalidatePath(`/users/${userid}/posts`)
       return NextResponse.json({newData}, {status: 200,})


    } catch (error) {
        return NextResponse.json({error})
    }
}


