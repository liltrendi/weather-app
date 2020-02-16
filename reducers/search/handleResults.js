const initialState = {}

export const handleResults = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHED_SEARCH_RESULTS":
      return action.payload
    case "CLEAR_SEARCH_RESULTS":
      return initialState
    default:
      return state
  }
}
