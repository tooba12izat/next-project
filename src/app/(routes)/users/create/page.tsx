import CreateUserForm from "@/app/components/user/createUserForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'create',
};
const Page=async ()=> {

    return (

            <CreateUserForm/>


    )
}
export default Page;