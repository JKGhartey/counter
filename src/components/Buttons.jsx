import React, { useState } from "react";

const Buttons = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Click me!</button>
        <button onClick={() => setCount(count + 2)}>Skip 2</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <h3>You clicked {count} times! </h3>
    </>
  );
};

export default Buttons;
