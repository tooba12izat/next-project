'use client'
import { PencilIcon } from '@heroicons/react/24/outline';
import {useRouter} from "next/navigation";

const UpdateUserButton=({id}: { id: string }) =>{
    const router = useRouter();
    console.log(id)
    const handleClick = () => {
        router.push(`/users/${id}/edit`)

    }
    return (
        <>
            <button onClick={handleClick} className="rounded-md border text-white hover:text-black m-3 p-1.5 bg-teal-700  hover:bg-gray-100">
                <PencilIcon className='w-8 px-1' />
            </button>

        </>
    )
}

export default UpdateUserButton;