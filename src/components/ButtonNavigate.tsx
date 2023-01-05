import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const variantsButton = {
    Hover: { scale: 1.1 },
    Tap: {
        scale: 0.9, transition: {
            duration: 0.4
        }
    }
}

interface props{
    title:string
    route:string
}

const ButtonNavigate = ({title,route}:props) => {
    return (
        <motion.button
            variants={variantsButton}
            whileHover="Hover"
            whileTap="Tap"
            className="bg-blue-200 p-2 rounded-lg shadow-lg uppercase shadow-blue-400"><Link to={route}>{title}</Link></motion.button>
    )
}

export default ButtonNavigate