const updateNetworkState = state => {
  return {
    type: state ? "CONNECTED" : "DISCONNECTED"
  }
}

export default updateNetworkState
