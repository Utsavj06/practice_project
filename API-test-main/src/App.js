import "./App.css";
import Detail from "./Detail";
import { useState } from "react";

export default function App() {
  const [shown, setShow] = useState(false);

  function show() {
    setShow(!shown);
  }
  return (
    <div className="App">
      <button onClick={show}>Click</button>
      {shown ? <Detail /> : ""}
    </div>
  );
}
