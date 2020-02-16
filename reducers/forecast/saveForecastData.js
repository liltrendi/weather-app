export const saveForecastData = (state = [], action) => {
    switch(action.type){
        case "SAVE_FORECAST_DATA":
            return action.payload
        default:
            return state
    }
}