"use client"
import {TrashIcon} from '@heroicons/react/24/outline'
import { deleteAction} from "@/app/serverActions/postAction";

const DeletePostButton = ({id}: {id:string}) => {

    const deleteWithId = deleteAction.bind(null, id);

    return (
        <form action={deleteWithId}>
            <button  className="rounded-md border text-white hover:text-black  p-1.5 bg-teal-700  hover:bg-gray-100">
                <TrashIcon className='w-8 px-1' />
            </button>
        </form>

    );
}

export default DeletePostButton;