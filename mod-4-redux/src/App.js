import React from "react";
import "./App.css";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import PersonEditor from "./components/PersonEditor";
import PersonDisplay from "./components/PersonDisplay";

import personReducer from "./store/reducer";
import { createChangeFirstName } from "./store/actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  personReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const action = createChangeFirstName("Mike");
store.dispatch(action);
store.dispatch(action);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PersonEditor />
        <PersonDisplay />
      </div>
    </Provider>
  );
}

export default App;
