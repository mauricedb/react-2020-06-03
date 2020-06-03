import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import Cat from "./components/Cat";
import Dog from "./components/Dog";
import notFound from "./components/404.jpg";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cat">Cat</Link>
            </li>
            <li>
              <Link to="/cat/Zorro">Zorro</Link>
            </li>
            <li>
              <Link to="/dog">Dog</Link>
            </li>
          </ul>
        </header>

        <Switch>
          <Route path="/cat/:catName">
            <Cat />
          </Route>
          <Route path="/cat">
            <Cat />
          </Route>
          <Route path="/dog">
            <Dog />
          </Route>
          <Route path="/" exact>
            <div>
              <h2>Choose your animal</h2>
            </div>
          </Route>
          <Route>
            <Redirect to="/" />
            {/* <div>
              <img src={notFound} alt="No found" />
            </div> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
