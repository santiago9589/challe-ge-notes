import TitleComponent from "../../components/Title"
import {useState} from "react"
import CardComponent from "../../components/CardComponent"
import {Note} from "../../../types/Note"
import {Link} from "react-router-dom"

const ArchivedPage = () => {

    const initValues = [{
        title:"juan",
        content:"juan",
        category:["juan"]
    },{
        title:"juan",
        content:"juan",
        category:["juan"]
    }]

    const [mockCard,setMockCard] = useState<Note[]>(initValues)


    return (
        <>
            <header className="flex justify-start space-x-4 items-center my-2 p-2">
                <TitleComponent title="Archived Notes" />
                <Link to="/">Go back to unarchived notes</Link>
            </header>
            <section className="bg-white min-w-full h-full grid grid-cols-3x">
                { mockCard.map((note,index)=>{
                    return (
                        <CardComponent key={index} note={note}/>
                    ) 
                })}
            </section>
        </>
    )
}

export default ArchivedPage