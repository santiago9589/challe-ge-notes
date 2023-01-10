import { useContext } from 'react'
import { ContextModal } from '../../context/ContextModal'
import { ModalActionKind } from '../../context/noteModal'
import CreateEditModal from './CreateEditModal'
import DeleteModal from './DeleteModal'
import Modal from './Modal'
import React from "react"

const ModalComponent = () => {

    const stateModal = useContext(ContextModal)

    return (
        <>
            <Modal showModal={stateModal.state.isOpenCreate}>
                <CreateEditModal onClose={() => stateModal.actions.dispatch({
                    type: ModalActionKind.CLOSE_CREATE,
                    payload: false
                })} />
            </Modal>
            <Modal showModal={stateModal.state.isOpenDelete}>
                <DeleteModal onClose={() => stateModal.actions.dispatch({
                    type: ModalActionKind.CLOSE_DELETE,
                    payload: false
                })} />
            </Modal>
        </>
    )
}

export default ModalComponent