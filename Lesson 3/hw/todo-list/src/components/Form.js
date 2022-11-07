import React, { useState } from "react";

const Form = ({ addTodoToTodoList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    addTodoToTodoList(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input value={inputValue} onChange={handleInputChange} type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
