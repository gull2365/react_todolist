import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { TiTrash, TiPencil } from "react-icons/ti";
import "./Todoinsert.css";

const Todoinsert = ({ onInsertToggle, onInsertTodo, SelectedTodo, onRemove, onUpdate }) => {
    const [value, setValue] = useState("");
    const onChange = e => {
        setValue(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault(); // preventDefalt로  새로고침 차단
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    };
    useEffect(() => {
        if (SelectedTodo) {
            setValue(SelectedTodo.text);
        }
    }, [SelectedTodo]);

    return (
        <div>
            <div className="background" onClick={onInsertToggle}></div>
            <form onSubmit={SelectedTodo ? () => { onUpdate(SelectedTodo.id, value) } : onSubmit}>
                <input
                    placeholder="오늘 할일을 적어주세요"
                    value={value}
                    onChange={onChange}
                ></input>
                {SelectedTodo ? (
                    <div className="rewrite">
                        <TiPencil onClick={() => { onUpdate(SelectedTodo.id, value) }}/>
                        <TiTrash onClick={() => { onRemove(SelectedTodo.id) }} />
                    </div>
                ) : (
                    <button type="submit">
                        <MdAddCircle />
                    </button>)}
            </form>
        </div >
    );
};

export default Todoinsert;