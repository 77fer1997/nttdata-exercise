import React, { FC, ReactNode } from 'react'
import "./index.css"
interface iProps {
    disabled?: boolean
    children: ReactNode
    type?: "button" | "submit" | "reset" | undefined;
}
export const ButtonComponent: FC<iProps> = ({ children, disabled, type }) => {
    return (
        <button className="button" type={type}>{children}</button>
    )
}
