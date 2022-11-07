import React from "react";

const EditTask = ({ InputValue, saveEdit, handleInputChange }) => {
  return (
    <div className="todoListEditContainer">
      <input value={InputValue} onChange={handleInputChange} type={"text"} />
      <button onClick={saveEdit} className="todoItemEditSaveBuuton">
        Save
      </button>
    </div>
  );
};

export default EditTask;
