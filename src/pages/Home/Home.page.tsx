import { useContext } from "react"
import CardComponent from "../../components/CardComponent"
import { ContextApp } from "../../../context/ContextApp"
import HeaderComponent from "../../components/headerComponent"
import { motion } from "framer-motion"
import ButtonNavigate from "../../components/ButtonNavigate"
import GridComponent from "../../components/GridComponent"
import { ContextModal } from "../../../context/ContextModal"
import { ModalActionKind } from "../../../context/noteModal"
import { variantsButton } from "../../../motion/variants"


const HomePage = () => {

    const { state } = useContext(ContextApp)
    const modalState = useContext(ContextModal)
    return (
        <>
            <HeaderComponent title="my notes">
                <section className="flex flex-col sm:flex-row items-start sm:items-center">
                    <motion.button
                        variants={variantsButton}
                        whileHover="Hover"
                        whileTap="Tap"
                        onClick={() => modalState.actions.dispatch({
                            type:ModalActionKind.OPEN_CREATE,
                            payload:true
                        })} className="bg-slate-200 p-2 rounded-lg shadow-lg uppercase shadow-slate-400 mb-4 sm:mr-4 sm:mb-0">Create</motion.button>
                    <ButtonNavigate title="archived" route="/archived" />
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
        </>
    )
}

export default HomePage