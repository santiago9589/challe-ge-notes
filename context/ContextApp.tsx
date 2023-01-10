import React from "react"
import { createContext } from "react"
import { Note } from "../types/Note"
import { initState, NoteActions } from "./noteReducer"

export interface ContextProps {
    state : initState 
    actions:{
        dispatch: React.Dispatch<NoteActions>
    }
}

export const ContextApp = createContext<ContextProps>({} as ContextProps)