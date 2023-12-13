"use client"
import React from 'react';
import { motion } from 'framer-motion';
import "./textStyles.css"
const AnimatedText = ({text,size}) => {
  
  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.5,
      },
    }),
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {text.split('').map((char, index) => (
        <motion.span key={index} custom={index} style={{ display: 'inline-block' ,fontWeight:'600',fontSize :parseInt(size)}}>
         {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
