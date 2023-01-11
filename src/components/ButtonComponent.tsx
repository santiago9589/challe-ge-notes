import { motion } from "framer-motion"
import React from 'react'
import { variantsButton } from "../../motion/variants"

interface props {
    disabled: boolean
    type: "button" | "submit" | "reset" | undefined
    name: string
    onClick?: () => void
    className?: string | undefined
}


const ButtonComponent = ({ disabled, type, name, className,onClick }: props) => {
    return (
        <motion.button
            whileHover="Hover"
            whileTap="Tap"
            onClick={onClick}
            variants={variantsButton}
            type={type} disabled={disabled} className={className}>
            {name}
            
        </motion.button>
    )
}

export default ButtonComponent