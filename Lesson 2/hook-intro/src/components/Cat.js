import React, { useEffect } from "react";

const Cat = ({ number }) => {
  useEffect(() => {
    console.log("Cat Got Rendered");

    return () => {
      console.log("Cat Got Unmounted");
    };
  }, [number]);

  return (
    <div>
      <img
        alt="Cat_Image"
        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
      />
      <h1>{number}</h1>
    </div>
  );
};

export default Cat;
