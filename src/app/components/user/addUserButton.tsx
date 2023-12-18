'use client'

import {useRouter} from "next/navigation";
 const AddUserButton=()=> {
    const router = useRouter();
    const handleAdd = () => {
        router.push(`/users/create`)
    }
    return (
                <button onClick={handleAdd} className="text-white hover:text-black bg-teal-700  hover:bg-gray-100  py-2 px-4 rounded focus:outline-none ">
                    Add user
                </button>

    )
}
export default AddUserButton;