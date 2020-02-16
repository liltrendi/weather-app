const handleLoader = flag => {
  return {
    type: flag ? "SHOW_RECONNECT_LOADER" : "HIDE_RECONNECT_LOADER"
  }
}

export default handleLoader
