const networkStateReducer = (state = false, action) => {
  switch (action.type) {
    case "CONNECTED":
      state = true
      return state
    case "DISCONNECTED":
      state = false
      return state
    default:
      state = true
      return state
  }
}

export default networkStateReducer
