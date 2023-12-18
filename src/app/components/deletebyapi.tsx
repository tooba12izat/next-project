"use client"
import {TrashIcon} from '@heroicons/react/24/outline'
import {useRouter} from "next/navigation";

const DeletePostButton = ({userId,id}: {userId:string,id:string}) => {
    const router = useRouter();
    const handleDelete=async ()=>{
        try {
            const response = await fetch(`http://localhost:3000/api/users/${userId}/posts/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            router.refresh();
        } catch (error:any) {
            console.error('Error:', error.message);
        }
    }
    return (

        <button onClick={handleDelete} className="rounded-md border text-white hover:text-black  p-1.5 bg-teal-700  hover:bg-gray-100">
            <TrashIcon className='w-8 px-1' />
        </button>

    );
}

export default DeletePostButton;