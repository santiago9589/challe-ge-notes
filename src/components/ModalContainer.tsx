import { motion } from "framer-motion"

interface props {
    children: React.ReactNode
    onClose: VoidFunction
}
const ModalContainer = ({ children, onClose }: props) => {

    return (
        <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
                <b onClick={() => { onClose() }} className="absolute top-0 left-0 w-screen h-screen bg-black opacity-30 z-10" />
                {children}
            </section>
        </motion.div>
    )

}

export default ModalContainer