import React from "react";

const TodoItem = ({ item, toggleTodo }) => {
  const { task, isCompleted, id } = item;

  return (
    <div className="todo-item-container">
      <span style={{ textDecoration: isCompleted ? "line-through" : "" }}>
        {task}
      </span>
      <input
        type="checkbox"
        onChange={() => toggleTodo(id)}
        checked={isCompleted}
      />
    </div>
  );
};

export default TodoItem;
