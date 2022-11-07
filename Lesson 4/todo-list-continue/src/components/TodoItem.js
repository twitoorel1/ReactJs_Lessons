import React, { useState } from "react";

import EditTask from "./EditTask";

const TodoItem = ({
  item,
  toggleTodo,
  deleteTodoById,
  editTodoByIdAndTask,
}) => {
  const { task, isCompleted, id } = item;

  const [isEdit, setIsEdit] = useState(false);
  const [editInputValue, setEditInputValue] = useState(task);

  const handleEditTodo = () => {
    setIsEdit(!isEdit);
  };

  const handleEditInputValue = (e) => {
    setEditInputValue(e.target.value);
  };

  const handleSaveEditClick = () => {
    editTodoByIdAndTask(id, editInputValue);
    setIsEdit(false);
  };

  return (
    <React.Fragment>
      <div className="todo-item-container">
        <span style={{ textDecoration: isCompleted ? "line-through" : "" }}>
          {task}
        </span>
        <div>
          <input
            type="checkbox"
            onChange={() => toggleTodo(id)}
            checked={isCompleted}
          />
          <button onClick={handleEditTodo} className="todoItemEditButton">
            Edit
          </button>
          <button
            onClick={() => deleteTodoById(id)}
            className="todoItemDeleteButton"
          >
            X
          </button>
        </div>
      </div>
      {isEdit && (
        <EditTask
          InputValue={editInputValue}
          saveEdit={handleSaveEditClick}
          handleInputChange={handleEditInputValue}
        />
      )}
    </React.Fragment>
  );
};

export default TodoItem;
