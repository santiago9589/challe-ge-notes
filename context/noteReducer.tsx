import { Note } from "../types/Note";

export enum NoteActionKind {
    CREATE = "CREATE",
    ARCHIVED = "ARCHIVED"
}

export interface NoteActions {
    type: NoteActionKind;
    payload: Note;
}


export interface initState {
    notes: Note[]
    notesArchived: Note[]
}


export const noteReducer = (state: initState, actions: NoteActions) => {
    switch (actions.type) {
        case NoteActionKind.CREATE: {
            return {
                ...state,
                notes: [...state.notes, actions.payload],
            }
        }
        case NoteActionKind.ARCHIVED: {

            const newNoteArchived = { ...actions.payload }
            newNoteArchived.isArchived = true

            return {
                ...state,
                notesArchived: [...state.notesArchived, newNoteArchived],
            }
        }
        default: {
            return state
        }
    }
}

