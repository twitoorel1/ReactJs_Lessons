import React from "react";
import "./Check.css";

const Check = ({ ageValue }) => {
  const checkAge = () => {
    if (ageValue == 0) {
      return "Choose Age";
    } else if (ageValue < 0) {
      return "Please Write Number Bigger from 0";
    } else if (ageValue <= 17) {
      return "Sorry You Cant Drink";
    } else if (ageValue >= 18) {
      return "Good You Can Drink";
    }
  };

  return (
    <div className="InfoCheck">
      {/* <h1>{ageValue ? ageValue : "Choose Age"}</h1> */}
      <h2>{ageValue ? checkAge() : "Choose Age"}</h2>
    </div>
  );
};

export default Check;
