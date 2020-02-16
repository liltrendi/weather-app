import React, { Component } from "react"
import { Provider } from "react-redux"
import store from "./store/store"

import AppNavigation from "./navigation"

console.disableYellowBox = true

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    )
  }
}

export default App
