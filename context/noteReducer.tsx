import { Note } from "../types/Note";

export enum NoteActionKind {
    CREATE = "CREATE",
    ARCHIVED = "ARCHIVED",
    DELETE = "DELETE",
    UNARCHIVED = "UNARCHIVED",
    START_EDIT = "START_EDIT",
    FINISH_EDIT = "FINISH_EDIT"
}

export interface NoteActions {
    type: NoteActionKind;
    payload: Note;
}


export interface initState {
    notes: Note[]
    notesArchived: Note[]
    noteSelected: Note
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

            const newNoteUnArchived = { ...actions.payload }
            newNoteUnArchived.isArchived = false

            return {
                ...state,
                notesArchived: Array.from(draftArchived),
                notes: [...state.notes, newNoteUnArchived]
            }
        }

        case NoteActionKind.ARCHIVED: {

            const draftNotes = new Set(state.notes)
            draftNotes.delete(actions.payload)
            const newNoteArchived = { ...actions.payload }
            newNoteArchived.isArchived = true

            return {
                ...state,
                notesArchived: [...state.notesArchived, newNoteArchived],
                notes: Array.from(draftNotes)
            }
        }

        case NoteActionKind.DELETE: {
            const draftNote = new Set(state.notes)
            const draftArchived = new Set(state.notesArchived)

            if (draftNote.has(actions.payload)) {
                draftNote.delete(actions.payload)
            } else {
                if (draftArchived.has(actions.payload))
                    draftArchived.delete(actions.payload)
            }

            return {
                ...state,
                notesArchived: Array.from(draftArchived),
                notes: Array.from(draftNote)
            }
        }

        case NoteActionKind.START_EDIT: {

            const editNote = state.notes.filter((note) => {
                return note.Id === actions.payload.Id
            })

            return {
                ...state,
                noteSelected: editNote[0]
            }
        }

        case NoteActionKind.FINISH_EDIT: {

            const notesFilter = state.notes.filter((note) => {
                return note.Id !== actions.payload.Id
            })

            return {
                ...state,
                noteSelected: {
                    Id: "",
                    title: "",
                    content: "",
                    category: [],
                    isArchived: false
                },
                notes: [...notesFilter, actions.payload],
            }
        }


        default: {
            return state
        }
    }
}

