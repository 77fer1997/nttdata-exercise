
import { FC, ReactNode } from 'react'
import "./index.css"
interface iProps {
    children: ReactNode
    onClick?: () => void;

}
export const IconButtonComponent: FC<iProps> = ({ children, onClick }) => {
    return (
        <div style={{ cursor: "pointer" }} onClick={onClick}>{children}</div>
    )
}
