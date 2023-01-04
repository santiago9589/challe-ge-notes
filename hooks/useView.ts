import { useState } from "react"

export const useView = () => {

    const [isShowCreate, setIsShowCreate] = useState<boolean>(false)
    const [isShowEdit, setIsShowEdit] = useState<boolean>(false)
    const [isShowDelete, setIsShowDelete] = useState<boolean>(false)

    const handleDelete = () => {
        if (!isShowCreate && !isShowEdit) {
            setIsShowDelete((isShowDelete)=>!isShowDelete)
        }
    }

    const handleCreate = () => {
        if (!isShowDelete && !isShowEdit) {
            setIsShowCreate((isShowCreate)=>!isShowCreate)
        }
    }

    const handleEdit = () => {
        if (!isShowDelete && !isShowCreate) {
            setIsShowEdit((isShowEdit)=>!isShowEdit)
        }
    }

    return {
        isShowCreate, isShowDelete, handleCreate, handleDelete,handleEdit,isShowEdit
    }
}