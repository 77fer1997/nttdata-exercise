import { FC, ReactNode } from 'react'
import "./index.css"
interface iProps {
    disabled?: boolean
    children: ReactNode

}
export const TableComponent: FC<iProps> = ({ children, disabled }) => {
    return (
        <div className="table-container">
            <table>
                {children}
            </table>
        </div>
    )
}
