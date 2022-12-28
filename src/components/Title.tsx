import React from 'react'

interface props{
    title:string
}

const TitleComponent = ({title}:props) => {
  return (
    <h2 className='text-2xl text-black uppercase'>{title}</h2>
  )
}

export default TitleComponent