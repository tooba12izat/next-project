import React from "react";
import {createAction} from "@/app/serverActions/friendAction";
import {userType} from "@/app/types";
import {UserCircleIcon,} from '@heroicons/react/24/outline';

const AddFriendForm = ({users,id}: { users: userType[] ,id:string}) => {
    const addFriendWithId = createAction.bind(null, id);
    return (
        <>
            <form action={addFriendWithId}>
                <div className="mb-4">
                    <label htmlFor="user" className="mb-2 block text-sm font-medium">
                        Choose friend
                    </label>
                    <div className="relative">
                        <select
                            id="user"
                            name="userId"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"

                        >
                            <option value="" disabled>
                                select a user
                            </option>
                            {users.map((user) => (
                                <option key={user._id} value={user._id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        <UserCircleIcon
                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-auto p-2 bg-teal-700 text-white text-sm  rounded hover:bg-gray-400"
                >
                    {" "}
                    Add friend
                </button>
            </form>
        </>
    )
}

export default AddFriendForm;