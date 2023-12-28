import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import newsCountry from "../../api/fetchCountry";
import newsDaily from "../../api/fetchDaily";
import DailyCard from "../../components/DailyCard";
import CountryCard from "../../components/CountrysCard";
import { DataFetch } from "../../types";

function Home() {
  const [country, setCountry] = useState("us");
  const [todaysItems, setTodaysItems] = useState<DataFetch>({});
  const [countryItems, setCountryItems] = useState<DataFetch[]>([]);

  useEffect(() => {
    const loadDailysFetch = async () => {
      try {
        const todaysFetch = await newsDaily();
        setTodaysItems(todaysFetch.news[0]);
      } catch (error) {
        console.error("ERROR DE DAILY", error);
        setTodaysItems({});
      }
    };

    const loadCountrysFetch = async () => {
      try {
        const countryFetch = await newsCountry(country);
        setCountryItems(countryFetch.news);
      } catch (error) {
        console.error("ERROR DE COUNTRY", error);
        setCountryItems([]);
      }
    };

    loadDailysFetch().catch(null);

    loadCountrysFetch().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <DailyCard {...todaysItems} />
      <CountryCard countryItems={countryItems} country={country} />
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
