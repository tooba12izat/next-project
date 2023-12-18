
import {deleteAction} from "@/app/serverActions/userActions";
import {TrashIcon} from '@heroicons/react/24/outline'

const DeleteUserButton = ({id}: {id:string}) => {
    const deleteUserWithId = deleteAction.bind(null, id);
    return (
        <form action={deleteUserWithId}>
            <button className="rounded-md border text-white hover:text-black m-3 p-1.5 bg-teal-700  hover:bg-gray-100">
                <TrashIcon className='w-8 px-1' />
            </button>
        </form>
    );
}

export default DeleteUserButton;