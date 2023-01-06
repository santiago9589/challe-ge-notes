import React from 'react'
import { motion } from "framer-motion"
import {grid} from "../../motion/variants"

interface props {
  children: React.ReactNode
}




const GridComponent = ({ children }: props) => {
  return (

    <motion.section
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      variants={grid}
      className="containerCards">
      {children}
    </motion.section>
  )
}

export default GridComponent