import React from "react";
import './input.css'

interface InputProps {
    value: string
    onChange: (value: string) => void
    type: string
    placeholder?: string
}

const Input:React.FC<InputProps> = ({value, onChange, type, placeholder}) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={handleOnChange}/>
    )
}

export default Input;