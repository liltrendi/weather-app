import React, { Component } from "react"
import { connect } from "react-redux"
import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native"
import { updateNetworkState } from "./../../actions/networkState"
import { images } from "./../../constants/images"
import { resultsData } from "./../../actions/search"
import { hideLoader } from "./../../actions/home/handleLoader"

import { getFormattedDate, getMonthInt } from "./../../constants/util"
import { greeting, dates, description, weatherNames } from "./../../constants/languages"

import {homeTheme} from "./../../styles/theme"

class Layout extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const city = {
      latitude: 36.18333,
      longitude: 44.01193
    }
    fetch(
      `https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=${city.longitude}&lat=${city.latitude}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
          "x-rapidapi-key": "cf25797ed0msh851cd5c55d08153p154590jsnd5abbb83c108"
        }
      }
    )
      .then(response => response.json())
      .then(results => {
        if (results.data.length > 0) {
          this.props.resultsData(results.data[0], false)
          this.props.hideLoader()
        }
      })
      .catch(err => {
        alert(err)
      })
  }

  render() {
    const lang = this.props.language.english
      ? "en"
      : this.props.language.kurdish
      ? "ku"
      : "sy"
    return (
      <View style={styles.container}>
        {this.props.isHomeFetching ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.cards}>
            <View style={{...styles.top, backgroundColor: this.props.theme.light ? homeTheme.topCard.light:homeTheme.topCard.dark}}>
              <View style={styles.topCard}>
                <Image source={images.hiImg} style={styles.hiImg} />
                <View style={styles.helloView}>
                  <Text style={{...styles.helloText, color: this.props.theme.light? homeTheme.helloText.light:homeTheme.helloText.dark}}>{greeting[1][lang]}</Text>
                  <Text style={{...styles.name, color: this.props.theme.light? homeTheme.name.light:homeTheme.name.dark}}>
                    {getFormattedDate(
                      this.props.results.datetime,
                      dates[getMonthInt(this.props.results.datetime)][lang]
                    )}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{...styles.bottom, backgroundColor: this.props.theme.light ? homeTheme.bottomCard.light:homeTheme.bottomCard.dark}}>
              <View style={styles.bottomCard}>
                <View style={styles.bottomTopCard}>
                  <Image
                    source={{
                      uri: `https://www.weatherbit.io/static/img/icons/${this.props.results.weather.icon}.png`
                    }}
                    style={{ ...styles.weatherIconImg, marginTop: -20 }}
                  />
                  <View style={styles.locationView}>
                    <Text
                      style={{...styles.locationText, color: this.props.theme.light? homeTheme.locationText.light:homeTheme.locationText.dark}}
                    >{`${this.props.results.city_name}, ${this.props.results.country_code}`}</Text>
                    <Text style={{...styles.description, color: this.props.theme.light? homeTheme.description.light:homeTheme.description.dark}}>
                      {description[this.props.results.weather.code][lang]}
                    </Text>
                  </View>
                </View>
                <View style={styles.bottomBottomCard}>
                  <View style={styles.bottomCardRow}>
                    <View style={styles.box}>
                  <Text style={{...styles.weatherType, color: this.props.theme.light? homeTheme.weatherType.light:homeTheme.weatherType.dark}}>{weatherNames[1][lang]}</Text>
                      <Image
                        source={images.coldImg}
                        style={styles.weatherIconImg}
                      />
                      <Text style={{...styles.weatherValue, color: this.props.theme.light? homeTheme.weatherValue.light:homeTheme.weatherValue.dark}}>
                        {parseFloat(this.props.results.temp).toFixed(1)}
                      </Text>
                    </View>
                    <View style={styles.box}>
                      <Text style={{...styles.weatherType, color: this.props.theme.light? homeTheme.weatherType.light:homeTheme.weatherType.dark}}>{weatherNames[2][lang]}</Text>
                      <Image
                        source={images.humidImg}
                        style={styles.weatherIconImg}
                      />
                      <Text style={{...styles.weatherValue, color: this.props.theme.light? homeTheme.weatherValue.light:homeTheme.weatherValue.dark}}>
                        {parseFloat(this.props.results.rh).toFixed(1)}
                      </Text>
                    </View>
                  </View>
                  <View style={{ ...styles.bottomCardRow, paddingTop: 35 }}>
                    <View style={styles.box}>
                      <Text style={{...styles.weatherType, color: this.props.theme.light? homeTheme.weatherType.light:homeTheme.weatherType.dark}}>{weatherNames[3][lang]}</Text>
                      <Image
                        source={images.windspeedImg}
                        style={styles.weatherIconImg}
                      />
                      <Text style={{...styles.weatherValue, color: this.props.theme.light? homeTheme.weatherValue.light:homeTheme.weatherValue.dark}}>
                        {parseFloat(this.props.results.wind_spd).toFixed(1)}
                      </Text>
                    </View>
                    <View style={styles.box}>
                      <Text style={{...styles.weatherType, color: this.props.theme.light? homeTheme.weatherType.light:homeTheme.weatherType.dark}}>{weatherNames[4][lang]}</Text>
                      <Image
                        source={images.gaugeImg}
                        style={styles.weatherIconImg}
                      />
                      <Text style={{...styles.weatherValue, color: this.props.theme.light? homeTheme.weatherValue.light:homeTheme.weatherValue.dark}}>
                        {parseFloat(this.props.results.pres).toFixed(1)}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  isHomeFetching: state.isHomeFetching,
  results: state.homeResults,
  language: state.language,
  theme: state.theme
})

const mapDispatchToProps = () => {
  return { updateNetworkState, resultsData, hideLoader }
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
    paddingLeft: 0,
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
    padding: 20
  },
  topCard: {
    flexDirection: "row",
    flex: 1
  },
  hiImg: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    left: 30
  },
  helloView: {
    position: "absolute",
    right: 25
  },
  helloText: {
    fontFamily: "chewy",
    fontSize: 45,
    letterSpacing: 3,
    color: "#2f2e41",
    marginTop: 15
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
  bottomTopCard: {
    flexDirection: "column",
    height: 120,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
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
  bottomCardRow: { height: "50%", flexDirection: "row", marginTop: -5 },
  weatherType: { fontWeight: "bold" },
  weatherValue: { marginTop: 22, fontSize: 16 }
})
