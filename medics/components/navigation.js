import { View, Text, Image, StyleSheet } from "react-native";

import React from "react";

function Navigation(props) {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={require("../assets/images/home.png")}
        ></Image>
        <Image
          style={styles.icon}
          source={require("../assets/images/camera.png")}
        ></Image>
        <Image
          style={styles.icon}
          source={require("../assets/images/location.png")}
        ></Image>
        <Image
          style={styles.icon}
          source={require("../assets/images/chat.png")}
        ></Image>
      </View>
    </View>
  );
}

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    backgroundColor: "white",
  },
});
