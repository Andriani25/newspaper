import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import newsCountry from "../../api/fetchCountry";

function Home() {
  const [country, setCountry] = useState("us");

  useEffect(() => {
    const loadTodaysFetch = async () => {
      try {
        const todaysFetch = await newsCountry(country);
      } catch (error) {
        console.log(error);
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
    paddingTop: 25,
    paddingHorizontal: 25,
  },
});

export default Home;
