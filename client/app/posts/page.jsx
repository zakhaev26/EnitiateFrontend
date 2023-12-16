"use client"
import AnimatedTextVar from '@/components/animations/textVariant';
import AnimatedText from '@/components/animations/text'
import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipLoader } from 'react-spinners';
import './posts.css';
import { Link } from '@mui/material';
import { useRouter } from 'next/navigation';
import withAuth from "@/security/withAuth"
const Container = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (e) {
        console.log(e.message);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    fetchData();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return posts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, posts, postsPerPage]);

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
        <>
          <div style={{textAlign:"center", marginTop:"10px"}} >
          <AnimatedTextVar text="POSTS" size="30"/>
          </div>
          <div className="pagination">
            {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(index + 1)}
                className="btn"
                style={{
                  background: index + 1 === currentPage ? 'black' : 'transparent',
                  color: index + 1 === currentPage ? 'white' : 'black',
                  borderRadius: '20px',
                }}
                key={index + 1}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>
          <div style={containerStyle}>
            {paginatedPosts.map((post) => (
              <Card key={post.id} body={post.body} id={post.id} title={post.title} userId={post.userId} />
            ))}
          </div>

        
        </>
      )}
    </>
  );
};

  const Card = ({ body, id, title, userId }) => {
  const routerx = useRouter();

    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        style={cardStyle}
        onClick={()=>{
            routerx.push(`posts/${id}`)
        }}
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
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    padding: '16px',
    boxSizing: 'border-box',
    cursor:"pointer",
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


  const AuthenticatedContainer = withAuth(Container); 


export default AuthenticatedContainer;
