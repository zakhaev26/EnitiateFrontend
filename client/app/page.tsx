"use client"
import { motion } from "framer-motion"
import LogoSvg from "../components/animations/logo__svg"
import HeroSvg from "../components/animations/hero__svg"
import "./styles.css"
import { UserAuth } from "@/auth/context/AuthContext"

export default function Home() {

  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      const res = await googleSignIn();
      alert(res)
    } catch (e: any) {
      alert(e.message);
    }
  }

  const handleSignOut = async () => {
    try {
        await logOut();
    } catch (e:any) {
        alert(e.message);
    }
}


  return (
    <div className='mainbody'>
      .
      <div className='rectangle1'>

        <div className='nav'>
          <LogoSvg />

          <motion.h1 className="logo"
            initial={{ opacity: 0, y: -20 }} // Initial state
            animate={{ opacity: 1, y: 0 }}   // Animation state
            transition={{ duration: 1 }}   // Transition duration
          >Enitiate</motion.h1>

        </div>

        <div className="main__container">

          <div className="hero_svg_holder">
            <HeroSvg />
          </div>

          <div className="hero_form">
            <h1 >
              Login To Your Account
            </h1>

            <button onClick={handleSignIn}>
              Sign In
            </button>

            <button onClick={handleSignOut}>
              Sign Out
            </button>
            <h1>{user?.displayName}</h1>           
          </div>

        </div>

      </div>
    </div>
  )
}
