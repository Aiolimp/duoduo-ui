import React from 'react'

export interface ButtonProps {
    title?: string
}

export const Button = ({ title }: ButtonProps) => {
    return <button>{title}</button>
}
