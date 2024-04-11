import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

function Navigation() {
  const navigation = useNavigation();

  const handleReset = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "camera" }],
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("home")}
        style={styles.iconContainer}
      >
        <Feather name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset} style={styles.iconContainer}>
        <Feather name="camera" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Map")}
        style={styles.iconContainer}
      >
        <Feather name="map-pin" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate("Chat")}
      >
        <Feather name="message-circle" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate("Doctors")}
      >
        <FontAwesome6 name="user-doctor" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    height: 50,
    backgroundColor: "white",
    borderTopWidth: 1, // Add a border to distinguish from the content
    borderColor: "#ccc", // Border color
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0, // Adjust to fill the entire width
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flex: 1,
  },
});

export default Navigation;
