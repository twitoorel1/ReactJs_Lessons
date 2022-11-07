import "./Form.css";
import React, { useState, useEffect } from "react";
import Check from "../components/Check";

const Form = () => {
  const [age, setAge] = useState("Choose Age");

  const valueAge = (e) => {
    setAge(e.target.value);
    console.log(e.target.value);
  };

  //   const clickAge = () => {
  //     console.log(age);
  //   };

  //   const checkNumber = () => {
  //     if (age <= 0) {
  //       setAge((age) => age == 1);
  //     }
  //   };

  return (
    <div>
      <form>
        <input type={"number"} placeholder={"Your Age"} onClick={valueAge} />
        <input type={"button"} value={"Check"} />
      </form>

      <Check ageValue={age} />
    </div>
  );
};

export default Form;
