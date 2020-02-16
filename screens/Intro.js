import React, { Component } from "react"
import { connect } from "react-redux"
import Onboarding from "react-native-onboarding-swiper"
import { Pages } from "./../constants/onBoarding"

class Intro extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <Onboarding
        onSkip={() => this.props.navigation.navigate("App")}
        onDone={() => this.props.navigation.navigate("App")}
        showSkip={true}
        showDone={true}
        pages={Pages}
      />
    )
  }
}

export default connect(null, null)(Intro)
