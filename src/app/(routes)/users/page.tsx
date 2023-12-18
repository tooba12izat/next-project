 import Table from "@/app/components/user/table";
import AddUserButton from "@/app/components/user/addUserButton";
import {Metadata} from "next";
import Pagination from "@/app/components/user/pagination";
import Search from "@/app/components/user/search";
import {connectDb} from "@/db/dbConn";
import User from "@/db/models/user";
import {auth} from "@/auth";

const usersPerPage: number = 4;
export const metadata: Metadata = {
    title: 'users',
};
const getUserPages = async (query: string) => {
    try {
        await connectDb();
        const count: number = await User.countDocuments({name: {$regex: new RegExp(query, 'i')}});
        const totalPages = Math.ceil(Number(count / usersPerPage));
        return totalPages;

    } catch (err) {
        throw new Error('Failed to fetch data.');
    }


}

const Page = async ({searchParams}: {
    searchParams?: { query?: string; page?: string; };
}) => {

    const session = await auth()
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await getUserPages(query);
    return (
        <>
            <div className="mb-4">
                <p>Welcome {session?.user.name}!</p>
            </div>
            <div className="flex justify-between ">
                <Search placeholder="search user.."/>
                <AddUserButton/>

            </div>

            <div>
                <Table query={query} currentPage={currentPage}/>
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages}/>
                </div>
            </div>

        </>
    )
}
export default Page;
