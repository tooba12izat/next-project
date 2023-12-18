'use client'
import {useRouter} from "next/navigation";

const PostsButton = ({id}: {id:string}) => {
    const router = useRouter();
    console.log(id)
    const handleClick = () => {
        router.push(`/users/${id}/posts`)

    }

    return (

        <button onClick={handleClick} className="rounded-md border text-white hover:text-black m-3 p-1.5 bg-teal-700  hover:bg-gray-100">
            posts
        </button>

    );
}

export default PostsButton;