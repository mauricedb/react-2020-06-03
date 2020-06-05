import React, { ComponentProps } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

type GreeterProps = ComponentProps<typeof Greeting>;

function doStuff() {
  return { x: 1, y: "", z: true };
}

type DoStuffResult = ReturnType<typeof doStuff>;

const o: Readonly<DoStuffResult> = { x: 0, y: "", z: false };
// o.x = 2;

const o2: Partial<DoStuffResult> = { x: 0, y: undefined };

function App() {
  const greeterProps: GreeterProps = { theUserName: "Maurice" };

  return (
    <div className="App">
      <Greeting theUserName="Maurice" />
      <Greeting {...greeterProps} />
      <Counter />
    </div>
  );
}

export default App;
