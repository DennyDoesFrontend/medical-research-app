import { BackHandler, StyleSheet, Text, View } from "react-native";
import Login from "./pages/login";
import Home from "./pages/home";
import Map from "./pages/Map";
import CameraScreen from "./pages/camera";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderBackButton } from "@react-navigation/elements";
import NavigationService, { navigationRef } from "./services/RootNavigation";
import Chatbot from "./pages/Chatbot";
import React from "react";
import More from "./pages/more";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar style="auto" />
      <stack.Navigator
        screenOptions={{
          headerShown: false,
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => NavigationService.handleBackNavigation()}
            />
          ),
        }}
      >
        <stack.Screen name="login" component={Login}></stack.Screen>
        <stack.Screen name="home" component={Home}></stack.Screen>
        <stack.Screen name="camera" component={CameraScreen}></stack.Screen>
        <stack.Screen name="Map" component={Map}></stack.Screen>
        <stack.Screen name="More" component={More}></stack.Screen>
        <stack.Screen
          name="Chat"
          component={Chatbot}
          options={{
            headerShown: true,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "#F0F2FF",
  },
});
