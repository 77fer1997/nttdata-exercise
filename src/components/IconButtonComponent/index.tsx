
import React, { FC, ReactNode } from 'react'
import "./index.css"
interface iProps {
    children: ReactNode

}
export const IconButtonComponent: FC<iProps> = ({ children }) => {
    return (
        <span>{children}</span>
    )
}
