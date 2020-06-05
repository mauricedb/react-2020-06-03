import React from "react";

import "./App.css";
import Clock from "./components/Clock";
import Greeter from "./components/Greeter";
import PersonEditor from "./components/PersonEditor";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App" data-test-id="TheApp">
      <Greeter person={{ firstName: "Maurice" }} />
      <Greeter person={{ firstName: "Maurice" }} />
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
