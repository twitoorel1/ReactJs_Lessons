import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./style/global.css";
import { v4 as uuid } from "uuid";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: uuid(), task: "Code Some React", isCompleted: false },
    { id: uuid(), task: "Eat a lot of food", isCompleted: false },
    { id: uuid(), task: "drink 2 bottles of Arak", isCompleted: false },
  ]);

  const addTodoToTodoList = (todo) => {
    const newTodo = {
      id: uuid(),
      task: todo,
      isCompleted: false,
    };
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  const toggleTodoCompleted = (id) => {
    const todoListCopy = [...todoList];
    const indexByTodoId = todoListCopy.findIndex((todo) => todo.id === id);
    // console.log(indexByTodoId);
    const targetTodo = todoListCopy[indexByTodoId];
    todoListCopy[indexByTodoId] = {
      ...targetTodo,
      isCompleted: !targetTodo.isCompleted,
    };
    setTodoList(todoListCopy);
  };

  const removeTodo = (id) => {
    const todoListCopy = [...todoList];
    const indexByTodoId = todoListCopy.findIndex((todo) => todo.id === id);
    console.log(indexByTodoId);
    todoListCopy.splice(indexByTodoId, 1);
    setTodoList(todoListCopy);
  };

  const completeAllTodo = () => {
    const todoListCopy = [...todoList];
    todoListCopy.forEach((todo) => {
      todo.isCompleted = true;
    });
    setTodoList(todoListCopy);
  };

  return (
    <div className="app-container">
      <Form addTodoToTodoList={addTodoToTodoList} />
      <TodoList
        list={todoList}
        toggleTodo={toggleTodoCompleted}
        removeTodo={removeTodo}
        completeAllTodo={completeAllTodo}
      />
    </div>
  );
};

export default App;
