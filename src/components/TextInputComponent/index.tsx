import { ChangeEvent, FC } from 'react'
import "./index.css"
interface iProps {
    label: string
    name: string
    placeholder?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}
export const TextInputComponent: FC<iProps> = ({ name, label, onChange, placeholder, value }) => {
    return (
        <div className="input-field">
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} id={name} onChange={onChange} placeholder={placeholder} value={value} />
        </div>
    )
}
