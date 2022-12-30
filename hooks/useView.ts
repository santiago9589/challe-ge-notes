import { useState } from "react"

export const useView = () => {

    const [isShowCreate, setIsShowCreate] = useState<boolean>(false)
    const [isShowDelete, setIsShowDelete] = useState<boolean>(false)

    const handleDelete = () => {
        if (!isShowCreate) {
            setIsShowDelete((isShowDelete)=>!isShowDelete)
        }
    }

    const handleCreate = () => {
        if (!isShowDelete) {
            setIsShowCreate((isShowCreate)=>!isShowCreate)
        }

    }

    return {
        isShowCreate, isShowDelete, handleCreate, handleDelete
    }
}