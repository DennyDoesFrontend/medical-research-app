import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import Login from "./pages/login";
import Profile from "./components/Profile";
import Navigation from "./components/navigation";
import Home from "./pages/home";

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
      <Home />
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "#F0F2FF",
  },
});
