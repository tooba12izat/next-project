import {UserListType, UserProps, userType} from "@/app/types";
import {connectDb} from "@/db/dbConn";
import User from "@/db/models/user";
import DeleteFriendButton from "@/app/components/user/friends/deleteFriendButton";

const getFriends = async (userId:string) => {
    try {
        await connectDb();
       const user = await User.findById(userId).populate('friends');
        if (user.length === 0) {
            // If data is not found, throw an error
            throw new Error('No users found for the given query and page.');
        }
        return user.friends;
    } catch (err) {
        throw new Error('Failed to fetch data.');
    }
}

const Table = async ({id}: { id:string}) => {
    const friends = await getFriends(id)
    return (
        <>
            <table className="hidden min-w-full text-gray-900 md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                    <th scope="col" className="px-3 py-5 font-medium text-lg">
                        ID
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium text-lg ">
                        Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium text-lg">
                        Email
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white">
                {friends.map((user: UserListType) => {
                    const idAsString = user._id.toString();
                    return (
                        <tr key={user._id}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                            <td className="whitespace-nowrap py-3 px-3 ">
                                <p>{user._id}</p>
                            </td>
                            <td className="whitespace-nowrap py-3 px-3">
                                <p>{user.name}</p>
                            </td>
                            <td className="whitespace-nowrap py-3 px-3">
                                {user.email}
                            </td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex justify-end gap-3">
                                    <DeleteFriendButton friendId={idAsString} userId={id} />
                                </div>
                            </td>

                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}
export default Table;