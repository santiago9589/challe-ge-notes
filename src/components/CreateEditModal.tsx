import { useContext } from 'react'
import { ContextApp } from '../../context/ContextApp'
import TitleComponent from './Title'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { Note } from '../../types/Note'
import { NoteActionKind } from '../../context/noteReducer'
import { useCategories } from "../../hooks/useCategories"
import { v4 as uuidv4 } from 'uuid'
import { variantsButton } from "../../motion/variants"
import { motion } from "framer-motion"

interface props {
    onClose: VoidFunction
}




const CreateEditModal = ({ onClose }: props) => {

    const { actions, state } = useContext(ContextApp)
    const { categories, setCaterigories, handleCategories, deleteCategories, setInputValues, InputValues } = useCategories(state.noteSelected.category || [])

    const initialValues = {
        title: state.noteSelected.title || "",
        content: state.noteSelected.content || "",
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        content: Yup.string().required(),
    })

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            const draft: Note = {
                title: values.title,
                content: values.content,
                category: categories,
                isArchived: false,
                Id: state.noteSelected.Id || uuidv4()
            }
            if (state.noteSelected.Id) {
                actions.dispatch({
                    type: NoteActionKind.FINISH_EDIT,
                    payload: draft
                })
            } else {
                actions.dispatch({
                    type: NoteActionKind.CREATE,
                    payload: draft
                })
            }

            handleReset(values)
            setCaterigories([])
            onClose()
        }
    })

    const { handleChange, handleSubmit, values, errors, touched, handleReset } = formik

    return (
        <section className="bg-white w-full h-1/2 sm:w-1/2 z-50 p-8 box-border border-2 rounded-lg border-black overflow-y-auto">
            <TitleComponent title="Create/Edit Note" />
            <form className="flex flex-col w-full mt-4 items-center space-y-2" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full items-start">
                    <label className="w-2/5">Title:</label>
                    <input
                        className="w-full p-2  border-2"
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={values.title}
                    />
                    {errors.title && touched.title && (<section>{errors.title}</section>)}
                </div>
                <div className="flex flex-col w-full items-start">
                    <label className="w-2/5">Content:</label>
                    <textarea
                        className="w-full p-2  border-2"
                        name="content"
                        onChange={handleChange}
                        value={values.content}
                    />
                    {errors.content && touched.content && (<section>{errors.content}</section>)}
                </div>
                <div className="flex flex-col w-full items-start">
                    <p className="w-2/5">Categories:</p>
                    <section className="flex flex-col w-full">
                        <article className="border-2 w-full mb-2 h-1/3 flex flex-col">
                            {
                                categories.map((categories, index) => {
                                    return (
                                        <div key={index} className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                                            </svg>
                                            <span className="pr-2 pl-2">{categories.name}</span>
                                            <svg onClick={() => deleteCategories(categories)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    )
                                })
                            }
                        </article>
                        <section className="flex justify-between space-x-2 items-center">
                            <input
                                className="w-full p-2  border-2"
                                type="text"
                                name="categories"
                                value={InputValues}
                                onChange={(e) => { setInputValues(e.target.value) }}
                            />
                            <motion.button
                                whileHover="Hover"
                                whileTap="Tap"
                                variants={variantsButton} type="button" onClick={() => handleCategories()} className="bg-blue-200 p-2 w-1/4 shadow-blue-400 cursor-pointer rounded-lg">Add</motion.button>
                        </section>
                        <section className="flex justify-center items-center space-x-2 mt-2">
                            <motion.button
                                whileHover="Hover"
                                whileTap="Tap"
                                variants={variantsButton}
                                type="submit" disabled={(errors.content || errors.title || !categories.length) ? true : false} className="buttonOk disabled:opacity-40 disabled:cursor-not-allowed">Save</motion.button>
                            <motion.button
                                whileHover="Hover"
                                whileTap="Tap"
                                variants={variantsButton}
                                type="button" onClick={() => onClose()} className="buttonCancel">Cancel</motion.button>
                        </section>
                    </section>
                </div>
            </form>
        </section>
    )

}

export default CreateEditModal