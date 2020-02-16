import React, { Component } from "react"
import { connect } from "react-redux"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { Avatar } from "react-native-elements"
import {searchTheme} from "./../../styles/theme"
import {description} from "./../../constants/languages"

class TopCard extends Component {
  formatLongName = name => {
    return `${name.split(" ")[0]}...`
  }
  render() {
    const lang = this.props.language.english ? "en": this.props.language.kurdish ? "ku":"sy"
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => {}}
        style={{...styles.card, backgroundColor: this.props.theme.light ? searchTheme.topCard.light:searchTheme.topCard.dark}}
      >
        <View style={styles.top}>
          <Avatar
            source={{
              uri: `https://www.weatherbit.io/static/img/icons/${this.props.results.weather.icon}.png`
            }}
            containerStyle={styles.avatar}
            size={40}
            overlayContainerStyle={{ backgroundColor: "transparent" }}
          />
          <View style={styles.text}>
            <Text
              style={{...styles.location, color: this.props.theme.light ? searchTheme.location.light:searchTheme.location.dark}}
            >{`${this.props.city.name}, ${this.props.city.country.length > 8 ? this.formatLongName(this.props.city.country):this.props.city.country}`}</Text>
            <Text style={{...styles.condition, color: this.props.theme.light ? searchTheme.condition.light:searchTheme.condition.dark}}>
              {description[this.props.results.weather.code][lang]}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => ({
  results: state.searchResults,
  city: state.searchedCity,
  language: state.language,
  theme: state.theme
})

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps())(TopCard)

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f8f8f8",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    marginBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    elevation: 7,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: "70%"
  },
  top: {
    flexDirection: "row",
    justifyContent: "center"
  },
  avatar: {
    marginRight: 20
  },
  text: {
    justifyContent: "center"
  },
  location: {
    fontWeight: "bold",
    color: "#333"
  },
  condition: {
    paddingTop: 5
  }
})
