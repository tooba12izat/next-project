'use client'
import React, { useState } from 'react';
import {useRouter} from "next/navigation";

const PostForm = ({id}: {id:string}) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });

    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/api/users/${id}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if(data){
                //router.push(`/users/${id}/posts`)
            }
        } catch (error:any) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h5 className="text-3xl mb-4">Add post</h5>
            <form onSubmit={handleSubmit} className="max-w-md">

                <div className="mb-3 ">
                    <input
                        placeholder="title"
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border rounded-md  focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        id="content"
                        name="content"
                        placeholder="content..."
                        value={formData.content}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                    ></textarea>
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