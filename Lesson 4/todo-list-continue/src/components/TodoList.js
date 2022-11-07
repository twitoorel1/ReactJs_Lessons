import React from "react";

import TodoItem from "./TodoItem";

const TodoList = ({
  list,
  toggleTodo,
  deleteTodoById,
  editTodoByIdAndTask,
}) => {
  return (
    <div className="todo-list-container">
      {list.map((todo, index) => (
        <TodoItem
          item={todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodoById={deleteTodoById}
          editTodoByIdAndTask={editTodoByIdAndTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
