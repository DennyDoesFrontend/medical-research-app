import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import React from "react";

function ImagePreview({ image, style, onRetakePress, onScanPress }) {
  return (
    <View style={style}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onScanPress}>
          <Icon name="magnify-scan" size={35} color={"#fff"} />
          <Text style={styles.text}>Scan Blood</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onRetakePress}>
          <Icon name="camera-retake-outline" size={35} color={"#fff"} />
          <Text style={styles.text}>Retake</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ImagePreview;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    flex: 0.8,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    marginLeft: 10,
  },
});
