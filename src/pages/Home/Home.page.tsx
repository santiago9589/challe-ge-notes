import TitleComponent from "../../components/Title"
import { useContext } from "react"
import CardComponent from "../../components/CardComponent"
import { Link } from "react-router-dom"
import CreateEditModal from "../../components/CreateEditModal"
import { ContextApp } from "../../../context/ContextApp"
import ModalContainer from "../../components/ModalContainer"
import {useView} from "../../../hooks/useView"



const HomePage = () => {

    const { state} = useContext(ContextApp)
    const {isShowCreate,handleCreate} = useView()

    console.log(state)

    return (
        <>
            <header className="flex justify-start space-x-4 items-center my-2 p-2">
                <TitleComponent title="my notes" />
                <button onClick={()=>handleCreate()} className="bg-blue-200 p-2 rounded-lg shadow-lg shadow-blue-400">Create Notes</button>
                <Link to="/archived">Archived Notes</Link>
            </header>
            <section className="bg-white min-w-full h-full grid grid-cols-3x">
                {state.notes.map((note, index) => {
                    return (
                        <CardComponent key={index} note={note} />
                    )
                })}
            </section>
            <>
                {
                    isShowCreate ? (
                        <ModalContainer onClose={handleCreate}>
                            <CreateEditModal onClose={handleCreate}/>
                        </ModalContainer>
                    ) :
                        (null)
                }
            </>
        </>
    )
}

export default HomePage