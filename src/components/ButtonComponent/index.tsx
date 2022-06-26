import React, { FC, ReactNode } from "react";
import "./index.css";
interface iProps {
    disabled?: boolean;
    children?: ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    label: string;
    onClick?: () => void;
}
export const ButtonComponent: FC<iProps> = ({ children, disabled, type, label, onClick }) => {
    return (
        <button className="button" type={type} disabled={disabled} onClick={onClick}>
            <div className="button_elements-container">
                {children}
                <p>{label}</p>
            </div>
        </button>
    );
};
