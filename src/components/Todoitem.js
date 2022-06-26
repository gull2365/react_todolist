import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import './Todoitem.css'

const Todoitem = ({ todo }) => {
    const { id, text, checked } = todo;
    return (
        <div className="Todoitem">
            <div className={`content ${checked ? 'checked' : ""}`}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
            </div>
        </div>
    );
};  

export default Todoitem;