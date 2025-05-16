import "./App.css";
import Count from "./Components/Count";
import CurrentDate from "./Components/CurrentDate";
import DateCalculate from "./Components/DateCalculate";
import Step from "./Components/Step";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [stepCount, setStepCount] = useState(0);

  return (
    <div className="container">
      <CurrentDate />
      <Count count={count} setCount={setCount} stepCount={stepCount} />
      <Step stepCount={stepCount} setStepCount={setStepCount} />
      <DateCalculate
        count={count}
        setCount={setCount}
        stepCount={stepCount}
        setStepCount={setStepCount}
      />
    </div>
  );
}

export default App;
