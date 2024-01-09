import React, { FC } from "react";
import { DataFetch } from "../../types";
import { View, ScrollView, StyleSheet, useColorScheme } from "react-native";
import SimpleCard from "../SimpleCard";

const CountryCard: FC<{ countryItems: DataFetch[] }> = function ({
  countryItems,
}) {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <ScrollView style={[styles.content, themeContainerStyle]}>
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
    marginTop: 16,
    marginBottom: 10,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
    borderWidth: 2,
  },
  lightContainer: {
    backgroundColor: "#97A564",
    borderColor: "#5E683C",
  },
  darkContainer: {
    borderColor: "#E8EDF2",
    backgroundColor: "#506C8B",
  },
  content: {
    paddingHorizontal: 8,
  },
});

export default CountryCard;
