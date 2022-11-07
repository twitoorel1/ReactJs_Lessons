import React from "react";

import TodoItem from "./TodoItem";
import ButtonCompleted from "./ButtonCompleted";

const TodoList = ({ list, toggleTodo, removeTodo, completeAllTodo }) => {
  return (
    <div className="todo-list-container">
      <ButtonCompleted completeAllTodo={completeAllTodo} />
      {list.map((todo, index) => (
        <TodoItem
          item={todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
