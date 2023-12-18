'use client'
import React, { useState } from 'react';
import {createAction} from "@/app/serverActions/postAction";

const PostForm = ({id}: {id:string}) => {

    const addWithId = createAction.bind(null, id);
    return (
        <div className="  p-4">
            <h5 className="text-3xl mb-4">Add post</h5>
            <form action={addWithId} className="max-w-md">
                <div className="flex justify-center">

                <div className="mb-3 mr-2 ">
                    <input
                        placeholder="title"
                        type="text"
                        id="title"
                        name="title"

                        className="mt-1 p-2 border rounded-md  focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        name="content"
                        placeholder="content..."
                        className="mt-1 p-2 border rounded-md w-36 focus:outline-none focus:ring focus:border-blue-300"
                    ></textarea>
                </div>
                </div>

                <button
                    type="submit"
                    className="text-white hover:text-black bg-teal-700  hover:bg-gray-100  py-2 px-4 rounded focus:outline-none "
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PostForm;