import { motion } from "framer-motion"

interface props {
    children: React.ReactNode
    onClose: VoidFunction
}

const createEditModal = {
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.3
        }
    },
    hidden: { opacity: 0, x: -2000 },
    exit: {
        opacity: 1, y: 2000,
        transition: {
            duration: 0.3
        }
    }
}

const ModalContainer = ({ children, onClose }: props) => {

    return (

        <motion.section
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            variants={createEditModal}
            className="w-full min-h-screen absolute top-0 left-0 flex justify-center items-center">
            <b onClick={() => { onClose() }} className="absolute top-0 left-0 w-screen h-screen bg-black opacity-30 z-10" />
            {children}
        </motion.section>

    )

}

export default ModalContainer