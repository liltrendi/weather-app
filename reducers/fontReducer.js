const fontReducer = (state = false, action) => {
  switch (action.type) {
    case "FONT_LOADED":
      state = true
      return state
    default:
      return state
  }
}

export default fontReducer
