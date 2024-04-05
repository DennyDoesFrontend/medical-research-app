import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import React from "react";

function ReadMore({ image, heading, description, chart }) {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.mainImage} source={image} />
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.description}>{description}</Text>
      <Image style={styles.chart} source={chart} />
    </ScrollView>
  );
}

export default ReadMore;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight === 0 ? StatusBar.currentHeight : 20,
    paddingHorizontal: 10,
  },
  mainImage: {
    width: "100%",
    height: 300,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#4157FF",
  },
  description: {
    color: "grey",
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 10,
  },
  chart: {
    width: "100%",
    height: 300,
  },
});
