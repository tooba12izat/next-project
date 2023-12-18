import PostForm from "@/app/components/posts/postForm";

const Page=async ({ params }: { params: { id: string } } )=> {
    const id = params.id;
    return (
        <>
            <PostForm id={id}/>

        </>
    )
}
export default Page;