import { Note } from "../types/Note";

export enum NoteActionKind {
    CREATE = "CREATE",
    ARCHIVED = "ARCHIVED",
    DELETE = "DELETE",
    UNARCHIVED="UNARCHIVED"
}

export interface NoteActions {
    type: NoteActionKind;
    payload: Note ;
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
        case NoteActionKind.UNARCHIVED: {

            const draftArchived = new Set(state.notesArchived)
            draftArchived.delete(actions.payload)

            const newNoteArchived = { ...actions.payload }
            newNoteArchived.isArchived = false

            return {
                ...state,
                notesArchived: Array.from(draftArchived),
                notes: [...state.notes, newNoteArchived]
            }
        }

        case NoteActionKind.ARCHIVED: {

            const draft = new Set(state.notes)
            draft.delete(actions.payload)
            const newNoteArchived = { ...actions.payload }
            newNoteArchived.isArchived = true

            return {
                ...state,
                notesArchived: [...state.notesArchived, newNoteArchived],
                notes:Array.from(draft)
            }
        }

        case NoteActionKind.DELETE :{
            const draftNote = new Set(state.notes)
            const draftArchived = new Set(state.notesArchived)

            if(draftNote.has(actions.payload)){
                draftNote.delete(actions.payload)
            }else{
                if(draftArchived.has(actions.payload))
                draftArchived.delete(actions.payload)
            }
            
            return{
                ...state,
                notesArchived:Array.from(draftArchived),
                notes:Array.from(draftNote)
            }
        }


        default: {
            return state
        }
    }
}

