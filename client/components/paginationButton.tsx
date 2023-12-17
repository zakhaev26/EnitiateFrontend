import React from 'react'
import {motion } from "framer-motion";


const paginationButton = ({index,paginate,currentPage} :PaginationProps) => {
  return (
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
  )
}

export default paginationButton