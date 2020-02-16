import React, { Component } from "react"
import { connect } from "react-redux"

import NetInfo from "@react-native-community/netinfo"
import TopScreenHeader from "./../components/tabs/topScreenHeader"
import Layout from "./../components/search/layout"
import NetworkError from "./../components/network/networkError"

import { updateNetworkState } from "./../actions/networkState"

class Search extends Component {
  static navigationOptions = ({ navigation }) => {
    if(navigation.state.params !== undefined && navigation.state.params.bgColor !== undefined){
      return {
        headerTitle: () => (
          <TopScreenHeader title="Search" nav={navigation.navigate} theme={navigation.state.params.bgColor.light} />
        ),
        headerStyle: {
          backgroundColor: navigation.state.params.bgColor.light ? "#21bf73":"#35495e"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.props.navigation.setParams({bgColor: this.props.theme})
    }
  }
  componentDidMount() {
    this.props.navigation.setParams({bgColor: this.props.theme})
    NetInfo.fetch().then(state => {
      this.props.updateNetworkState(state.isConnected)
    })
  }
  render() {
    const ScreenToRender = this.props.isConnected ? (
      <Layout />
    ) : (
      <NetworkError />
    )
    return ScreenToRender
  }
}

const mapStateToProps = state => ({
  isConnected: state.isConnected,
  theme: state.theme
})

const mapDispatchToProps = () => {
  return {
    updateNetworkState
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Search)
