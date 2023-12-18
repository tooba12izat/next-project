import {connectDb} from "@/db/dbConn";
import User from '@/db/models/user'
import {NextResponse} from "next/server";
import {userType} from "@/app/types";

export const GET = async () => {
    try {
        await connectDb();
        const data:userType[] = await User.find({});
        if (data) {
            return NextResponse.json({ data }, { status: 200 });
        } else {
            return NextResponse.json({ message: "data not found" }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ error });
    }
};