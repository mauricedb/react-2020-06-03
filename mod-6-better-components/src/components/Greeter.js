import React from "react";
import propTypes from "prop-types";

function Greeter({ person }) {
  console.count("Greeter " + person?.firstName);

  return <div>Hello {person?.firstName ?? "Stranger"}</div>;
}

Greeter.propTypes = {
  person: propTypes.shape({
    firstName: propTypes.string.isRequired,
    lastName: propTypes.oneOf([propTypes.string, propTypes.number]),
  }).isRequired,
};

Greeter.displayName = "The Greeter Component";

export default React.memo(Greeter);
