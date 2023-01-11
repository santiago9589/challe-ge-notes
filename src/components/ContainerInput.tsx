import React from 'react'

interface props{
    children:React.ReactNode
}

const ContainerInput = ({children}:props) => {
  return (
    <section  className="flex flex-col w-full items-start">
        {children}
    </section>
  )
}

export default ContainerInput
