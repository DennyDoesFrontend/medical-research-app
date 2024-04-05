import React, { useState, useEffect } from "react";
import MapView, { Circle } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import Profile from "../components/Profile";
import Search from "../components/Search";
import Information from "../components/Information";

// Function to generate random latitude and longitude within the bounds of the Ashanti Region
const generateRandomLocation = () => {
  // Bounds of the Ashanti Region
  const minLat = 6.0;
  const maxLat = 7.0;
  const minLong = -2.0;
  const maxLong = -1.0;

  // Generate random latitude and longitude
  const latitude = Math.random() * (maxLat - minLat) + minLat;
  const longitude = Math.random() * (maxLong - minLong) + minLong;

  return { latitude, longitude };
};

export default function Map() {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    // Generate 20 random circles across the Ashanti Region
    const newCircles = Array.from({ length: 20 }, (_, index) => {
      const { latitude, longitude } = generateRandomLocation();
      const radius = Math.random() * 3000 + 1000; // Random radius between 1000 and 4000 meters
      const fillColor =
        index % 3 === 0
          ? "rgba(255, 0, 0, 0.5)"
          : index % 3 === 1
          ? "rgba(255, 255, 0, 0.5)"
          : "rgba(0, 255, 0, 0.5)"; // Red, Yellow, Green colors

      return { latitude, longitude, radius, fillColor };
    });

    setCircles(newCircles);
  }, []);

  return (
    <View style={styles.container}>
      <Profile />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.5,
          longitude: -1.5,
          latitudeDelta: 1.5, // Adjust the initial zoom level as needed
          longitudeDelta: 1.5, // Adjust the initial zoom level as needed
        }}
      >
        {circles.map((circle, index) => (
          <Circle
            key={index}
            center={{ latitude: circle.latitude, longitude: circle.longitude }}
            radius={circle.radius} // radius in meters
            fillColor={circle.fillColor} // Circle color
          />
        ))}
      </MapView>

      <Search />
      <Information />
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
``;
