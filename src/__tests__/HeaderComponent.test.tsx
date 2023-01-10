import React from "react"
import { screen, render } from "@testing-library/react"
import HeaderComponent from "../components/headerComponent"

describe("HeaderComponent", () => {
    it("reenderiza el header vacio", () => {
        render(<HeaderComponent title="">
        </HeaderComponent>)
        expect(screen.getByRole("heading")).toBeInTheDocument()
    })


    it("reenderiza lo que se pase por props", () => {
        render(<HeaderComponent title="title">
            <h1>children</h1>
        </HeaderComponent>)
        const h1Element = screen.getByText(/children/i)
        const titleElement = screen.getByText(/title/i)
        expect(h1Element).toBeInTheDocument()
        expect(titleElement).toBeInTheDocument()
    })
})