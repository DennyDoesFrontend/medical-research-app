import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function DoctorProfile({ name, message }) {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={require("../assets/images/profile.png")} />
        <View>
          <Text style={styles.heading}>{name}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
      </View>
    </View>
  );
}

export default DoctorProfile;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    elevation: 4,
    width: "98%",
    height: 100,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 12,
    marginTop: 10,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
