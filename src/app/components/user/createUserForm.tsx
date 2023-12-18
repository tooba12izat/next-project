
'use client'
import React from "react";
import {createAction} from "@/app/serverActions/userActions";

const CreateUserForm = () => {

    return (
        <>

            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="bg-gray-100 p-8 rounded shadow-md w-96">
                    <h1 className="text-4xl text-teal-700 text-center font-semibold mb-8">Create User</h1>
                    <form action={createAction}>
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
                            Create
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default CreateUserForm;