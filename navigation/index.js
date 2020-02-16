import React, { Component } from "react"
import { connect } from "react-redux"
import loadFont from "./../actions/fonts/loadFont"
import * as Font from "expo-font"
import NetInfo from "@react-native-community/netinfo"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import {
  createStackNavigator,
  StackViewTransitionConfigs
} from "react-navigation-stack"

import { Intro, AuthLoading } from "./screens"

import bottomTabNav from "./bottomTabNav"

import { updateNetworkState } from "./../actions/networkState"

const AppStack = createStackNavigator(
  {
    bottomTabNav
  },
  {
    mode: "card",
    transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
    headerMode: "none"
  }
)

const AuthStack = createStackNavigator(
  {
    Intro
  },
  {
    mode: "card",
    transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS
  }
)

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
)

class AppNavigation extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      chewy: require("./../assets/fonts/chewy.ttf")
    })
    this.props.loadFont()
    NetInfo.addEventListener(state => {
      this.props.updateNetworkState(state.isConnected)
    })
  }
  render() {
    return <AppContainer />
  }
}

const mapStateToProps = state => ({
  fontLoaded: state.fontLoaded
})

const mapDispatchToProps = () => {
  return {
    loadFont,
    updateNetworkState
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(AppNavigation)
