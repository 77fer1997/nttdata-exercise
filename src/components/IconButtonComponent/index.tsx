
import { FC, ReactNode } from 'react'
import "./index.css"
interface iProps {
    children: ReactNode
    onClick?: () => void;

}
export const IconButtonComponent: FC<iProps> = ({ children, onClick }) => {
    return (
        <span onClick={onClick}>{children}</span>
    )
}
