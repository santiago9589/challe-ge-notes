import React, { useReducer } from 'react'
import { ContextApp, ContextProps } from './ContextApp'
import { initState, noteReducer } from './noteReducer'

interface props {
    children: React.ReactNode
}

const ContextProvider = ({ children }: props) => {

    const stateInit: initState = {
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

    const [state, dispatch] = useReducer(noteReducer, stateInit)


    const ContextProps: ContextProps = {
        state,
        actions: {
            dispatch
        }
    }

    return (
        <ContextApp.Provider value={ContextProps}>
            {children}
        </ContextApp.Provider>
    )
}

export default ContextProvider