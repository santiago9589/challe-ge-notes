import React, { useReducer } from 'react'
import { ContextApp, ContextProps } from './ContextApp'
import { initState, noteReducer } from './noteReducer'

interface props {
    children: React.ReactNode
}

const ContextProvider = ({ children }: props) => {

    const stateInit: initState = {
        notes: [
            {
                title:"ffds",
                content:"dsfsdf",
                isArchived:false,
                category:[]
            }
        ],
        notesArchived:[

        ]
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