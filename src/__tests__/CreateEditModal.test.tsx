import React from "react"
import { screen, render, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { ContextApp, ContextProps } from "../../context/ContextApp"
import ContextProviderModal from "../../context/ContextProviderModal"
import { initState } from "../../context/noteReducer"
import CreateEditModal from "../components/CreateEditModal"


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

describe("CreateEditModal", () => {

    const handleClose = jest.fn()

    beforeEach(() => {
        render(<Wrapper ContextPropsValues={ContextPropsValues}>
            <CreateEditModal onClose={handleClose} />
        </Wrapper>)
    })

    it("reenderiza el modal", () => {
        const titleElement = screen.getByText("Create/Edit Note")
        const inputTitleElement = screen.getByPlaceholderText(/new title/i)
        const textContextElement = screen.getByPlaceholderText(/new content/i)
        const categoriesArticle = screen.getByTestId(/categories-article/i)
        const inputCategoryElement = screen.getByPlaceholderText(/new category/i)
        const buttonCancelElement = screen.getByRole("button", { name: /cancel/i })
        const buttonAddElement = screen.getByRole("button", { name: /add/i })
        const buttonSaveElement = screen.getByRole("button", { name: /save/i })

        expect(titleElement).toBeInTheDocument()
        expect(inputTitleElement).toBeInTheDocument()
        expect(textContextElement).toBeInTheDocument()
        expect(categoriesArticle).toBeInTheDocument()
        expect(inputCategoryElement).toBeInTheDocument()
        expect(buttonCancelElement).toBeInTheDocument()
        expect(buttonAddElement).toBeInTheDocument()
        expect(buttonSaveElement).toBeInTheDocument()
        expect(buttonSaveElement).toBeDisabled()

    })

    it("puedo ingresar informacion", () => {

        const inputTitleElement = screen.getByPlaceholderText(/new title/i)
        const textContextElement = screen.getByPlaceholderText(/new content/i)
        const inputCategoryElement = screen.getByPlaceholderText(/new category/i)

        fireEvent.change(inputTitleElement, {
            target: {
                value: "comprar agua"
            }
        })

        fireEvent.change(textContextElement, {
            target: {
                value: "vender papa"
            }
        })

        fireEvent.change(inputCategoryElement, {
            target: {
                value: "comer torta"
            }
        })

        expect(inputTitleElement).toHaveValue("comprar agua")
        expect(textContextElement).toHaveValue("vender papa")
        expect(inputCategoryElement).toHaveValue("comer torta")

    })

    it("poder agregar un categoria y se limpia el input", () => {

        const inputCategoryElement = screen.getByPlaceholderText(/new category/i)
        const buttonAddElement = screen.getByRole("button", { name: /add/i })

        fireEvent.change(inputCategoryElement, {
            target: {
                value: "comer torta"
            }
        })

        fireEvent.click(buttonAddElement)

        expect(screen.getAllByTestId(/category/i).length).toBe(1)
        expect(inputCategoryElement).toHaveValue("")


    })

    it("el boton save de habilita", () => {

        const inputTitleElement = screen.getByPlaceholderText(/new title/i)
        const textContextElement = screen.getByPlaceholderText(/new content/i)
        const inputCategoryElement = screen.getByPlaceholderText(/new category/i)
        const buttonAddElement = screen.getByRole("button", { name: /add/i })
        const buttonSaveElement = screen.getByRole("button", { name: /save/i })

        fireEvent.change(inputTitleElement, {
            target: {
                value: "comprar agua"
            }
        })

        fireEvent.change(textContextElement, {
            target: {
                value: "vender papa"
            }
        })

        fireEvent.change(inputCategoryElement, {
            target: {
                value: "comer torta"
            }
        })

        fireEvent.click(buttonAddElement)

        expect(buttonSaveElement).not.toBeDisabled()

    })

    it("el boton cancel llama a la funcion de cierre", () => {

        const buttonCancelElement = screen.getByRole("button", { name: /cancel/i })

        fireEvent.click(buttonCancelElement)

        expect(handleClose).toHaveBeenCalledTimes(1)

    })
})  