import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import "./Todoinsert.css";

const Todoinsert = ({ onInsertToggle, onInsertTodo }) => {
    const [value, setValue] = useState("");
    
    const onChange = e => {
        setValue(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefalt(); // preventDefalt로  새로고침 차단
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    };
    return ( 
        <div>
            <div className="background" onClick={onInsertToggle}></div>
            <form onSubmit={onSubmit}>
                <input 
                placeholder="오늘 할일을 적어주세요" 
                value={value} 
                onChange={onChange}
                ></input>
                <button type="submit">
                    <MdAddCircle />
                </button>
            </form>
        </div>
    );
};

export default Todoinsert;