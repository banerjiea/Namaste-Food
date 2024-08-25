import React, { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(2);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("React OP");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>Count2:{count2}</h1>
      <h2>Name : {name}</h2>
      <h3>Location : Kolkata</h3>
      <h4>Contact : @banerjiea</h4>
    </div>
  );
};

export default User;
