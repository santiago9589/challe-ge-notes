import React from 'react'
import TitleComponent from './Title'
import { motion} from "framer-motion"
import {head} from "../../motion/variants"

interface props {
    children: React.ReactNode
    title: string
}


const HeaderComponent = ({ children, title }: props) => {
    return (
            <motion.header
                    initial={"hidden"}
                    animate={"visible"}
                    exit={"exit"}
                    variants={head}
                className="flex justify-between space-x-4 items-center my-2 p-2">
                <TitleComponent title={title} />
                {children}
            </motion.header>
    )
}

export default HeaderComponent