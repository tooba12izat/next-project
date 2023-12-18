import {auth} from "@/auth";
import AddPostButton from "@/app/components/posts/addPostButton";
import Posts from "@/app/components/posts/posts";
import PostForm from "@/app/components/posts/postForm";

const Page = async () => {
    const session = await auth()

    return (
        <>

                {/*<p>Welcome {session?.user.id}!</p>*/}

                <PostForm id={session?.user.id}/>
                <Posts id={session?.user.id}/>


        </>
    )
}
export default Page;
