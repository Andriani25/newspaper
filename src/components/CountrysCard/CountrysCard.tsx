import React, { FC } from "react";
import { DataFetch } from "../../types";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import DailyCard from "../DailyCard";

const CountryCard: FC<{ countryItems: DataFetch[]; country: string }> =
  function ({ countryItems }, country: string) {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          {countryItems?.map((items: DataFetch) => (
            <DailyCard key={items.title} {...items} />
          ))}
        </ScrollView>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 1,
  },
  content: {
    paddingHorizontal: 24,
  },
});

export default CountryCard;
