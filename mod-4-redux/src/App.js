import React from "react";
import "./App.css";

import PersonEditor from "./components/PersonEditor";
import PersonDisplay from "./components/PersonDisplay";

function App() {
  return (
    <div className="App">
      <PersonEditor />
      <PersonDisplay />
    </div>
  );
}

export default App;
