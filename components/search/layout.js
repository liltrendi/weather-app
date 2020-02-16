import React, { Component } from "react"
import { connect } from "react-redux"
import { StyleSheet, View, Image, Text, ActivityIndicator } from "react-native"
import SearchBar from "./searchBar"
import ResultsCard from "./resultsCard"
import { images } from "./../../constants/images"
import TopCard from "./topCard"
import {searchHeader, cityNotFound, noResults} from "./../../constants/languages"
import {searchTheme} from "./../../styles/theme"

class Layout extends Component {
  render() {
    const lang = this.props.language.english ? "en": this.props.language.kurdish ? "ku":"sy"
    return (
      <View style={{...styles.container, backgroundColor: this.props.theme.light ? searchTheme.container.light:searchTheme.container.dark}}>
        <View style={styles.body}>
          {this.props.fontLoaded && (
            <Text style={{...styles.description, color: this.props.theme.light ? searchTheme.description.light:searchTheme.description.dark}}>{searchHeader[1][lang]}</Text>
          )}
          <SearchBar />
          {Object.keys(this.props.results).length !== 0 ? (
            <View style={styles.resultsView}>
              <TopCard />
              <ResultsCard />
            </View>
          ) : (
            <React.Fragment>
              {this.props.errors.invalidCity.length === 0 &&
              this.props.errors.noResults.length === 0 &&
              this.props.loading ? (
                <ActivityIndicator style={styles.loader} />
              ) : (
                <View style={styles.cityView}>
                  <Image source={images.cityImg} style={styles.cityImg} />
                </View>
              )}
              {this.props.errors.invalidCity.length > 0 &&
                this.props.fontLoaded && (
                  <Text style={{...styles.errorMessage, color: this.props.theme.light ? searchTheme.error.light:searchTheme.error.dark}}>
                    {cityNotFound[1][lang]}
                  </Text>
                )}
              {this.props.errors.noResults.length > 0 &&
                this.props.fontLoaded && (
                  <Text style={{...styles.errorMessage, color: this.props.theme.light ? searchTheme.error.light:searchTheme.error.dark}}>
                    {noResults[1][lang]}
                  </Text>
                )}
            </React.Fragment>
          )}
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  fontLoaded: state.fontLoaded,
  loading: state.searchLoading,
  errors: state.searchErrors,
  results: state.searchResults,
  language: state.language,
  theme: state.theme
})

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps())(Layout)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f6f5",
    alignItems: "center",
    justifyContent: "center"
  },
  body: {
    top: 30,
    position: "absolute",
    justifyContent: "center"
  },
  description: {
    textAlign: "center",
    marginBottom: 14,
    fontFamily: "chewy",
    letterSpacing: 1.2,
    fontSize: 21,
    color: "#35495e"
  },
  resultsView: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  cityView: {
    top: 40
  },
  cityImg: {
    flex: 1,
    width: 270,
    height: 270,
    resizeMode: "contain"
  },
  loader: {
    marginTop: 150
  },
  errorMessage: {
    textAlign: "center",
    marginTop: 60,
    fontFamily: "chewy",
    letterSpacing: 2,
    fontSize: 21,
    color: "red"
  }
})
