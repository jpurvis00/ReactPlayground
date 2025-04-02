import Count from "./Count.jsx";
import Button from "./Button.jsx";
import { useState } from "react";
import "./index.css";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="app">
      {/*number < 3 ? <Count number={number} /> : null*/}
      <Count number={number} />
      <Button setNumber={setNumber} />
    </div>
  );
}

export default App;
