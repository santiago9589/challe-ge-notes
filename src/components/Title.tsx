import React from 'react'


interface props {
  title: string
}

const TitleComponent = ({ title }: props) => {
  return (
      <h2
        className='text-5xl text-black uppercase text-center mb-2'>{title}</h2>
  )
}

export default TitleComponent