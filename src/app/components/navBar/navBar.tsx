import React from "react";
import Link from "next/link";
import { PowerIcon } from '@heroicons/react/24/outline';
import {signOut} from '@/auth'
const NavBar = () => {
    return (
        <>
            <div>
                <ul className="flex justify-between m-10 item-center">
                    <div className="w-full flex gap-10">
                        <Link href="/auth/login">
                            <li>Login</li>
                        </Link>
                        <Link href="/users">
                            <li>Users</li>
                        </Link>
                        <Link href="/posts">
                            <li>Posts</li>
                        </Link>
                        {/*<div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>*/}
                        <form
                            action={async () => {
                                'use server';
                                await signOut();
                            }}
                        >   <div className="">
                            <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-teal-700 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                                <PowerIcon className="w-5 text-white" />
                                <div className="hidden md:block text-white">Sign Out</div>
                            </button>
                        </div>
                        </form>

                        {/*<Link href="/register">*/}
                        {/*    <li>Register</li>*/}
                        {/*</Link>*/}

                    </div>
                </ul>
            </div>
        </>
    )
}

export default NavBar;