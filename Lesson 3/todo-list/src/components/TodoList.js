import React from "react";

import TodoItem from "./TodoItem";

const TodoList = ({ list, toggleTodo }) => {
  return (
    <div className="todo-list-container">
      {list.map((todo, index) => (
        <TodoItem item={todo} key={todo.id} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
