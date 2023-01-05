import { useContext } from "react"
import CardComponent from "../../components/CardComponent"

import CreateEditModal from "../../components/CreateEditModal"
import { ContextApp } from "../../../context/ContextApp"
import ModalContainer from "../../components/ModalContainer"
import { useView } from "../../../hooks/useView"
import HeaderComponent from "../../components/headerComponent"
import { AnimatePresence, motion } from "framer-motion"
import ButtonNavigate from "../../components/ButtonNavigate"
import GridComponent from "../../components/GridComponent"

const HomePage = () => {

    const { state } = useContext(ContextApp)
    const { isShowCreate, handleCreate } = useView()

    const variantsButton = {
        Hover: { scale: 1.1 },
        Tap: {
            scale: 0.9, transition: {
                duration: 0.4
            }
        }
    }

    return (
        <>
            <HeaderComponent title="my notes">
                <section className="flex space-x-3 items-center">
                    <motion.button
                        variants={variantsButton}
                        whileHover="Hover"
                        whileTap="Tap"
                        onClick={() => handleCreate()} className="bg-slate-200 p-2 rounded-lg shadow-lg uppercase shadow-slate-400">Create Notes</motion.button>
                    <ButtonNavigate title="archived routes" route="/archived" />
                </section>
            </HeaderComponent>
            <GridComponent>
                {
                    state.notes ?
                        (<>
                            {state.notes.map((note, index) => {
                                return (
                                    <CardComponent key={index} note={note} />
                                )
                            })}
                        </>) : (null)
                }

            </GridComponent>
                <AnimatePresence>
                    {
                        isShowCreate ? (
                            <ModalContainer onClose={handleCreate}>
                                <CreateEditModal onClose={handleCreate} />
                            </ModalContainer>


                        ) :
                            (null)
                    }

                </AnimatePresence>
        </>
    )
}

export default HomePage