import { View, Text, Image, StyleSheet } from "react-native";

import React from "react";

function AiIntro(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/prof.png")}
      ></Image>
      <View>
        <Text style={styles.text}>Built on top of Google's AI</Text>
        <Text style={styles.text}>Gemini, Clyde is your go to AI</Text>
        <Text style={styles.text}>doctor for all your malaria related</Text>
        <Text style={styles.text}>health issues.</Text>
        <Text style={styles.chat}>Chat with Gemini</Text>
      </View>
    </View>
  );
}

export default AiIntro;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 10,
    gap: 10,
  },
  text: {
    color: "grey",
    fontWeight: "bold",
  },
  chat: {
    backgroundColor: "blue",
    width: 120,
    color: "white",
    textAlign: "center",
    padding: 5,
  },
});
