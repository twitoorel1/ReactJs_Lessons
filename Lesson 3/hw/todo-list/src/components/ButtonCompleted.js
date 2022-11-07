import React from "react";

const ButtonCompleted = ({ completeAllTodo }) => {
  return (
    <div className="completeAllTodo">
      <button onClick={completeAllTodo} type={"button"}>
        Complete All
      </button>
    </div>
  );
};

export default ButtonCompleted;
