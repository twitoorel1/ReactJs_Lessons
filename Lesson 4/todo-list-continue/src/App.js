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

  const editTodoByIdAndTask = (id, task) => {
    const todoListCopy = [...todoList];
    const indexByTodoId = todoListCopy.findIndex((todo) => todo.id === id);
    const todoToEdit = todoListCopy[indexByTodoId];
    todoListCopy[indexByTodoId] = {
      ...todoToEdit,
      task,
    };
    setTodoList(todoListCopy);
  };

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

  // With Class
  const deleteTodoById = (id) => {
    const filteredTodos = todoList.filter((todo) => todo.id !== id);
    console.log(filteredTodos);
    setTodoList(filteredTodos);
  };

  // 1. loop over the TodoList array
  // 2. change each item to completed true
  const toggleAllTodoCompleted = (status) => {
    const completedTodos = todoList.map((todo) => ({
      ...todo,
      isCompleted: status,
      // isCompleted: !todo.isCompleted,
    }));
    setTodoList(completedTodos);
  };

  // Me
  // const removeTodo = (id) => {
  //   const todoListCopy = [...todoList];
  //   const indexByTodoId = todoListCopy.findIndex((todo) => todo.id === id);
  //   console.log(indexByTodoId);
  //   todoListCopy.splice(indexByTodoId, 1);
  //   setTodoList(todoListCopy);
  // };
  // const completeAllTodo = () => {
  //   const todoListCopy = [...todoList];
  //   todoListCopy.forEach((todo) => {
  //     todo.isCompleted = true;
  //   });
  //   setTodoList(todoListCopy);
  // };

  return (
    <div className="app-container">
      <Form
        addTodoToTodoList={addTodoToTodoList}
        toggleAllTodoCompleted={toggleAllTodoCompleted}
      />
      <TodoList
        list={todoList}
        toggleTodo={toggleTodoCompleted}
        deleteTodoById={deleteTodoById}
        editTodoByIdAndTask={editTodoByIdAndTask}
      />
    </div>
  );
};

export default App;
