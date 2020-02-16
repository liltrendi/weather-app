import { combineReducers } from "redux"
import fontReducer from "./fontReducer"
import networkStateReducer from "./networkStateReducer"
import reconnectLoaderReducer from "./reconnectLoaderReducer"
import {
  handleChange,
  handleLoader,
  searchErrors,
  handleResults,
  handleCitySave
} from "./search"
import { isLoading } from "./home/loading"
import { handleHomeResults } from "./home/handleResults"
import { changeLanguage } from "./language/changeLanguage"
import {saveForecastData} from "./forecast/saveForecastData"
import {currentTheme} from "./theme/currentTheme"

const rootReducer = combineReducers({
  language: changeLanguage,
  theme: currentTheme,
  fontLoaded: fontReducer,
  isConnected: networkStateReducer,
  isReconnectionLoaderShowing: reconnectLoaderReducer,
  city: handleChange,
  searchedCity: handleCitySave,
  searchLoading: handleLoader,
  searchErrors: searchErrors,
  searchResults: handleResults,
  isHomeFetching: isLoading,
  homeResults: handleHomeResults,
  forecastResults: saveForecastData
})

export default rootReducer
