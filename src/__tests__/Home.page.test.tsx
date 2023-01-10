import React from "react"
import { MemoryRouter } from 'react-router-dom';
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"
import HomePage from "../pages/Home/Home.page"
import ContextProvider from "../../context/ContextProvider"
import ContextProviderModal from "../../context/ContextProviderModal"


interface props {
    children: React.ReactNode
}

const Wrapper = ({ children }: props) => {
    return (
        <MemoryRouter>
            <ContextProvider>
                <ContextProviderModal>
                    {children}
                </ContextProviderModal>
            </ContextProvider>
        </MemoryRouter>
    )
}


describe("HomePage", () => {


    it("Home is rendering correct", () => {

        render(<HomePage />, { wrapper: Wrapper })
        expect(screen.getByText(/my notes/i)).toBeInTheDocument()
        expect(screen.getByText(/create/i)).toBeInTheDocument()
        expect(screen.getByText(/archived/i)).toBeInTheDocument()
    })

    it("when the bottom create is clicked", async () => {
        render(<HomePage />, { wrapper: Wrapper })
    })
})