import { createContext } from "react"
import { Note } from "../types/Note"
import { NoteActions } from "./noteReducer"

export interface ContextProps {
    state: {
        notes: Note[]
        notesArchived:Note[]
        noteSelected:Note
    }
    actions:{
        dispatch: React.Dispatch<NoteActions>
    }
}

export const ContextApp = createContext<ContextProps>({} as ContextProps)