import React from 'react'

interface props {
    label?: string
    name: string
    onChange?: (e: React.ChangeEvent<any>) => void
    value: string
    error?: string
    touched?: boolean
    placeholder: string
    type: string
}

const InputComponent = ({ name, error, touched, label, ...props }: props) => {
    return (
        <>
            {label && <label className="w-2/5" htmlFor={name}>{label}:</label>}
            <input
                className="w-full p-2 border-2"
                name={name}
                {...props}
            />
            {error && touched && (<span>{error}</span>)}
        </>
    )
}

export default InputComponent