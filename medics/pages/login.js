import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/login.png")}
      ></Image>
      <View style={styles.absolute}>
        <Text style={styles.title}>Research Analysis Report</Text>
        <View style={styles.smContainer}>
          <Text style={styles.login}>Login/Sign up</Text>
          <View style={styles.loginContainer}>
            <Image source={require("../assets/images/google.png")}></Image>
            <TouchableOpacity>
              <Text
                style={styles.button}
                onPress={() => navigation.navigate("home")}
              >
                Continue With Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F78FF",
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  absolute: {
    position: "absolute",
    backgroundColor: "#F0F6FF",
    width: "100%",
    height: "50%",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 70,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
  login: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  smContainer: {
    gap: 15,
  },
  button: {
    color: "black",
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "white",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 12,
  },
});
