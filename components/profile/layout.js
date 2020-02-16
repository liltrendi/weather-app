import React, { Component } from "react"
import { connect } from "react-redux"
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"
import { images } from "./../../constants/images"
import {settings} from "./../../constants/languages"
import { homeTheme } from "./../../styles/theme"

import {toggleTheme} from "./../../actions/theme/toggleTheme"
import {pickLanguage} from "./../../actions/language"

class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const lang = this.props.language.english
      ? "en"
      : this.props.language.kurdish
      ? "ku"
      : "sy"
    return (
      <View style={styles.container}>
        <View style={styles.cards}>
            <View
              style={{
                ...styles.top,
                backgroundColor: this.props.theme.light
                  ? homeTheme.topCard.light
                  : homeTheme.topCard.dark
              }}
            >
              <View style={styles.topCard}>
                
                <View style={styles.helloView}>
                  <Text
                    style={{
                      ...styles.helloText,
                      color: this.props.theme.light
                        ? homeTheme.helloText.light
                        : homeTheme.helloText.dark
                    }}
                  >
                    {settings["topText"]["large"][lang]}
                  </Text>
                  <Text
                    style={{
                      ...styles.name,
                      color: this.props.theme.light
                        ? homeTheme.name.light
                        : homeTheme.name.dark
                    }}
                  >
                    {settings["topText"]["small"][lang]}
                  </Text>
                </View>

              </View>
            </View>
            <View
              style={{
                ...styles.bottom,
                backgroundColor: this.props.theme.light
                  ? homeTheme.bottomCard.light
                  : homeTheme.bottomCard.dark
              }}
            >
              <View style={styles.bottomCard}>
                <View style={styles.bottomBottomCard}>
                  <View style={styles.bottomCardRow}>
                    <View style={styles.box}>
                      <TouchableOpacity
                      style={{justifyContent: "center", alignContent: "center",alignItems: "center"}}
                      onPress={() => {
                        if(this.props.theme.light){
                          this.props.toggleTheme("dark")
                        }else{
                          this.props.toggleTheme("light")
                        }
                      }}>
                      <Text
                        style={{
                          ...styles.weatherType,
                          color: this.props.theme.light
                            ? homeTheme.weatherType.light
                            : homeTheme.weatherType.dark
                        }}
                      >
                        {settings["titles"][1][lang]}
                      </Text>
                      <Image
                        source={images.paintImg}
                        style={styles.weatherIconImg}
                      />
                      <Text
                        style={{
                          ...styles.weatherValue,
                          color: this.props.theme.light
                            ? homeTheme.weatherValue.light
                            : homeTheme.weatherValue.dark
                        }}
                      >
                        {this.props.theme.light ? settings["themes"][1][lang]:settings["themes"][2][lang]}
                      </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                      <TouchableOpacity style={{justifyContent: "center", alignContent: "center",alignItems: "center"}} onPress={() => {
                        if(this.props.language.english){
                            this.props.pickLanguage("kurdish")
                        }else if(this.props.language.kurdish){
                            this.props.pickLanguage("syrian")
                        }else{
                            this.props.pickLanguage("english")
                        }
                      }}>
                      <Text
                        style={{
                          ...styles.weatherType,
                          color: this.props.theme.light
                            ? homeTheme.weatherType.light
                            : homeTheme.weatherType.dark
                        }}
                      >
                        {settings["titles"][2][lang]}
                      </Text>
                      <Image
                        source={images.languageImg}
                        style={styles.weatherIconImg}
                      />
                      <Text
                        style={{
                          ...styles.weatherValue,
                          color: this.props.theme.light
                            ? homeTheme.weatherValue.light
                            : homeTheme.weatherValue.dark
                        }}
                      >
                        {lang === "en" ? settings["languages"][1][lang]:lang === "ku"?settings["languages"][2][lang]:settings["languages"][3][lang]}
                      </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ ...styles.bottomCardRow, paddingTop: 35 }}>
                    
                    <View style={styles.box}>
                      <Text
                        style={{
                          ...styles.weatherType,
                          color: this.props.theme.light
                            ? homeTheme.weatherType.light
                            : homeTheme.weatherType.dark
                        }}
                      >
                        {settings["titles"][3][lang]}
                      </Text>
                      <Image
                        source={images.locationImg}
                        style={styles.weatherIconImg}
                      />
                      <Text
                        style={{
                          ...styles.weatherValue,
                          color: this.props.theme.light
                            ? homeTheme.weatherValue.light
                            : homeTheme.weatherValue.dark
                        }}
                      >
                        {settings["city"][lang]}
                      </Text>
                    </View>
                    
                    <View style={styles.box}>
                      <TouchableOpacity onPress={() => {}} style={{justifyContent: "center", alignContent: "center",alignItems: "center"}}>
                      <Text
                        style={{
                          ...styles.weatherType,
                          color: this.props.theme.light
                            ? homeTheme.weatherType.light
                            : homeTheme.weatherType.dark
                        }}
                      >
                        {settings["titles"][4][lang]}
                      </Text>
                      <Image
                        source={images.exitImg}
                        style={styles.weatherIconImg}
                      />
                      <Text
                        style={{
                          ...styles.weatherValue,
                          color: this.props.theme.light
                            ? homeTheme.weatherValue.light
                            : homeTheme.weatherValue.dark
                        }}
                      >
                        {settings["exit"][1][lang]}
                      </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  language: state.language,
  theme: state.theme
})

const mapDispatchToProps = () => {
  return {
    toggleTheme,
    pickLanguage
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Layout)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f6f5",
    alignItems: "center",
    justifyContent: "center"
  },
  cards: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    top: 0
  },
  top: {
    backgroundColor: "#f5f5f5",
    height: 250,
    width: "100%",
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30
  },
  bottom: {
    backgroundColor: "#25da83",
    height: 500,
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -90,
    padding: 20,
    paddingTop: 60
  },
  topCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  helloView: {
    alignItems: "center",
    textAlign: "center"
  },
  helloText: {
    fontFamily: "chewy",
    fontSize: 25,
    letterSpacing: 3,
    color: "#2f2e41",
    marginTop: 15,
    marginBottom: 20,
    textAlign: "center"
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2f2e41",
    textAlign: "center",
    marginTop: 0
  },
  bottomCard: {
    flexDirection: "column"
  },
  bottomBottomCard: {
    flexDirection: "column",
    height: 245
  },
  locationView: {
    padding: 25,
    marginTop: -15
  },
  locationText: {
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
    textAlign: "center"
  },
  description: {
    fontSize: 13,
    textAlign: "center",
    color: "#333",
    textAlign: "center"
  },
  weatherIconImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    top: 10
  },
  box: { width: "50%", justifyContent: "center", alignItems: "center" },
  bottomCardRow: { height: "50%", flexDirection: "row", marginTop: 10 },
  weatherType: { fontWeight: "bold" },
  weatherValue: { marginTop: 22, fontSize: 16 }
})
