import UpdateUserButton from "@/app/components/user/updateUserButton";
import DeleteUserButton from "@/app/components/user/deleteUserButton";
import {UserListType, UserProps, userType} from "@/app/types";
import {connectDb} from "@/db/dbConn";
import User from "@/db/models/user";
import SeeFriendsButton from "@/app/components/user/seeFriendsButton";
import PostsButton from "@/app/components/user/postsButton";
const usersPerPage = 4;

const getUsers = async (query: string, currentPage: number) => {
    try {
        await connectDb();

        const skip = (currentPage - 1) * usersPerPage;
        const data: userType[] = await User.find({name: {$regex: new RegExp(query, 'i')}}).limit(usersPerPage).skip(skip);
        if (data.length === 0) {
            // If data is not found, throw an error
            throw new Error('No users found for the given query and page.');
        }
        return data;

    } catch (err) {
        throw new Error('Failed to fetch data.');
    }
}

const Table = async ({query, currentPage}: { query: string; currentPage: number; }) => {
    const users = await getUsers(query, currentPage)
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
                {users.map((user: UserListType) => {
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
                                    <SeeFriendsButton id={idAsString}/>
                                    <PostsButton id={idAsString}/>
                                    <UpdateUserButton id={idAsString}/>
                                    <DeleteUserButton id={idAsString}/>

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