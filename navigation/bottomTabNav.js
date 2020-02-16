import React, { Component } from "react"
import { View, Text } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"

import { Home, Search, Forecast, Profile } from "./screens"

class Details extends Component {
  static navigationOptions = {
    title: "Details",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Details!</Text>
      </View>
    )
  }
}

const HomeStack = createStackNavigator({
  Home,
  Profile,
  Details
})

const SearchStack = createStackNavigator({
  Search,
  Profile,
  Details
})

const ForecastStack = createStackNavigator({
  Forecast,
  Profile,
  Details
})

const ProfileStack = createStackNavigator({
  Profile,
  Details
})

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Search: SearchStack,
      Forecast: ForecastStack,
      Settings: ProfileStack
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state
          let iconName,
            IconComponent = MaterialCommunityIcons
          if (routeName === "Home") {
            iconName = "weather-lightning-rainy"
          } else if (routeName === "Search") {
            iconName = "map-search"
          } else if (routeName === "Forecast") {
            iconName = "weather-pouring"
          }else if(routeName === "Settings"){
            iconName = "face"
          }

          // You can return any component that you like here!
          return <IconComponent name={iconName} size={23} color={tintColor} />
        }
      }),
      tabBarOptions: {
        activeTintColor: "#0c9463",
        inactiveTintColor: "#35495e",
        showLabel: false
      },
      resetOnBlur: true
    }
  )
)

// 2c7873 8cba51 0c9463
