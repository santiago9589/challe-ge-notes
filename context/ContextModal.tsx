import React from "react"
import { createContext } from "react"
import { initModalState, ModalActions } from "./noteModal"


export interface ContextModalProps {
    state : initModalState
    actions:{
        dispatch: React.Dispatch<ModalActions>
    }
}

export const ContextModal = createContext<ContextModalProps>({} as ContextModalProps)