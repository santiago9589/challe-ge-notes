import { useState } from "react"
import {Categories} from "../types/Note"

export const useCategories = ()=>{
    const [categories,setCaterigories] = useState<Categories[]>([])
    const [InputValues,setInputValues] = useState<string>("")


    const handleCategories = () =>{
        if(!InputValues) return
        setCaterigories((categories)=>[...categories,{...categories,name:InputValues}])
        setInputValues("")
    }

    const deleteCategories = (InputCategories:Categories) =>{
        const draft = new Set(categories)
        if(draft.has(InputCategories)){
            draft.delete(InputCategories)
            setCaterigories(Array.from(draft))
        }
    }

    return {
        setCaterigories,handleCategories,deleteCategories,setInputValues,categories,InputValues
    }

}