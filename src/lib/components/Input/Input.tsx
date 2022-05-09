import React from 'react'

interface InputProps {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    borderColor?: string
    size?: string
    max?: number
    type?: string
    background?: string
    width?: number
}

const Input: React.FC<InputProps> = (props) =>{
    return <input  type={props?.type} max={props?.max} style={{borderColor:props.borderColor,width: props?.width === 0 ? 10 : props?.width  +"em"}} className={` ${props.size} ${props.background === "success" ? "e-success" : ""}`} onChange={props?.onChange} />
}

export default Input;