import React from "react";

import "./App.css";
import Clock from "./components/Clock";
import Greeter from "./components/Greeter";
import PersonEditor from "./components/PersonEditor";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Greeter person={{ firstName: "Maurice" }} />
      {/* <Greeter person={{ myName: "Maurice" }} />
      <Greeter /> */}
      <hr />
      <Clock />
      <hr />
      <PersonEditor />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
