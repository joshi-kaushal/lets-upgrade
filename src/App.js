import { useState } from "react";
import "./App.css";
import Button from "./Components/Button/Button";

function App() {
  let [count, setCount] = useState(0);

  const increment = () =>
    count < 25 ? setCount(count + 1) : alert("You can't go above 25");

  const decrement = () =>
    count > 0 ? setCount(count - 1) : alert("You can't go below 0");

  const reset = () => setCount(0);

  return (
    <div className="App">
      <h1>Counter Application</h1>
      <div id="container">
        <Button buttonText="Increment" operation={increment} />
        <Button buttonText="Decrement" operation={decrement} />
        <Button buttonText="Reset" operation={reset} />
      </div>
      <h3>Current value of the counter is : {count}</h3>
    </div>
  );
}

export default App;
