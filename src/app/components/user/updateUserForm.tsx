import React from "react";
import {updateAction} from "@/app/serverActions/userActions";
import {UserProps} from "@/app/types";
const UpdateUserForm = ({name, email, id}: UserProps) => {
    const updateUserWithId = updateAction.bind(null, id);
    return (
        <>
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="bg-gray-100 p-8 rounded shadow-md w-96">
                    <h1 className="text-4xl text-teal-700 text-center font-semibold mb-8">Update User</h1>
                    <form action={updateUserWithId}>
                        <input
                            type="text"
                            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                            placeholder="name"
                            required
                            name="name"
                        />
                        <input
                            type="email"
                            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                            placeholder="Email"
                            required
                            name="email"
                        />

                        <input
                            type="password"
                            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                            placeholder="Password"
                            required
                            name="password"
                        />
                        <button
                            type="submit"
                            className="w-full bg-teal-700 text-white py-2 rounded hover:bg-gray-400"
                        >
                            {" "}
                            update
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default UpdateUserForm;