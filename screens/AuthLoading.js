import React, { Component } from "react"
import { connect } from "react-redux"
import { ActivityIndicator, AsyncStorage, View, StyleSheet } from "react-native"

class AuthLoading extends Component {
  componentDidMount() {
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const retrievedUserData = await AsyncStorage.getItem("hasEverLaunched")
    if (retrievedUserData !== null) {
      this.props.navigation.navigate("App")
    } else {
      this.props.navigation.navigate("App") //replace with Auth if you need intro slider
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps())(AuthLoading)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f6f5",
    alignItems: "center",
    justifyContent: "center"
  }
})
