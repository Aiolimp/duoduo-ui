import React from 'react'
import * as SC from './style'
import { ButtonProps } from './type'

export const Button: React.FC<ButtonProps> = ({ variant, disabled, children }) => {
    return (
        <SC.Button variant={variant} disabled={disabled}>
            {children}
        </SC.Button>
    )
}
