export const resultsData = (obj, flag) => {
  return {
    type: flag ? "FETCHED_SEARCH_RESULTS" : "FETCHED_HOME_RESULTS",
    payload: obj
  }
}
