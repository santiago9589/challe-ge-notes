import TitleComponent from "../../components/Title"
import { useState } from "react"
import CardComponent from "../../components/CardComponent"
import { Note } from "../../../types/Note"
import { Link } from "react-router-dom"
import CreateEditModal from "../../components/CreateEditModal"

const HomePage = () => {

    const initValues = [{
        title: "juan",
        content: "juan",
        category: ["juan"]
    }, {
        title: "juan",
        content: "juan",
        category: ["juan"]
    }]

    const [mockCard, setMockCard] = useState<Note[]>(initValues)
    const [isShow, setIsShow] = useState<boolean>(false)
   
    return (
        <>
            <header className="flex justify-start space-x-4 items-center my-2 p-2">
                <TitleComponent title="my notes" />
                <button className="bg-blue-200 p-2 rounded-lg shadow-lg shadow-blue-400">Create Notes</button>
                <Link to="/archived">Archived Notes</Link>
            </header>
            <section className="bg-white min-w-full h-full grid grid-cols-3x">
                {mockCard.map((note, index) => {
                    return (
                        <CardComponent key={index} note={note} />
                    )
                })}
            </section>
            <>
                {
                    isShow ? (
                        <CreateEditModal/>) :
                        (null)
                }
            </>
        </>
    )
}

export default HomePage