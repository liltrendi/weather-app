export const invalidCity = msg => {
  return {
    type: "INVALID_CITY_NAME",
    payload: "City not found"
  }
}
