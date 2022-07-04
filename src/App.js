import React, { useState } from 'react';
import './App.css';
import Template from './components/Template';
import Todolist from './components/Todolist';
import Todoinsert from './components/Todoinsert';
import { MdAddCircle } from 'react-icons/md';

let nextId = 4;

const App = () => {
  const [SelectedTodo, setSelctedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }
  ]);

  const onInsertToggle = () => {
    if (SelectedTodo) {
      setSelctedTodo(null);
    }
    setInsertToggle(prev => !prev)
  };

  const onInsertTodo = text => {
    if (text === "") {
      return alert("뭐 좀 채워보게. ")
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo)); //concat함수 사용시 새배열이 리턴이 되고 기존 배열은 리턴이 되지 않음 갸꿀 상태불변성 유지 ㅆㄱㄴ
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  const onChangeSelectedTodo = (todo) => {
    setSelctedTodo(todo);
  }

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, text } : todo)
    );
  }

  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }
  return (
    <Template todolength={todos.length}>
      <Todolist todos={todos}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
      <div className='add-todo-button' onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <Todoinsert
          SelectedTodo={SelectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}
    </Template>
  );
};

export default App;
