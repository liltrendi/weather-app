import React from "react"
import { StyleSheet, Image } from "react-native"

import { images } from "./images"

const styles = StyleSheet.create({
  introImages: {
    width: 220,
    height: 220,
    resizeMode: "contain"
  }
})

export const Pages = [
  {
    backgroundColor: "#c9d99e",
    image: <Image source={images.coffeeImg} style={styles.introImages} />,
    title: "Weather updates",
    subtitle: "Drink hot coffee only when it's cold"
  },
  {
    backgroundColor: "#fff3af",
    image: <Image source={images.icecreamImg} style={styles.introImages} />,
    title: "Search by city",
    subtitle: "Simply enter a location to get its weather"
  },
  {
    backgroundColor: "#beeef7",
    image: <Image source={images.bikiniImg} style={styles.introImages} />,
    title: "Hooray!",
    subtitle: "Start using the weather app now"
  }
]
