export function createChangeFirstName(firstName) {
  return {
    type: "CHANGE-FIRST-NAME",
    payload: firstName,
  };
}

export function createChangeLastName(lastName) {
  return {
    type: "CHANGE-LAST-NAME",
    payload: lastName,
  };
}

export function createChangeProperty(prop, value) {
  return {
    type: "CHANGE-PROPERTY",
    payload: { prop, value },
  };
}
