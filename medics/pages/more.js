import { ScrollView, View } from "react-native";
import ReadMore from "../components/ReadMore";
import React from "react";
import Navigation from "../components/navigation";

function More() {
  return (
    <View>
      <ScrollView>
        <ReadMore
          image={require("../assets/srcImages/malaria.jpg")}
          heading="Malaria Outbreaks in Ghana"
          description="Malaria is endemic and transmission is perennial in Ghana; there are pronounced seasonal variations in the northern part of the country. There are two distinct rainy seasons in the southern and middle parts of the country, from April to June and September to November. The northern part however has one rainfall season that begins in May, peaks in August, and lasts until September. There is a six-to-seven-month transmission period in a larger part of the northern part of the country and a shorter three-to-four-month transmission season in the upper part of the north. Peak vector abundance in the north is typically from June through October, but this tends to be limited to August and September in those areas where IRS is implemented. The highest number of malaria cases also occur between July and November."
          chart={require("../assets/srcImages/malariastats.png")}
        />
      </ScrollView>
      <Navigation />
    </View>
  );
}

export default More;
