import React from "react"
import { useContext } from "react"
import CardComponent from "../../components/CardComponent"
import { ContextApp } from "../../../context/ContextApp"
import HeaderComponent from "../../components/headerComponent"
import ButtonNavigate from "../../components/ButtonNavigate"
import GridComponent from "../../components/GridComponent"

const ArchivedPage = () => {

    const { state } = useContext(ContextApp)

    return (
        <>
            <HeaderComponent title="Archived Notes">
                <ButtonNavigate title="Unarchived" route="/" />
            </HeaderComponent>
            <GridComponent>
                {state.notesArchived.map((note, index) => {
                    return (
                        <CardComponent key={index} note={note} />
                    )
                })}
            </GridComponent>
        </>
    )
}

export default ArchivedPage