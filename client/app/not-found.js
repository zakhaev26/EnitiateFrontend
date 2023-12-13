"use client"
import { motion } from "framer-motion"
import LogoSvg from "../components/animations/logo__svg"
import HeroSvg from "../components/animations/hero__svg"
import "./styles.css"
import AnimatedText from "@/components/animations/text"
import { Link } from "@mui/material"
import {useRouter} from "next/navigation";
export default function Home() {

  const Router = useRouter();

  const handleHomeRedirect = () => {
    Router.push("/");
  }

  return (
    <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{duration: 1}}
    className="mainbody"
  >
      .
      <div className='rectangle1'>
        <div className='nav'>
          <LogoSvg />
          <motion.a className="logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            href="/"
            style={{color:"#fff"}}
          >Enitiate</motion.a>
        </div>

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

          <div className="hero_form">
              <AnimatedText text="404" size="100" />
              <AnimatedText text="Page You were looking for is not found." size="30" />

              <button onClick={handleHomeRedirect} type="button" style ={{marginTop:"20px"}} className="check-posts" >
                 Return Home
              </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}