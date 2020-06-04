import React from "react";
import { useSelector, useDispatch } from "react-redux";

function loadJokes() {
  return async function (dispatch) {
    const rsp = await fetch(
      "https://the-problem-solver-sample-data.azurewebsites.net/chuck-norris"
    );
    const jokes = await rsp.json();
    dispatch({ type: "JOKES-LOADED", payload: jokes });
  };
}

function PersonDisplay() {
  const dispatch = useDispatch();
  const fullName = useSelector(function (state) {
    return state.firstName + " " + state.lastName;
  });
  const jokesCount = useSelector(function (state) {
    return state.jokes.length;
  });

  return (
    <div>
      <label>
        Full name:
        <span className="value">{fullName}</span>
      </label>
      <button
        onClick={() => {
          dispatch(loadJokes());
        }}
      >
        Load data {jokesCount}
      </button>
    </div>
  );
}

export default PersonDisplay;
