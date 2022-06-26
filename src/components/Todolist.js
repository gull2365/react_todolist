import React from "react";
import Todoitem from "./Todoitem";
import "./Todolist.css"

const Todolist = ({todos}) => {
    return ( 
        <div className="Todolist">
            {todos.map(todo =>(
                <Todoitem todo= {todo} key= {todo.id}/>
            ))}
        </div>
    );
};
export default Todolist;