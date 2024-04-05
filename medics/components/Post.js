import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

function Post({ imgSource, title, description }) {
  const navigation = useNavigation(); // Call useNavigation() to get the navigation object

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imgSource}></Image>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("More")}
        style={styles.button}
      >
        <Text>Read More</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Post;

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: "white",
    marginHorizontal: 3,
    marginTop: 5,
    gap: 5,
  },
  image: {
    width: "100%",
    height: 300,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#4157FF",
  },
  description: {
    color: "grey",
    fontSize: 15,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "lightseagreen",
    width: 100,
    alignItems: "center",
    padding: 7,
    borderRadius: 4,
  },
});
