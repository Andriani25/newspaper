import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import newsCountry from "../../api/fetchCountry";
import newsDaily from "../../api/fetchDaily";
import DailyCard from "../../components/DailyCard";
import { DataFetch } from "../../types";

let topics = ["bitcoin", "economy", "global", "AI", "war"];

function getRandomIntInclusive(min, max) {
  var jajaa = max - min + 1;

  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Home() {
  const [country, setCountry] = useState("us");
  const [todaysItems, setTodaysItems] = useState<DataFetch>({});
  const [countrysItems, setCountrysItems] = useState({});

  useEffect(() => {
    const loadDailysFetch = async () => {
      try {
        const todaysFetch = await newsDaily();
        setTodaysItems(todaysFetch.news[0]);
        console.log(todaysFetch.news[0]);
      } catch (error) {
        console.error("ERROR DE DAILY", error);
        setTodaysItems({});
      }
    };

    const loadCountrysFetch = async () => {
      try {
        const countrysFetch = await newsCountry(country);
        // console.log("COUNTRY", countrysFetch);
      } catch (error) {
        console.error("ERROR DE COUNTRY", error);
      }
    };

    loadDailysFetch().catch(null);

    loadCountrysFetch().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <DailyCard {...todaysItems} />
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
