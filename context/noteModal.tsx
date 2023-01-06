
export enum ModalActionKind {
    OPEN_CREATE = "OPEN_CREATE",
    CLOSE_CREATE = "CLOSE_CREATE",
    OPEN_DELETE = "OPEN_DELETE",
    CLOSE_DELETE = "CLOSE_DELETE",
}

export interface ModalActions {
    type: ModalActionKind;
    payload: boolean;
}


export interface initModalState {
    isOpenCreate: boolean
    isOpenDelete: boolean
}



export const modalReducer = (state: initModalState, actions: ModalActions) => {
    switch (actions.type) {
        case ModalActionKind.OPEN_CREATE: {
            return {
                ...state,
                isOpenCreate: actions.payload
            }
        }
        case ModalActionKind.CLOSE_CREATE: {
            return {
                ...state,
                isOpenCreate: actions.payload
            }
        }
        case ModalActionKind.OPEN_DELETE: {
            return {
                ...state,
                isOpenDelete: actions.payload
            }
        }
        case ModalActionKind.CLOSE_DELETE: {
            return {
                ...state,
                isOpenDelete: actions.payload

            }
        }
        default: {
            return state
        }
    }
}

