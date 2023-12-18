import {connectDb} from "@/db/dbConn";
import Post from '@/db/models/post';
import {revalidatePath} from "next/cache";
import {NextResponse} from "next/server";

export const DELETE=async (request: Request, {params}: { params: { postId: string,id:string } })=> {
    try {
        await connectDb();
        const post= await Post.findByIdAndDelete({_id: params.postId});
        revalidatePath(`/users/${params.id}/posts`)
        return NextResponse.json( {status: 200,})
    } catch (error) {
        return NextResponse.json({error})
    }
}