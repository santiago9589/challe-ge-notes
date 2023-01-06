import React, { useReducer } from 'react'
import { ContextApp} from './ContextApp'
import { ContextModal, ContextModalProps } from './ContextModal'
import { initModalState, modalReducer } from './noteModal'

interface props {
    children: React.ReactNode
}

const ContextProviderModal = ({ children }: props) => {

    const stateInit: initModalState = {
       isOpenCreate:false,
       isOpenDelete:false
    }

    const [state, dispatch] = useReducer(modalReducer, stateInit)


    const ContextModalProps: ContextModalProps = {
        state,
        actions: {
            dispatch
        }
    }

    return (
        <ContextModal.Provider value={ContextModalProps}>
            {children}
        </ContextModal.Provider>
    )
}

export default ContextProviderModal