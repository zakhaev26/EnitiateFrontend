"use client"
import AnimatedText from "@/components/animations/text"
import { duration } from "@mui/material";
import {motion} from "framer-motion";
const page = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{duration: 2}}
  >
      <AnimatedText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, facilis a provident facere voluptatem accusantium porro architecto animi est nobis dicta natus voluptates, inventore quo iste, deserunt libero odit vero repellat voluptatibus quia distinctio. Animi quasi recusandae hic quos tempore, dolorum molestias atque aut quaerat minima porro tempora sunt dignissimos repellat iusto vel laboriosam corporis ducimus!
"/>
    </motion.div>
  )
}

export default page