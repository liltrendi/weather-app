import React, { Component } from "react"
import { connect } from "react-redux"
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { images } from "./../../constants/images"

import {pickLanguage} from "./../../actions/language"
import {topTab} from "./../../constants/languages"

class TopScreenHeader extends Component {
  constructor(props) {
    super(props)
  }
  chooseHeaderTitle = (header, lang) => {
    switch(header){
      case "Home":
        return topTab[1][lang]
      case "Search":
        return topTab[2][lang]
      case "Forecast":
        return topTab[3][lang]
      case "Settings":
        return topTab[4][lang]
      default:
        return topTab[1][lang]
    }
  }
  render() {
    const lang = this.props.language.english ? "en": this.props.language.kurdish ? "ku":"sy"
    const syrianActive = this.props.language.syrian ? {borderWidth: 1.3, borderColor: "#000"}:{}
    const kurdishActive = this.props.language.kurdish ? {borderWidth: 1.3, borderColor: "#000"}:{}
    const englishActive = this.props.language.english ? {borderWidth: 1.3, borderColor: "#000"}:{}
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{this.chooseHeaderTitle(this.props.title, lang)}</Text>
        <View style={styles.flags}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.pickLanguage("syrian")}><Image source={images.syrianImg} style={{...styles.flagImg, ...syrianActive}} /></TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.pickLanguage("kurdish")}><Image source={images.kurdishImg} style={{...styles.flagImg, ...kurdishActive}} /></TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.pickLanguage("english")}><Image source={images.britishImg} style={{...styles.flagImg, marginRight: 0,  ...englishActive}} /></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  language: state.language
})

const mapDispatchToProps = () => {
  return {
    pickLanguage
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(TopScreenHeader)

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15
  },
  headerText: {
    color: "#f7f7f7",
    fontWeight: "bold",
    flex: 1,
    margin: "auto",
    fontSize: 20
  },
  flags: {
    flexDirection: "row"
  },
  flagImg: {
    width: 30,
    height: 25,
    marginRight: 20
  }
})
