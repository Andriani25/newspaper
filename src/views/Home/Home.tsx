import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import newsCountry from "../../api/fetchCountry";

let topics = ["bitcoin", "economy", "global", "AI", "war"];

function getRandomIntInclusive(min, max) {
  var jajaa = max - min + 1;

  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Home() {
  const [country, setCountry] = useState("us");

  useEffect(() => {
    const loadTodaysFetch = async () => {
      try {
        const todaysFetch = await newsCountry(country);
      } catch (error) {
        console.error("ERROR DEHOME", error);
      }
    };

    loadTodaysFetch().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 25,
  },
});

export default Home;
