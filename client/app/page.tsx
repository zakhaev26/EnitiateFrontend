"use client"
import {motion} from "framer-motion"
import SVG from "../components/AnimatedSVG"
import "./styles.css"
export default function Home() {
  return (
    <div className='mainbody'>
      .

      <div className='rectangle1'>
        <div className='nav'>

<SVG />
          <motion.h1 className="logo"
        initial={{ opacity: 0, y: -20 }} // Initial state
        animate={{ opacity: 1, y: 0 }}   // Animation state
        transition={{ duration: 0.5 }}   // Transition duration
      >Enitiate</motion.h1>
        </div>

      </div>
    </div>
  )
}
