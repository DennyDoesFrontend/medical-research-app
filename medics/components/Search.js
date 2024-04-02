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
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function Search(props) {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search a Location" style={styles.inputStyle} />
        <TouchableOpacity>
          <AntDesign
            style={styles.iconStyle}
            name="search1"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.suggestions}>
        <TouchableOpacity style={styles.recents}>
          <FontAwesome name="history" size={24} color="black" />
          <Text style={styles.suggestionText}>Takoradi, Western</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recents}>
          <FontAwesome name="history" size={24} color="black" />
          <Text style={styles.suggestionText}>Dansoman, Accra</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recents}>
          <FontAwesome name="history" size={24} color="black" />
          <Text style={styles.suggestionText}>Mamprobi Polyclinic</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 3,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: "grey",
    shadowOffset: {
      width: 100,
      height: 100,
    },
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  inputStyle: {
    padding: 12,
    flex: 1,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  iconStyle: {
    padding: 10,
  },
  suggestions: {
    padding: 10,
    justifyContent: "center",
  },
  suggestionText: {
    fontSize: 20,
  },
  recents: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    marginLeft: 20,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    paddingVertical: 13,
    width: "90%",
  },
});
