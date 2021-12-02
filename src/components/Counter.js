import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>You clicked {counter} times!</p>
      <button onClick={() => setCounter(counter - 1)}>Click here!</button>
    </div>
  );
};

export default Counter;
