"use client"
import AnimatedText from '@/components/animations/text';
import React, { useEffect, useState, useMemo } from 'react';
// import { usePostSession } from "@/zustand/store/store"
import "./h.css"

const Container = () => {

  // const { posts, addPosts } = usePostSession();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        console.log(e.message);
      }
    }
    fetchData();

  }, [])

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Using useMemo to paginate the posts array
  const paginatedPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return posts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, posts, postsPerPage]);


  return (
    <>
      <div style={containerStyle}>

        {
          paginatedPosts.map((post) => (
            <Card body={post.body} id={post.id} title={post.title} userId={post.userId} />
          ))
        }
      </div>

      <div style={{justifyContent:"space-evenly",display:"flex",margin:"0 0 30px 30px"}}>

        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

    </>
  );
};

const Card = ({ body, id, title, userId }) => {
  return <div style={cardStyle}>
    <AnimatedText text={`Post ${id} / UID ${userId}`} size="10px" />
    <AnimatedText text={title} size="20px" />
    <br />
    <AnimatedText text={body} size="10px" />
  </div>;
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  flexWrap: 'wrap', 
  padding: '16px', 
  boxSizing: 'border-box',
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


export default Container;
