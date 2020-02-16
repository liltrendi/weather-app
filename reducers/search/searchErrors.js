const initialState = {
  invalidCity: "",
  noResults: ""
}

export const searchErrors = (state = initialState, action) => {
  switch (action.type) {
    case "INVALID_CITY_NAME":
      return { ...state, invalidCity: action.payload }
    case "NO_RESULTS_FOUND":
      return { ...state, noResults: action.payload }
    case "CLEAR_SEARCH_ERRORS":
      return { ...state, invalidCity: "", noResults: "" }
    default:
      return state
  }
}
