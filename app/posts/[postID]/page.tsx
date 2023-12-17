/**
 * Dynamic Route displaying individual Posts.
 */

"use client"
import AnimatedTextVar from "@/components/animations/textVariant";
import { useEffect, useState } from "react";
import "../../styles.css"
import "@/security/withAuth"
import withAuth from "@/security/withAuth";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader"
import Card from "@/components/Card"

function Page({ params }: Param) {

    const { postID } = params;
    const [loading, setLoading] = useState<boolean>(true);
    const [post, setPost] = useState<Post[] | any>();
    const router = useRouter()

    useEffect(() => {

        //Validation of postID 
        if (isNaN(postID) || postID < 1 || postID > 100) {
            alert(`Invalid post ID: ${postID}. Please provide a number between 1 and 100.`);
            router.push("/posts");
        }
        
        //fetch the data from API if postID is valid and store it in a React State 
        const fetchData = async () => {
            try {
                const res: Response = await fetch(`${process.env.NEXT_PUBLIC_API_JSON_PLACEHOLDER_ALL_POSTS}/${postID}`);
                const data: Post = await res.json(); // serialize JSON
                setPost(data);
                setLoading(false);//Turn off Loader animation
            } catch (error: any) {
                /**Log errors in the console */
                console.log(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [postID, router]);

    return (
        <>
            <Loader loading={loading} />
            {!loading && (
                <div style={{ height: "100vh" }}>
                    <div style={{ textAlign: "center", marginTop: "10px" }} >
                        <AnimatedTextVar text={`Post:${post.id}`} size="30" />
                    </div>
                    <div className="flex justify-center items-stretch flex-wrap p-4 box-border cursor-pointer">
                        <Card key={post.id} body={post.body} id={post.id} title={post.title} userId={post.userId} />
                    </div>

                    <button onClick={() => {
                        router.push("/posts")
                    }} style={{ "marginLeft": "45vw" }} type="button" className="check-posts" >
                        Check Out Posts
                    </button>
                </div>
            )}
        </>
    )
}

//Check whether user is authenticated or not using the HOC @withAuth Component.
//if Not,Push to Home route
//else , continue.
export default withAuth(Page)