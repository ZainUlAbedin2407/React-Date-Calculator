import React from "react";
import "./Step.css";
const Step = ({stepCount,setStepCount}) => {
  const incrementHandler = () => setStepCount(prev => prev + 1);
  const decrementHandler = () => stepCount === 0 ? setStepCount(0) : setStepCount(prev => prev - 1);
  return (
    <div className="step-container">
      <p className="step-head">Step</p>
      <p className="counter">{stepCount}</p>
      <div className="step-buttons">
        <button disabled={stepCount === 0} className="decrement" onClick={() => decrementHandler()}>-</button>
        <button className="increment" onClick={() => incrementHandler()}>+</button>
      </div>
    </div>
  );
};

export default Step;
