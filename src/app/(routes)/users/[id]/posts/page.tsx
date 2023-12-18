import Posts from "@/app/components/posts/posts";
import AddPostButton from "@/app/components/posts/addPostButton";

const Page=async ({ params }: { params: { id: string } } )=> {
    const id = params.id;


    return (
        <>
            <AddPostButton id={id}/>
            <Posts id={id}/>

        </>
    )
}
export default Page;