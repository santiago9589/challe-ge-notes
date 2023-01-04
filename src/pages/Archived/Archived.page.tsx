import TitleComponent from "../../components/Title"
import {useContext, useState} from "react"
import CardComponent from "../../components/CardComponent"
import {Note} from "../../../types/Note"
import {Link} from "react-router-dom"
import { ContextApp } from "../../../context/ContextApp"

const ArchivedPage = () => {

    const {state} = useContext(ContextApp)

    return (
        <>
            <header className="flex justify-start space-x-4 items-center my-2 p-2">
                <TitleComponent title="Archived Notes" />
                <Link to="/" className="underline">Go back to unarchived notes</Link>
            </header>
            <section className="bg-white min-w-full h-full grid grid-cols-3x">
                { state.notesArchived.map((note,index)=>{
                    return (
                        <CardComponent key={index} note={note}/>
                    ) 
                })}
            </section>
        </>
    )
}

export default ArchivedPage