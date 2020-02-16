export const isLoading = (state = true, action) => {
  switch (action.type) {
    case "LOADING_COMPLETED":
      return false
    default:
      return state
  }
}
