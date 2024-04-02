import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  BackHandler
} from "react-native";
import React from "react";
import { useNavigation, useFocusEffect, CommonActions } from "@react-navigation/native"; // Import useNavigation hook
import Post from "../components/Post";
import Navigation from "../components/navigation";
import Profile from "../components/Profile";

import NavigationService from "../services/RootNavigation";

function Home(props) {
  const navigation = useNavigation(); // Initialize navigation using useNavigation hook

  useFocusEffect(
    React.useCallback(() => {

      const routes = navigation.getState()?.routes
      const previousRoute = routes[routes.length - 2]?.name

      const onBackPress = () => {
        if (previousRoute === 'camera') {
          const handleCameraResetNav = () => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  { name: "camera" }
                ],
              })
            )
          }
          handleCameraResetNav()
          return true
        }
        return false
      }

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress)

      return () => subscription.remove()
    },[])
  )

  return (
    <View style={styles.mainContainer}>
      <Profile />
      <ScrollView style={styles.container}>
        <Post
          title="Malaria Outbreak kills 200"
          description="Malaria outbreak takes the life of 200 children in ..."
          imgSource={require("../assets/srcImages/malaria.jpg")}
        />
        <Post
          title="Malaria Outbreak kills 200"
          description="Malaria outbreak takes the life of 200 children in ..."
          imgSource={require("../assets/srcImages/ghana.jpg")}
        />
        <Post
          title="Malaria Outbreak kills 200"
          description="Malaria outbreak takes the life of 200 children in ..."
          imgSource={require("../assets/srcImages/malaria.jpg")}
        />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("login")} // Use navigation prop
        />
      </ScrollView>
      <Navigation />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
});
