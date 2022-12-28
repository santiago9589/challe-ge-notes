import TitleComponent from "../../components/Title"
import { useState } from "react"
import CardComponent from "../../components/CardComponent"
import { Note } from "../../../types/Note"
import { Link } from "react-router-dom"

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

    const initValuesCat = [{
        name: "juan"
    },{
        name: "juan"
    },{
        name: "juan"
    },{
        name: "juan"
    },{
        name: "juan"
    },{
        name: "juan"
    },{
        name: "juan"
    },{
        name: "juan"
    },{
        name: "juan"
    }]

    const [mockCard, setMockCard] = useState<Note[]>(initValues)
    const [isShow, setIsShow] = useState<boolean>(true)
    const [mockCategories, setMockCategories] = useState<{ name: string }[]>(initValuesCat)




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

                        <section className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
                            <b className="absolute top-0 left-0 w-screen h-screen bg-black opacity-30" />
                            <section className="bg-white h-1/2 w-1/2 z-10 p-4 box-border border-2 rounded-lg border-black overflow-auto">
                                <TitleComponent title="Create/Edit Note" />
                                <form className="flex flex-col w-full mt-4 items-center space-y-2">
                                    <div className="flex w-full items-start">
                                        <label className="w-2/5">Title:</label>
                                        <input
                                            className="w-full p-2  border-2"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex w-full items-start">
                                        <label className="w-2/5">Content:</label>
                                        <textarea
                                            className="w-full p-2  border-2"
                                        />
                                    </div>
                                    <div className="flex w-full items-start">
                                        <p className="w-2/5">Categories:</p>
                                        <section className="flex flex-col w-full">
                                            <article className="border-2 w-full mb-2 h-1/3 flex flex-col">
                                                {
                                                    mockCategories.map((categories, index) => {
                                                        return (
                                                            <div key={index} className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                                                                </svg>
                                                                <span className="pr-2 pl-2">{categories.name}</span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </article>
                                            <section className="flex justify-between space-x-2 items-center">
                                                <input
                                                    className="w-full p-2  border-2"
                                                    type="text"
                                                />
                                                <button className="bg-blue-200 p-2 w-1/4 shadow-blue-400">Add</button>
                                            </section>
                                            <section className="flex justify-center items-center space-x-2 mt-2">
                                                <button className="bg-green-200 p-2 w-full shadow-green-400">Save</button>
                                                <button className="bg-red-200 p-2 w-full shadow-red-400">Cancel</button>
                                            </section>
                                        </section>
                                    </div>
                                </form>
                            </section>
                        </section>) :

                        (null)
                }
            </>
        </>
    )
}

export default HomePage