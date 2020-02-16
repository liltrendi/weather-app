export const handleLoader = (state = false, action) => {
  switch (action.type) {
    case "SHOW_SEARCHING_LOADER":
      return true
    case "HIDE_SEARCHING_LOADER":
      return false
    default:
      return state
  }
}
