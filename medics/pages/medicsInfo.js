import { ScrollView, View } from "react-native";
import ReadMore from "../components/ReadMore";
import React from "react";
import Navigation from "../components/navigation";

function MedicsInfo() {
  return (
    <View>
      <ScrollView>
        <ReadMore
          image={require("../assets/srcImages/medics.jpg")}
          heading="Medical Research Analysis for Malaria"
          description="Malaria is one of the greatest threats to human health worldwide. Over 95% of the 228 million cases reported worldwide in 2021 occurred in Africa. An accurate and timely diagnosis can prevent death and reduce transmission.
          AI has the potential to improve the sustainability, accuracy, and accessibility of good healthcare. 
          The goal of the research is to address the endemic of malaria by gathering data and implementing AI Health technology.
"
          chart={require("../assets/srcImages/malariastats.png")}
        />
      </ScrollView>
      <Navigation />
    </View>
  );
}

export default MedicsInfo;
