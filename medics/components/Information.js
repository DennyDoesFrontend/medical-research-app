import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import React from "react";

function Information(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <MaterialIcons name="location-city" size={24} color="black" />
        <Text style={styles.heading}>Kumasi</Text>
      </View>
      <View style={styles.casesContainer}>
        <View style={styles.cases}>
          <MaterialIcons name="nature-people" size={24} color="black" />
          <Text style={styles.cases}>Recorded Cases: 140</Text>
        </View>
        <View style={styles.cases}>
          <AntDesign name="exclamationcircle" size={24} color="red" />
          <Text>Danger Level: Very High</Text>
        </View>
        <View style={styles.cases}>
          <MaterialIcons name="medical-services" size={24} color="blue" />
          <Text>Priority: High</Text>
        </View>
      </View>
    </View>
  );
}

export default Information;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    padding: 20,
    elevation: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
  },
  cases: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
});
