import React from "react"
import { screen, render } from "@testing-library/react"
import TitleComponent from "../components/Title"

describe("Title", () => {
    it("Reenderiza el titulo", () => {
        render(<TitleComponent title="hola mundo"/>)
        const titleElement = screen.getByText("hola mundo")
        expect(titleElement).toBeInTheDocument()
    })
})