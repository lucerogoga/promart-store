import React, { useState } from "react";

const CounterHorizontal = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="counter-content">
        <button
          className="counter-button"
          onClick={() => (count <= 1 ? setCount(1) : setCount(count - 1))}
        >
          -
        </button>
        <p>{count}</p>
        <button className="counter-button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </>
  );
};
export default CounterHorizontal;
