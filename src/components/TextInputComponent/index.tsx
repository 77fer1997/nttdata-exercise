import { ChangeEvent, FC } from 'react'
import "./index.css"
interface iProps {
    label: string
    name: string
    placeholder?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const TextInputComponent: FC<iProps> = ({ name, label, onChange, placeholder }) => {
    return (
        <div className="input-field">
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} id={name} onChange={onChange} />
        </div>
    )
}
