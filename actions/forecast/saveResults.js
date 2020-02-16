export const saveResults = obj => {
    return {
        type: "SAVE_FORECAST_DATA",
        payload: obj
    }
}