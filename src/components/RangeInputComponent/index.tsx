import React, { FC, ReactNode } from 'react'
import "./index.css"
interface iProps {
    name: string
    label: string
}
export const RangeInputComponent: FC<iProps> = ({ name, label }) => {
    return (
        <div className="range-input-container">
            <label htmlFor="">{label}</label>
            <input className="range-input" type="range" name={name} />
        </div>

    )
}
