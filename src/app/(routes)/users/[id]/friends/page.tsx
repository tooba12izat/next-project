import {User} from "@/db/dbModels";
import {connectDb} from "@/db/dbConn";
import {userType} from "@/app/types";
import AddFriendForm from "@/app/components/user/friends/addFriendForm";
import Table from "@/app/components/user/friends/table";

const Page=async ({ params }: { params: { id: string } } )=> {
    const id = params.id;
    const getAllUsers=async (id:string)=>{
        try {
            await connectDb();
            const data1=await User.findById(id).populate('friends')
            const friendsArray=data1.friends
            const data: userType[] = await User.find({$and: [
                { _id: { $ne: id} },{ _id: { $nin: friendsArray } }]});
            if (data.length === 0) {
                // If data is not found, throw an error
                throw new Error('No users found for the given query and page.');
            }
            return data;

        } catch (err) {
            throw new Error('Failed to fetch data.');
        }

    }
    const allUsers=await  getAllUsers(id)

    return (
        <>
            <AddFriendForm users={allUsers} id={id}/>
            <Table id={id}/>
        </>
    )
}
export default Page;