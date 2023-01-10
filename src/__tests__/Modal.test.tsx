import React from "react"
import { screen, render } from "@testing-library/react"
import Modal from "../components/Modal"

describe("Modal", () => {

    it("no reenderiza si es false", () => {
        render(<Modal showModal={false}>
            <h1>children</h1>
        </Modal>)
        const h1Element = screen.queryByText(/children/i)
        expect(h1Element).not.toBeInTheDocument()
    })

    it("reenderiza su hijo si es true", () => {
        render(<Modal showModal={true}>
            <h1>children</h1>
        </Modal>)
        const h1Element = screen.queryByText(/children/i)
        expect(h1Element).toBeInTheDocument()
    })
})