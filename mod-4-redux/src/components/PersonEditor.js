import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createChangeFirstName,
  createChangeLastName,
  createChangeProperty,
} from "../store/actions";

function PersonEditor() {
  // const [person, setPerson] = React.useState({
  //   firstName: "Chuck",
  //   lastName: "Norris",
  // });

  const dispatch = useDispatch();
  const person = useSelector(function (state) {
    return state;
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
              dispatch(createChangeFirstName(e.target.value));
              // setPerson({ ...person, firstName: e.target.value });
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
              // dispatch(createChangeLastName(e.target.value));
              dispatch(createChangeProperty("lastName", e.target.value));
              // setPerson({ ...person, lastName: e.target.value });
            }}
          />
        </label>
      </div>
    </div>
  );
}

export default PersonEditor;
