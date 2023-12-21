import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { DataFetch } from "../../types";

const DailyCard: FC<DataFetch> = function ({
  image,
  url,
  title,
  author,
  description,
  published,
}) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: image }} alt={"LOL"} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{published}</Text>
        <View style={styles.buttonContainer}>
          <Button title={"View"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
    borderColor: "black",
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: 185,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: "black",
  },
  button: {},
  title: {
    color: "black",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "black",
    fontSize: 10,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});

export default DailyCard;
