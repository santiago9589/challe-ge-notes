import React from "react"
import { ContextApp } from "../../context/ContextApp"
import {useContext} from "react"
import { NoteActionKind } from "../../context/noteReducer"


interface props {
    onClose:VoidFunction
}

const DeleteModal = ({onClose}:props) => {

    const {actions,state} = useContext(ContextApp)
    
    const handleDelete = ()=>{
        if(!state.noteToDelete) return
        actions.dispatch({
            type:NoteActionKind.FINISH_DELETE,
            payload:state.noteToDelete
        })
        onClose()
    }

    return (
            <section className="w-full   bg-white h-48 sm:w-1/3 z-20 p-8 box-border border-2 rounded-lg border-black">
                <section className="p-2">
                    <p className='text-xl text-center'>Are you sure to delete this note?</p>
                    <section className='flex justify-center items-center mt-4 space-x-2'>
                        <button onClick={()=>handleDelete()}className="buttonOk">Confirm</button>
                        <button onClick={()=>onClose()} className="buttonCancel">Cancel</button>
                    </section>
                </section>
            </section>
    )
}

export default DeleteModal


 