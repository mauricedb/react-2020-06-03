import React from "react";

function PersonEditor() {
  const [person, setPerson] = React.useState({
    firstName: "Chuck",
    lastName: "Norris",
  });

  return (
    <div>
      <div>
        <label>
          Firstname:
          <input
            name="firstName"
            className="value"
            value={person.firstName}
            onChange={(e) => {
              setPerson({ ...person, firstName: e.target.value });
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Lastname:
          <input
            name="lastName"
            className="value"
            value={person.lastName}
            onChange={(e) => {
              setPerson({ ...person, lastName: e.target.value });
            }}
          />
        </label>
      </div>
    </div>
  );
}

export default PersonEditor;
