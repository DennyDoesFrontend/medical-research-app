import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import React from "react";

function Profile(props) {
  return (
    <View style={styles.profile}>
      <View style={styles.smContainer}>
        <Image source={require("../assets/images/profile.png")}></Image>
        <Text style={styles.text}>Hi, User</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="notifications-outline" size={24} color="white" />
        <Feather name="settings" size={24} color="white" />
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  profile: {
    backgroundColor: "#4157FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  smContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 20,
  },
});
