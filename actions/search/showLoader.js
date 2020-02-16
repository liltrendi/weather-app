export const showLoader = flag => {
  return {
    type: flag ? "SHOW_SEARCHING_LOADER" : "HIDE_SEARCHING_LOADER"
  }
}
