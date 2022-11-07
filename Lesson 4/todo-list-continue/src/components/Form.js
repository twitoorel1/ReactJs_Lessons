import React, { useState } from "react";

const Form = ({ addTodoToTodoList, toggleAllTodoCompleted }) => {
  const [inputValue, setInputValue] = useState("");
  const [isCompleteAll, setisCompleteAll] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    addTodoToTodoList(inputValue);
    setInputValue("");
  };

  const handleToggleAll = (e) => {
    toggleAllTodoCompleted(isCompleteAll);
    setisCompleteAll((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input value={inputValue} onChange={handleInputChange} type="text" />
      <button type="submit">Add</button>
      <button type="button" style={{ width: "80px" }} onClick={handleToggleAll}>
        {isCompleteAll ? "Complete All" : "UnComplete All"}
      </button>
    </form>
  );
};

export default Form;
