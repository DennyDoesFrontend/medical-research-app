import { StyleSheet, Text, View } from "react-native";
import Login from "./pages/login";
import Home from "./pages/home";
import CameraScreen from "./pages/camera";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chatbot from "./pages/Chatbot";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="login" component={Login}></stack.Screen>
        <stack.Screen name="home" component={Home}></stack.Screen>
        <stack.Screen name="camera" component={CameraScreen}></stack.Screen>
        <stack.Screen name="Chat" component={Chatbot} />
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
