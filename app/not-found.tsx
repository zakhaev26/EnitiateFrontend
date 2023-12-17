// Import necessary modules and components
"use client"
import { motion } from "framer-motion"
import LogoSvg from "../components/animations/logo__svg"
import HeroSvg from "../components/animations/hero__svg"
import "./styles.css"
import AnimatedText from "@/components/animations/text"
import { useRouter } from "next/navigation";
import Toast from "../components/Toast"

// Home functional component
export default function Home() {
  // useRouter hook to access Next.js router
  const Router = useRouter();

  // Function to handle redirection to the home page
  const handleHomeRedirect = () => {
    Router.push("/");
  }

  // Return the JSX structure with motion animations and components
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 1 }}
      className="mainbody"
    >
      {/* Placeholder dot */}
      .

      {/* Container with a background rectangle */}
      <div className='rectangle1'>
        {/* Navigation section with logo and link to home */}
        <div className='nav'>
          <LogoSvg />
          <motion.a className="logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            href="/"
            style={{ color: "#fff" }}
          >Enitiate</motion.a>
        </div>

        {/* Main content container with animated hero section */}
        <div className="main__container">
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <HeroSvg />
          </motion.div>

          {/* Hero form section with animated text, button, and toast component */}
          <div className="hero_form">
            <AnimatedText text="404" size="100" />
            <AnimatedText text="Page You were looking for is not found." size="30" />

            {/* Button to return to the home page */}
            <button onClick={handleHomeRedirect} type="button" style={{ marginTop: "20px" }} className="check-posts">
              Return Home
            </button>

            {/* Toast component displaying an error message */}
            <Toast message="Oops! This URI Doesn't exist!" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
