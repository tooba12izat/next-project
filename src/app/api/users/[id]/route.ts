// import {connectDb} from "@/app/db/dbConn";
// import {User} from "@/app/db/dbModels";
// import {NextResponse} from "next/server";
// import {userType} from "@/app/types";
//
// export const GET=async (request: Request, {params}: { params: { id: string } })=> {
//     try {
//         await connectDb();
//         const userid = params.id;
//         const data = await User.findById({_id: userid});
//         if (data) {
//             return NextResponse.json({data}, {status: 200,})
//         } else {
//             return NextResponse.json({message: "data not found"}, {status: 400,})
//         }
//     } catch (error) {
//         return NextResponse.json({error})
//     }
// }