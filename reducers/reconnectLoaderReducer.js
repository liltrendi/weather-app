const reconnectLoaderReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_RECONNECT_LOADER":
      state = true
      return state
    case "HIDE_RECONNECT_LOADER":
      state = false
      return state
    default:
      return state
  }
}

export default reconnectLoaderReducer
