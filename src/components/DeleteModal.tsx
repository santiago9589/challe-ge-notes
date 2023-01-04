import { ContextApp } from "../../context/ContextApp"
import {useContext} from "react"
import { Note } from "../../types/Note"
import { NoteActionKind } from "../../context/noteReducer"


interface props {
    onClose:VoidFunction
    note:Note
}

const DeleteModal = ({onClose,note}:props) => {

    const {actions} = useContext(ContextApp)

    const handleDelete = ()=>{
        actions.dispatch({
            type:NoteActionKind.DELETE,
            payload:note
        })
        onClose()
    }

    return (
            <section className="bg-white h-48 w-1/3 z-10 p-8 box-border border-2 rounded-lg border-black">
                <section className="p-2">
                    <p className='text-xl text-center'>Are you sure to delete this note?</p>
                    <section className='flex justify-center items-center mt-4 space-x-2'>
                        <button onClick={()=>handleDelete()}className="bg-green-200 p-2 w-full shadow-green-400">Confirm</button>
                        <button onClick={()=>onClose()} className="bg-red-200 p-2 w-full shadow-red-400">Cancel</button>
                    </section>
                </section>
            </section>
    )
}

export default DeleteModal


 