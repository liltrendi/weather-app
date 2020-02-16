import React, { Component } from "react"
import { connect } from "react-redux"
import { StyleSheet, View, Image, Text } from "react-native"
import {forecastTheme} from "./../../styles/theme"

class DayCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={{...styles.day, color: this.props.theme.light ? forecastTheme.day.light:forecastTheme.day.dark}}>{this.props.day}</Text>
          <Text style={{...styles.date, color: this.props.theme.light ? forecastTheme.date.light:forecastTheme.date.dark}}>{this.props.date}</Text>
        </View>
        <View style={styles.middle}>
          <Text style={{...styles.description, color: this.props.theme.light ? forecastTheme.description.light:forecastTheme.description.dark}}>{this.props.description}</Text>
        </View>
        <View style={styles.right}>
          <Image
            source={{
              uri: `https://www.weatherbit.io/static/img/icons/${this.props.icon}.png`
            }}
            style={styles.icon}
          />
          <Text style={{...styles.temp, color: this.props.theme.light ? forecastTheme.temp.light:forecastTheme.temp.dark}}>{this.props.temperature}</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  theme: state.theme
})

const mapDispatchToProps = () => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(DayCard)

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flex: 1
  },
  left: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20
  },
  middle: {
    justifyContent: "center",
    paddingRight: 20
  },
  right: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingRight: 20
  },
  day: {
    paddingBottom: 5,
    fontWeight: "bold",
    fontSize: 23
  },
  date: {
    fontSize: 14
  },
  description: {
    fontSize: 12,
    fontStyle: 'italic'
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    justifyContent: "center"
  },
  temp: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 14
  }
})
