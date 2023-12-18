'use client'
import React, { useState } from 'react';
import {createAction} from "@/app/serverActions/postAction";

const PostForm = ({id}: {id:string}) => {

    const addWithId = createAction.bind(null, id);
    return (
        <div className=" p-4 ">
            <p className=" mb-4">Add post</p>
            <form action={addWithId} className="">
                <div className="flex">

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
                        className="mt-1 p-2 border rounded-md  focus:outline-none focus:ring focus:border-blue-300"
                    ></textarea>
                </div>
                
                <div className="mb-3 mr-2 ">
                <button
                    type="submit"
                    className=" h-12 text-white hover:text-black bg-teal-700  hover:bg-gray-100 ml-2 mt-1 py-2 px-4 rounded focus:outline-none "
                >
                    Submit
                </button>
                </div>
                </div>
            </form>
        </div>
    );
};

export default PostForm;