import React, { FC, ReactNode } from 'react'
import "./index.css"
interface iProps {
    disabled?: boolean
    children: ReactNode

}
export const ButtonComponent: FC<iProps> = ({ children, disabled }) => {
    return (
        <button className="button">{children}</button>
    )
}
