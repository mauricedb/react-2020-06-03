import React from "react";

function Greeting({ name }) {
  React.useEffect(function () {
    console.log("We just mounted");
  }, []);

  return (
    <div>
      Hello <b>{name}</b>
    </div>
  );

  // return React.createElement(
  //   "div",
  //   null,
  //   "Hello ",
  //   React.createElement("b", null, "there")
  // );
}

export default Greeting;
