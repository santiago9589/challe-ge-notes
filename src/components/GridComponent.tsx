import React from 'react'
import { motion } from "framer-motion"

interface props {
  children: React.ReactNode
}

const grid = {
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.4
    }
  },
  hidden: { opacity: 0, y: -2000 },
  exit: {
    opacity: 1, y: 2000,
    transition: {
      duration: 0.4
    }
  }
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