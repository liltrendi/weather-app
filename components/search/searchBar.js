import React, { Component } from "react"
import { connect } from "react-redux"
import {  View } from "react-native"
import { TextInput } from "react-native-paper"
import {
  onChange,
  showLoader,
  invalidCity,
  noResults,
  clearErrors,
  resultsData,
  clearResults,
  saveCityToState
} from "./../../actions/search"
import {searchTheme} from "./../../styles/theme"
import {searchPlaceholder} from "./../../constants/languages"

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit = () => {
    this.props.clearErrors()
    this.props.clearResults()
    this.props.showLoader(true)
    this.searchForCity(this.props.city)
  }
  searchForCity = city => {
    fetch(`https://wft-geo-db.p.mashape.com/v1/geo/cities?namePrefix=${city}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": "cf25797ed0msh851cd5c55d08153p154590jsnd5abbb83c108"
      }
    })
      .then(response => response.json())
      .then(results => {
        if (results.data.length === 0) {
          this.props.invalidCity()
          return
        } else {
          this.props.saveCityToState(results.data[0])
          this.retrieveCityWeather(results.data[0])
        }
      })
      .catch(err => {
        alert(err)
      })
  }
  retrieveCityWeather = city => {
    fetch(
      `https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=${
        this.props.searchedCity.longitude
          ? this.props.searchedCity.longitude
          : city.longitude
      }&lat=${
        this.props.searchedCity.latitude
          ? this.props.searchedCity.latitude
          : city.latitude
      }`,
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
        if (results.data.length < 1) {
          this.props.noResults()
          return
        } else {
          this.props.resultsData(results.data[0], true)
        }
      })
      .catch(err => {
        alert(err)
      })
  }
  render() {
    const lang = this.props.language.english ? "en": this.props.language.kurdish ? "ku":"sy"
    return (
      <View>
        <TextInput
          label={searchPlaceholder[1][lang]}
          mode="outlined"
          value={this.props.city}
          style={{backgroundColor: this.props.theme.light ? searchTheme.inputField.light:searchTheme.inputField.dark}}
          theme={{
            colors: { underlineColor: "transparent", primary: this.props.theme.light ? searchTheme.activeOutline.light:searchTheme.activeOutline.dark, placeholder: this.props.theme.light ? searchTheme.inactiveOutline.light:searchTheme.inactiveOutline.dark, text: this.props.theme.light ? searchTheme.text.light:searchTheme.text.dark }
          }}
          onChangeText={text => this.props.onChange(text)}
          onSubmitEditing={() =>
            this.props.city.length > 0 && this.handleSubmit()
          }
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  city: state.city,
  errors: state.searchErrors,
  searchedCity: state.searchedCity,
  language: state.language,
  theme: state.theme
})

const mapDispatchToProps = () => {
  return {
    onChange,
    showLoader,
    invalidCity,
    noResults,
    clearErrors,
    resultsData,
    clearResults,
    saveCityToState
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(SearchBar)

