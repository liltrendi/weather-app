const initialState = {}

export const handleHomeResults = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHED_HOME_RESULTS":
      return action.payload
    default:
      return state
  }
}
