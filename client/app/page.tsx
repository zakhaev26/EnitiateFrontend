"use client"
import { motion } from "framer-motion"
import LogoSvg from "../components/animations/logo__svg"
import HeroSvg from "../components/animations/hero__svg"
import "./styles.css"
import { UserAuth } from "@/auth/context/AuthContext"
import { useRouter } from "next/navigation"
import AnimatedText from "@/components/animations/text"
import SignpostIcon from '@mui/icons-material/Signpost';

export default function Home() {


  const { user, googleSignIn, logOut } = UserAuth();
  const Router = useRouter();


  const handlePostRedirect = () => {
    Router.push("/posts");
  }

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (e: any) {
      console.log(e.message);
    }
  }

  const handleSignOut = async () => {
    try {
      await logOut();
      Router.push("/");
    } catch (e: any) {
      alert(e.message);
    }
  }

  return (
    <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{duration: 2}}
    className="mainbody"
  >
      .
      <div className='rectangle1'>

        <div className='nav'>
          <LogoSvg />
          <motion.h1 className="logo" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          >Enitiate</motion.h1>
        </div>

        <div className="main__container">
          
          <motion.div
            animate={{y: [0, -20, 0],}}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
          }}>
            <HeroSvg />
          </motion.div>

          <div className="hero_form">

            {user ? ( 
              <>
                <img className="circular-img" src={user.photoURL} alt="" />
                <AnimatedText text={user?.displayName} size="28" />
                <AnimatedText text="Last Signed In :" size="14" />
                <AnimatedText text={user.metadata.lastSignInTime} size="10" />

                <button onClick={handlePostRedirect} type="button" className="check-posts" >
                < SignpostIcon style={{color:"#000"}} />
                  Check Out Posts
                </button>

                <button onClick={handleSignOut} type="button" className="login-with-google-btn sign-out" >
                  Sign Out
                </button>
                <br />
              </>
            ) : (
              <>
                <AnimatedText text="Log In / Sign Up" size="29" />
                <br />
                <AnimatedText text="Level Up with Enitiate." size="14" />
                <button onClick={handleSignIn} type="button" className="login-with-google-btn" >
                  Sign In With Google
                </button>
              </>
            )}

          </div>
        </div>
      </div>
    </motion.div>
  )
}
