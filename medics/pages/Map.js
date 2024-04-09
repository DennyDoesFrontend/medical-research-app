import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Mapbox, { MarkerView } from "@rnmapbox/maps";
import Information from "../components/Information";
import Search from "../components/Search";
Mapbox.setAccessToken(
  "pk.eyJ1IjoiZGVubnk5OW9naHdpdWZoZXciLCJhIjoiY2x1cW5qZXhiMDAzNjJtbzJtbzh6OGZwaCJ9.gHAHnqHn23bhwCImhSn3Zg"
);

const Map = () => {
  const [calloutVisible, setCalloutVisible] = useState(false);
  const [coordinates] = useState([-1.0232, 7.9465]); // Coordinates for Ghana

  const onMarkerPress = () => {
    setCalloutVisible(true);
  };

  const loadAnnotationGhana = () => {
    return (
      <Mapbox.PointAnnotation
        key="annotationGhana"
        id="annotationGhana"
        coordinate={coordinates}
        onSelected={onMarkerPress}
      >
        {/* Use MarkerView with background color */}
        <MarkerView
          coordinate={coordinates}
          style={[styles.marker, { backgroundColor: "palevioletred" }]}
          onPress={onMarkerPress}
        />
        {/* End of MarkerView */}

        <Mapbox.Callout
          title="Welcome to Ghana!"
          contentStyle={{ borderRadius: 5 }}
        ></Mapbox.Callout>
      </Mapbox.PointAnnotation>
    );
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map}>
          <Mapbox.Camera zoomLevel={6} centerCoordinate={coordinates} />

          <Mapbox.PointAnnotation id="ghana" coordinate={coordinates} />

          <View>{loadAnnotationGhana()}</View>
        </Mapbox.MapView>
      </View>
      <Search />
      <Information />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
  marker: {
    height: 40,
    width: 40,
    borderRadius: 20, // Make it round
  },
});
