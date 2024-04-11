import {
  View,
  ScrollView,
  StyleSheet,
  Button,
  BackHandler,
} from "react-native";
import React from "react";
import {
  useNavigation,
  useFocusEffect,
  CommonActions,
} from "@react-navigation/native"; // Import navigation hooks
import DoctorProfile from "../components/DoctorProfile";
import Profile from "../components/Profile";
import Navigation from "../components/navigation";

function Doctors(props) {
  const navigation = useNavigation(); // Initialize navigation using useNavigation hook

  // Optionally handle back press events or other focus-related effects
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Define your back press logic here
        // For example:
        // navigation.goBack();
        return false; // Return true to indicate that the back press is handled, false otherwise
      };

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => subscription.remove();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Profile />
      <ScrollView>
        <DoctorProfile
          name="Dr.Clyde"
          message="I will administer some drugs for you. Make..."
        ></DoctorProfile>
        <DoctorProfile
          name="Dr.Abraham"
          message="I will administer some drugs for you. Make..."
        ></DoctorProfile>
        <DoctorProfile
          name="Dr.Cindy"
          message="I will administer some drugs for you. Make..."
        ></DoctorProfile>
        <DoctorProfile
          name="Dr.Wales"
          message="I will administer some drugs for you. Make..."
        ></DoctorProfile>
        <DoctorProfile
          name="Dr.Clyde"
          message="I will administer some drugs for you. Make..."
        ></DoctorProfile>
        <DoctorProfile
          name="Dr.McLean"
          message="I will administer some drugs for you. Make..."
        ></DoctorProfile>
        <DoctorProfile
          name="Dr.Washington"
          message="I will administer some drugs for you. Make..."
        ></DoctorProfile>
        <DoctorProfile
          name="Dr.Asmodeus"
          message="I will administer some drugs for you. Make..."
        ></DoctorProfile>
      </ScrollView>
      <Navigation />
    </View>
  );
}

export default Doctors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
