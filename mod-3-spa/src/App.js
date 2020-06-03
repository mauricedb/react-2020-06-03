import React from "react";
import "./App.css";

import Cat from "./components/Cat";
import Dog from "./components/Dog";

function App() {
  const [display, setDisplay] = React.useState("home");

  return (
    <div>
      <header>
        <ul>
          <li>
            <a href="#" onClick={() => setDisplay("cat")}>
              Cat
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setDisplay("dog")}>
              Dog
            </a>
          </li>
        </ul>
      </header>

      {display === "home" && (
        <div>
          <h2>Choose your animal</h2>
        </div>
      )}
      {display === "cat" && <Cat />}
      {display === "dog" && <Dog />}
    </div>
  );
}

export default App;
