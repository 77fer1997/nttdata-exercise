import { ChangeEvent, FC } from 'react'
import "./index.css"
interface iProps {
    name: string
    label: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const RangeInputComponent: FC<iProps> = ({ name, label, onChange }) => {
    return (
        <div className="range-input-container">
            <label htmlFor="">{label}</label>
            <input className="range-input" type="range" name={name} onChange={onChange} />
        </div>

    )
}
