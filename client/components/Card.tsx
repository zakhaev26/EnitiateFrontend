import { useRouter } from 'next/navigation';
import React, { CSSProperties } from 'react'
import {motion} from "framer-motion"
import AnimatedText from './animations/text';

const cardStyle :CSSProperties = {
    flex: '0 0 calc(33.33% - 16px)',
    padding: '16px',
    height: 'auto',
    background: 'linear-gradient(24deg, #080D0D 75.24%, #173B4D 97.12%)',
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '8px',
    boxSizing: 'border-box',
};


interface Post {
  id: number,
  body: string,
  userId: number,
  title: string,
}


const Card = ({ body, id, title, userId } : Post) => {
    const routerx = useRouter();
  
    return (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={cardStyle}
          onClick={() => {
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

export default Card