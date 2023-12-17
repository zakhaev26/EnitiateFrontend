import { AnimatePresence ,motion} from 'framer-motion'
import React from 'react'
import { ClipLoader } from 'react-spinners'


const Loader = ({loading}:LoaderProps) => {
  return (
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
  )
}

export default Loader