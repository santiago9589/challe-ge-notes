import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import "../modal.css"
import {animationModal} from "../../motion/variants"

interface props {
    showModal: boolean
    children: React.ReactNode
}

const Modal = ({ showModal, children }: props) => {
    return (
        <AnimatePresence mode="wait">
            {
                showModal && (
                    <motion.section
                        initial={"hidden"}
                        animate={"visible"}
                        exit={"hidden"}
                        variants={animationModal}
                        className='modal'>
                        {children}
                    </motion.section>
                )
            }
        </AnimatePresence>
    )
}

export default Modal