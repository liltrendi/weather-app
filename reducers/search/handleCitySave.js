const initialState = {}

export const handleCitySave = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_CITY_TO_STATE":
      return action.payload
    default:
      return state
  }
}
