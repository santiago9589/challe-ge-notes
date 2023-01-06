import { ContextApp } from "../../context/ContextApp"
import { Note } from "../../types/Note"
import { useContext } from "react"
import { NoteActionKind } from "../../context/noteReducer"
import { motion } from "framer-motion"
import { ContextModal } from "../../context/ContextModal"
import { ModalActionKind } from "../../context/noteModal"
import {variantsCard} from "../../motion/variants"


interface props {
    note: Note
}

const CardComponent = ({ note }: props) => {

    const { actions } = useContext(ContextApp)
    const modalState = useContext(ContextModal)

    const handleDelete = () => {
        actions.dispatch({
            type: NoteActionKind.START_DELETE,
            payload: note
        })

        modalState.actions.dispatch({
            type: ModalActionKind.OPEN_DELETE,
            payload: true
        })
    }

    const handleEdit = () => {
        actions.dispatch({
            type: NoteActionKind.START_EDIT,
            payload: note
        })

        modalState.actions.dispatch({
            type: ModalActionKind.OPEN_CREATE,
            payload: true
        })
        

    }

    

    return (
        <>
            <motion.article
                variants={variantsCard}
                whileHover="Hover"
                whileTap="Tap"
                className="m-2 border-2 border-black p-2 relative flex justify-between rounded-lg bg-blue-100 z-10">
                <section>
                    <h3 className="text-2xl font-mono">{note.title}</h3>
                    <h4>{note.content}</h4>
                    <h5>{note.Id}</h5>
                </section>
                <section className="absolute top-0 right-0 flex p-2 ">
                    <section >
                        {
                            note.isArchived ? (
                                <section className="text-green-500">
                                    <svg onClick={() => {
                                        actions.dispatch({
                                            type: NoteActionKind.UNARCHIVED,
                                            payload: note
                                        })
                                    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                </section>

                            ) : (
                                <section className="text-green-500">
                                    <svg onClick={() => {
                                        actions.dispatch({
                                            type: NoteActionKind.ARCHIVED,
                                            payload: note
                                        })
                                    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                </section>
                            )
                        }
                    </section>
                    <section onClick={() => {
                        handleEdit()
                    }} className=" text-fuchsia-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                    </section>
                    <section onClick={() => handleDelete()} className="text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </section>
                </section>
            </motion.article>
        </>
    )
}

export default CardComponent