"use client"
import AnimatedText from '@/components/animations/text';
import React, { useEffect, useState } from 'react';
// import { usePostSession } from "@/zustand/store/store"

const Container = () => {

  // const { posts, addPosts } = usePostSession();
  const [posts, setPosts] = useState([]);

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

  useEffect(() => {
    console.log(posts);
  }, [posts])
  return (
    <div style={containerStyle}>
      
      {
        posts.map((post) => (
          <Card body={post.body} id={post.id} title={post.title} userId={post.userId} />
        ))
      }
    </div>
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
  alignItems: 'stretch', // Adjust as needed
  flexWrap: 'wrap', // Allow cards to wrap to the next row
  padding: '16px', // Adjust as needed
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
