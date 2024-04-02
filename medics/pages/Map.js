import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import Navigation from "../components/navigation";
import Profile from "../components/Profile";
import Search from "../components/Search";
export default function Map() {
  return (
    <View style={styles.container}>
      <Profile />
      <MapView
        style={styles.map}
        // setting location with latitudes & longitudes
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
  map: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
  },
});
