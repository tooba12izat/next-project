"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authenticate } from "@/app/serverActions/authAction";
import { useFormState, useFormStatus } from 'react-dom'
const initialState = {
    message: null,
}

const SubmitButton = () => {

    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            aria-disabled={pending}
            className="w-full  bg-teal-700 text-white py-2 rounded hover:bg-blue-600">
            Add
        </button>
    )
}
const LoginUserForm = () => {
    const [state, formAction] = useFormState(authenticate, initialState)


    return (
        <>
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="bg-gray-100 p-8 rounded shadow-md w-96">
                    <h1 className="text-4xl text-teal-700 text-center font-semibold mb-8">Login</h1>
                    <form action={formAction}>

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
                        <SubmitButton />

                        {state.message ? (
                            <p aria-live="polite" className="p-1 text-red-700">
                                {state?.message}
                            </p>
                        ) : null}


                    </form>

                </div>
            </div>
        </>

    )
}

export default LoginUserForm;