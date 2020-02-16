import React, { Component } from "react"
import { connect } from "react-redux"
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native"
import NetInfo from "@react-native-community/netinfo"
import { images } from "./../../constants/images"
import { updateNetworkState, handleLoader } from "../../actions/networkState"
import { networkTheme } from "./../../styles/theme"
import {netErrorheader, retryingConnection, tryAgain} from "./../../constants/languages"

class NetworkError extends Component {
  render() {
    const lang = this.props.language.english ? "en": this.props.language.kurdish ? "ku":"sy"
    return (
      <View style={{...styles.container, backgroundColor: this.props.theme.light ? networkTheme.container.light:networkTheme.container.dark}}>
        <View style={styles.errImgView}>
          <Image source={images.netErrImg} style={styles.errImg} />
        </View>
        {this.props.fontLoaded && (
          <View style={styles.errMsgView}>
  <Text style={{...styles.errMsgCta, color: this.props.theme.light ? networkTheme.text.light:networkTheme.text.dark}}>{netErrorheader[1][lang]}</Text>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.errBtn}
              onPress={() => {
                this.props.handleLoader(true)
                NetInfo.fetch().then(state => {
                  this.props.updateNetworkState(state.isConnected)
                })
              }}
            >
              <Text style={{...styles.errText}}>
                {this.props.isAnimating ? retryingConnection[1][lang] : tryAgain[1][lang]}
              </Text>
              {this.props.isAnimating && (
                <View style={styles.spinnerView}>
                  <ActivityIndicator
                    size="small"
                    color="#fff"
                    animating={this.props.isAnimating}
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  fontLoaded: state.fontLoaded,
  isAnimating: state.isReconnectionLoaderShowing,
  isConnected: state.isConnected,
  language: state.language,
  theme: state.theme
})

const mapDispatchToProps = () => {
  return {
    updateNetworkState,
    handleLoader
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(NetworkError)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f6f5",
    alignItems: "center",
    justifyContent: "center"
  },
  errImgView: {
    top: -30
  },
  errImg: {
    flex: 1,
    width: 250,
    height: 250,
    resizeMode: "contain"
  },
  errMsgView: {
    top: -105
  },
  errMsgCta: {
    fontWeight: "400",
    fontFamily: "chewy",
    fontSize: 17,
    letterSpacing: 1.3,
    color: "#333"
  },
  errBtn: {
    backgroundColor: "#21bf73",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    padding: 12.2,
    paddingLeft: 16,
    marginTop: 12
  },
  errText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 0.6,
    paddingRight: 3
  },
  spinnerView: {
    backgroundColor: "transparent",
    marginLeft: 10
  }
})
