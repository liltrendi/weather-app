import React, { Component } from "react"
import { connect } from "react-redux"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { Avatar } from "react-native-elements"
import { images } from "./../../constants/images"
import {  weatherNames } from "./../../constants/languages"
import {searchTheme} from "./../../styles/theme"

class ResultsCard extends Component {
  render() {
    const lang = this.props.language.english ? "en": this.props.language.kurdish ? "ku":"sy"
    return (
      <View style={{...styles.card, backgroundColor: this.props.theme.light ? searchTheme.bottomCard.light:searchTheme.bottomCard.dark}}>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.row}
            activeOpacity={0.5}
            onPress={() => {}}
          >
            <Text style={{...styles.header, color: this.props.theme.light ? searchTheme.weatherType.light:searchTheme.weatherType.dark}}>{weatherNames[1][lang]}</Text>
            <Avatar
              source={images.thermometerImg}
              containerStyle={styles.avatar}
              size={40}
              overlayContainerStyle={{ backgroundColor: "transparent" }}
            />
            <View style={styles.text}>
              <Text style={{...styles.values, color: this.props.theme.light ? searchTheme.weatherValue.light:searchTheme.weatherValue.dark}}>
                {parseFloat(this.props.results.temp).toFixed(1)}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            activeOpacity={0.5}
            onPress={() => {}}
          >
            <Text style={{...styles.header, color: this.props.theme.light ? searchTheme.weatherType.light:searchTheme.weatherType.dark}}>{weatherNames[2][lang]}</Text>
            <Avatar
              source={images.umbrellaImg}
              containerStyle={styles.avatar}
              size={40}
              overlayContainerStyle={{ backgroundColor: "transparent" }}
            />
            <View style={styles.text}>
              <Text style={{...styles.values, color: this.props.theme.light ? searchTheme.weatherValue.light:searchTheme.weatherValue.dark}}>
                {parseFloat(this.props.results.rh).toFixed(1)}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.row}
            activeOpacity={0.5}
            onPress={() => {}}
          >
            <Text style={{...styles.header, color: this.props.theme.light ? searchTheme.weatherType.light:searchTheme.weatherType.dark}}>{weatherNames[3][lang]}</Text>
            <Avatar
              source={images.windImg}
              containerStyle={styles.avatar}
              size={40}
              overlayContainerStyle={{ backgroundColor: "transparent" }}
            />
            <View style={styles.text}>
              <Text style={{...styles.values, color: this.props.theme.light ? searchTheme.weatherValue.light:searchTheme.weatherValue.dark}}>
                {parseFloat(this.props.results.wind_spd).toFixed(1)}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            activeOpacity={0.5}
            onPress={() => {}}
          >
            <Text style={{...styles.header, color: this.props.theme.light ? searchTheme.weatherType.light:searchTheme.weatherType.dark}}>{weatherNames[4][lang]}</Text>
            <Avatar
              source={images.pressureImg}
              containerStyle={styles.avatar}
              size={40}
              overlayContainerStyle={{ backgroundColor: "transparent" }}
            />
            <View style={styles.text}>
              <Text style={{...styles.values, color: this.props.theme.light ? searchTheme.weatherValue.light:searchTheme.weatherValue.dark}}>
                {parseFloat(this.props.results.pres).toFixed(1)}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const mapStateToProps = state => ({
  results: state.searchResults,
  language: state.language,
  theme: state.theme
})

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps())(ResultsCard)

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 10,
    elevation: 7,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: "100%"
  },
  top: {
    flexDirection: "row",
    justifyContent: "center"
  },
  row: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "center"
  },
  header: {
    fontWeight: "bold",
    paddingBottom: 10,
    marginTop: 0
  },
  avatar: {
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5
  },
  values: {
    color: "#333",
    textAlign: "center",
    fontSize: 22,
    paddingTop: 10
  }
})
