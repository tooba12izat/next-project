import UpdateUserForm from "@/app/components/user/updateUserForm";
import { notFound } from 'next/navigation';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'edit',
};
async function getUser(id:string){
    const res=await fetch(`http://localhost:3000/api/users/${id}`)
    const user=await res.json();
    if (!user) {
        notFound();
    }
    return user.data;
}

const Page=async ({ params }: { params: { id: string } })=> {
    const id = params.id;
   const user=await getUser(id)

    return (
        <>
            <UpdateUserForm name={user.name} email={user.email} id={params.id} />

        </>
    )
}
export default Page;