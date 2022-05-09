import React from 'react'

interface InputProps {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<InputProps> = (props) =>{
    return <input onChange={props?.onChange} />
}

export default Input;