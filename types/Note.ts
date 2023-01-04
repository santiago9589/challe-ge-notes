export interface Categories{
    name:string
}

export interface Note {
    title:string
    content:string
    category:Categories[]
    isArchived:boolean
    Id:string
}