import React, { Component } from "react"
import { connect } from "react-redux"
import { StyleSheet, View, ActivityIndicator } from "react-native"
import DayCard from "./dayCard"
import { saveResults } from "./../../actions/forecast"
import { getFormattedDate, getDayInt, getMonthInt } from "./../../constants/util"
import {description, days, dates} from "./../../constants/languages"
import {forecastTheme} from "./../../styles/theme"

class Layout extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    const coords = {
      latitude: 36.18333,
      longitude: 44.01193
    }
    fetch(
      `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lang=en&lat=${coords.latitude}&lon=${coords.longitude}`,
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
          this.props.saveResults(results.data.slice(0, 7))
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  buildWeeklyForecast = (lang) => {
    return this.props.forecastResults.map(item => {
      return (
        <DayCard
          key={item.datetime}
          day={days[getDayInt(item.datetime)][lang]}
          date={getFormattedDate(item.datetime, dates[getMonthInt(item.datetime)][lang])}
          icon={item.weather.icon}
          description={description[item.weather.code][lang]}
          temperature={item.temp}
        />
      )
    })
  }
  render() {
    const lang = this.props.language.english ? "en": this.props.language.kurdish ? "ku":"sy"
    return (
      <View style={{...styles.container, backgroundColor: this.props.theme.light ? forecastTheme.container.light:forecastTheme.container.dark}}>
        {this.props.forecastResults.length > 0 ? (
          this.buildWeeklyForecast(lang)
        ) : (
          <ActivityIndicator />
        )}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  forecastResults: state.forecastResults,
  language: state.language,
  theme: state.theme
})

const mapDispatchToProps = () => {
  return {
    saveResults
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Layout)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f6f5",
    alignItems: "center",
    justifyContent: "center"
  }
})
