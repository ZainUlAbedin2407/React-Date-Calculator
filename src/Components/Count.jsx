import React from "react";
import "./Count.css";
const Count = ({ count, setCount, stepCount }) => {
  const incrementHandler = () =>
    setCount((prev) => (stepCount === 0 ? prev + 1 : prev + stepCount));
  const decrementHandler = () => {
    if (stepCount === 0) setCount((prev) => prev - 1);
    count === 0
      ? setCount(0)
      : setCount((prev) =>
          prev - stepCount < 0 ? setCount(0) : prev - stepCount
        );
  };
  return (
    <div className="count-container">
      <p className="count-head">Count</p>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button
          className="decrement"
          disabled={count === 0}
          onClick={() => decrementHandler()}
        >
          Decrement
        </button>
        <button className="increment" onClick={() => incrementHandler()}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Count;
