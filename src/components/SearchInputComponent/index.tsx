import { ChangeEvent, FC } from 'react'
import "./index.css"
import * as BiIcons from "react-icons/bi"
interface iProps {
    name: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const SearchInputComponent: FC<iProps> = ({ name, onChange }) => {
    return (
        <div className="search-input">
            <span><BiIcons.BiSearch /></span>
            <input autoComplete='false' type="text" name={name} placeholder="Search" onChange={onChange} />
        </div>

    )
}
