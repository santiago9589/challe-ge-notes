import React from "react"
import { screen, render, fireEvent, waitForElementToBeRemoved, waitFor, cleanup } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { ContextApp, ContextProps } from "../../context/ContextApp"
import ContextProviderModal from "../../context/ContextProviderModal"
import { initState } from "../../context/noteReducer"
import CardComponent from "../components/CardComponent"

interface props {
    children: React.ReactNode
    ContextPropsValues: ContextProps
}

const state: initState = {
    notes: [
    ],
    notesArchived: [
    ],
    noteSelected: {
        Id: "",
        title: "",
        content: "",
        category: [],
        isArchived: false
    },
    noteToDelete: {
        Id: "",
        title: "",
        content: "",
        category: [],
        isArchived: false
    }
}

const ContextPropsValues: ContextProps = {
    state,
    actions: {
        dispatch: jest.fn()
    }
}


const Wrapper = ({ children, ContextPropsValues }: props) => {
    return (
        <BrowserRouter>
            <ContextApp.Provider value={ContextPropsValues}>
                <ContextProviderModal>
                    {children}
                </ContextProviderModal>
            </ContextApp.Provider>
        </BrowserRouter >
    )
}

describe("CardComponent", () => {

    beforeEach(() => {
        render(<Wrapper ContextPropsValues={ContextPropsValues}>
            <CardComponent note={{
                Id: "idfake",
                title: "titlefake",
                content: "contentfake",
                category: [{ name: "namefake" }],
                isArchived: false
            }} />
        </Wrapper>)
    })
    
    afterEach(()=>{
        cleanup()
    })

    it("Reenderiza la informacion segun props", () => {

        const titleElement = screen.getByText(/titlefake/i)
        const contentElement = screen.getByText(/contentfake/i)
        const idElement = screen.getByText(/idfake/i)
        const iconUnArchivedElement = screen.getByTestId("unArchived")
        const iconEditElement = screen.getByTestId("editUnArchived")
        const deleteElement = screen.getByTestId("deleteFiles")

        expect(titleElement).toBeInTheDocument()
        expect(contentElement).toBeInTheDocument()
        expect(idElement).toBeInTheDocument()
        expect(iconEditElement).toBeInTheDocument()
        expect(iconUnArchivedElement).toBeInTheDocument()
        expect(deleteElement).toBeInTheDocument()

    })

    it("Cuando le doy click debe cambiar su estado archivado y no se debe poder editar", async() => {

        const iconUnArchivedElement = screen.getByTestId("unArchived")
        fireEvent.click(iconUnArchivedElement)
        expect(ContextPropsValues.actions.dispatch).toHaveBeenCalledTimes(1)
    })

    it("Cuando le doy click debe a editar debe disparar", () => {

        const iconEditElement = screen.getByTestId("editUnArchived")

        fireEvent.click(iconEditElement)

        expect(ContextPropsValues.actions.dispatch).toHaveBeenCalled()

    })

    it("Cuando le doy click debe a delete debe disparar", () => {

        const deleteElement = screen.getByTestId("deleteFiles")

        fireEvent.click(deleteElement)

        expect(ContextPropsValues.actions.dispatch).toHaveBeenCalled()

    })


})


