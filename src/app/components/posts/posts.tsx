import { PostsListType } from "@/app/types";
import DeletePostButton from "@/app/components/posts/deletePostButton";
import { auth } from "@/auth";

const getAllPosts = async (id: string) => {
    try {
        const data = await fetch(`http://localhost:3000/api/users/${id}/posts`)
        if (!data) {
            throw new Error('post not found');
        }
        return data.json();

    } catch (err) {
        throw new Error('Failed to fetch posts.');
    }
}



const Posts = async ({ id }: { id: string }) => {
    const session = await auth()
    const allPosts = await getAllPosts(id)
    return (
        <>
            {allPosts.data.map((post: PostsListType) => {
                const idAsString = post._id.toString();
                const isCurrentUser = post.user._id == session?.user.id;
                return (
                    <div key={post._id}
                        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                        <div className="bg-white p-4 mb-4 rounded-lg shadow">
                            <div className="flex items-center mb-3">
                                <img
                                    src="https://placekitten.com/40/40"
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full mr-3"
                                />
                                <div>
                                    <p className="font-bold">{post.user.name}</p>
                                    <p className="text-gray-500">{post.createdAt.toString()}</p>
                                </div>
                                {isCurrentUser && (
                                    <div className="ml-16">
                                        <DeletePostButton id={idAsString} />
                                    </div>)}
                            </div>
                            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                            <p className="text-lg mb-4">{post.content}</p>

                        </div>

                    </div>
                )
            })}

        </>
    )
}
export default Posts;