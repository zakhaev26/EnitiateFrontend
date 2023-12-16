"use client"
import { AnimatePresence, motion } from "framer-motion";
import AnimatedTextVar from "@/components/animations/textVariant";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import AnimatedText from "@/components/animations/text";
import "../../styles.css"
import "@/security/withAuth"
import withAuth from "@/security/withAuth";
import { useRouter } from "next/navigation";
import Toast from "@/components/Toast";

function Page({ params }) {


    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);
    const router = useRouter()
        useEffect(() => {

            if(params.postID > 100 ||  params.postID < 1) {
                return (
                    <>
                    <Toast message="Oops! This URI doesn't exist!" />
                    {router.push("/posts")}
                  </>
                    )
            }

            const fetchData = async () => {
                try {
                    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`);
                    const data = await res.json();
                    setPost(data);
                    setLoading(false);
                } catch (e) {
                    console.log(e.message);
                    setLoading(false);
                }
            };
            fetchData();
        }, []);

    return (

        <>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ textAlign: 'center', marginTop: '50px' }}
                    >
                        <ClipLoader color="#000" loading={loading} size={50} />
                    </motion.div>
                )}
            </AnimatePresence>

            {!loading && (
                <div style ={{height:"100vh"}}>
                    <div style={{ textAlign: "center", marginTop: "10px"}} >
                        <AnimatedTextVar text={`Post:${post.id}`} size="30" />
                    </div>
                    <div style={containerStyle}>
                        <Card key={post.id} body={post.body} id={post.id} title={post.title} userId={post.userId} />
                    </div>

                    <button onClick={()=>{
                        router.push("/posts")
                    }} style={{"marginLeft":"45vw"}} type="button" className="check-posts" >
                  Check Out Posts
                </button>
                </div>
                
)}
        </>
    )
}

const Card = ({ body, id, title, userId }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={cardStyle}
        >
            <AnimatedText text={`Post ${id} / UID ${userId}`} size="10px" />
            <AnimatedText text={title} size="20px" />
            <br />
            <AnimatedText text={body} size="10px" />
        </motion.div>
    );
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    padding: '16px',
    boxSizing: 'border-box',
    margin: "50px",
    marginTop:"0px"
};
const cardStyle = {
    flex: '0 0 calc(33.33% - 16px)',
    padding: '16px',
    height: 'auto',
    background: 'linear-gradient(24deg, #080D0D 75.24%, #173B4D 97.12%)',
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '8px',
    boxSizing: 'border-box',
};

export default withAuth(Page)