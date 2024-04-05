import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
function Search(props) {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search For a Place or Location"></TextInput>
      <MaterialIcons name="search" size={24} color="black" />
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    position: "absolute",
    top: 120,
    right: 10,
    zIndex: 3,
    backgroundColor: "white",
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
