import React from "react";

import Fullname from "./Fullname";
import Age from "./Age";
import Job from "./Job";

const Person = ({ firstName, lastName, age, job }) => {
  return (
    <div>
      <Fullname firstName={firstName} lastName={lastName} />
      <Age number={age} />
      <Job job={job} />
    </div>
  );
};

export default Person;
