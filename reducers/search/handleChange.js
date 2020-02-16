export const handleChange = (state = "", action) => {
  switch (action.type) {
    case "ON_INPUT_CHANGE":
      return action.payload
    default:
      return state
  }
}
