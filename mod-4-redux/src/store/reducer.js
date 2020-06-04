export default function personReducer(
  state = {
    firstName: "Chuck",
    lastName: "Norris",
    jokes: [],
  },
  action
) {
  console.log(state, action);

  switch (action.type) {
    case "CHANGE-FIRST-NAME":
      return { ...state, firstName: action.payload };

    case "CHANGE-LAST-NAME":
      return { ...state, lastName: action.payload };
    case "CHANGE-PROPERTY":
      return { ...state, [action.payload.prop]: action.payload.value };
    case "JOKES-LOADED":
      return { ...state, jokes: action.payload };

    default:
      return state;
  }
}
