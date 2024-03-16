import { Text, View, Image, StyleSheet } from "react-native";

import React from "react";
import DoctorProfile from "../components/doctorProfile";
import AiIntro from "../components/AiIntro";

function Home(props) {
  return (
    <View>
      <View style={styles.blueContainer}>
        <Image source={require("../assets/images/camera2.png")}></Image>
        <View>
          <Text style={styles.alertText}>ALERT!</Text>
          <Text style={styles.info}>Introducing our new technology</Text>
          <Text style={styles.info}>
            {" "}
            which allows you to scanblood samples
          </Text>
          <Text style={styles.info}> straight from your mobile device.</Text>
        </View>
      </View>
      <Text style={styles.heading}>MALARIA ANALYSIS REPORT</Text>
      <View style={styles.reports}>
        <View style={styles.report}>
          <Text style={styles.subHeading}>
            Malaria Outbreak Kills 324 children
          </Text>
          <Text style={styles.infoText}>
            Lorem ipsum dolor sit amet consectetur
          </Text>
          <Text style={styles.infoText}>
            adipiscing elit. Suspendisse enim neque
          </Text>
          <Text style={styles.infoText}>
            Lorem ipsum dolor sit amet consectetur
          </Text>
          <Text style={styles.infoText}>
            adipiscing elit. Suspendisse enim neque
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.heading}>CONNECT WITH OUR DOCTORS!</Text>
        <View style={styles.doctors}>
          <DoctorProfile />
          <DoctorProfile />
        </View>
      </View>
      <Text style={styles.heading}>MEET OUR AI DOCTOR, CLYDE! 0</Text>
      <AiIntro />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  blueContainer: {
    backgroundColor: "#4157FF",
    flexDirection: "row",
    marginHorizontal: 30,
    paddingHorizontal: 5,
    paddingVertical: 20,
    alignItems: "center",
    gap: 20,
    borderRadius: 10,
  },
  alertText: {
    color: "#FFC107",
    fontWeight: "bold",
    fontSize: 20,
  },
  info: {
    color: "white",
    fontSize: 15,
  },
  heading: {
    marginLeft: 30,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: 16,
    color: "#4157FF",
    fontWeight: "bold",
  },
  report: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 30,
    width: 280,
  },
  reports: {
    flexDirection: "row",
  },
  infoText: {
    color: "grey",
    fontWeight: "bold",
  },
});
