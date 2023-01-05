import React from 'react'
import TitleComponent from './Title'
import { motion} from "framer-motion"

interface props {
    children: React.ReactNode
    title: string
}

const head = {
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.3
        }
    },
    hidden: { opacity: 0, y: -600 },
    exit:{
        opacity: 1, x: 2000,
        transition: {
            duration: 0.3
        }
    }
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