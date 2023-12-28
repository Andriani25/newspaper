import React, { FC } from "react";
import { DataFetch } from "../../types";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import DailyCard from "../DailyCard";
import SimpleCard from "../SimpleCard";

const CountryCard: FC<{ countryItems: DataFetch[]; country: string }> =
  function ({ countryItems }, country: string) {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          {countryItems?.map((items: DataFetch) => (
            <SimpleCard key={items.title} {...items} />
          ))}
        </ScrollView>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 16,
    marginBottom: 10,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
    borderColor: "black",
    borderWidth: 2,
  },
  content: {
    paddingHorizontal: 8,
  },
});

export default CountryCard;
