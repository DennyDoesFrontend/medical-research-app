import { View, Text, StyleSheet, Image } from "react-native";

import React from "react";

function doctorProfile(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/profile.png")}></Image>
      <View>
        <Text style={styles.heading}>Dr. Hamish Mutar</Text>
        <Text style={styles.text}>International Institute of Medicine</Text>
      </View>
    </View>
  );
}

export default doctorProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 300,
    marginLeft: 30,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
  },
  heading: {
    color: "#4157FF",
    fontWeight: "bold",
  },
});
