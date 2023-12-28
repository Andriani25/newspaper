import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Pressable, Modal } from "react-native";
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
        {image === null ? (
          <Image
            style={styles.image}
            source={require("../../../assets/default.png")}
          />
        ) : (
          <Image style={styles.image} source={{ uri: image }} />
        )}
        <Text>{author}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.date}>{published}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 16,
    marginBottom: 10,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
    borderColor: "black",
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: "black",
  },
  title: {
    color: "black",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  text: {
    fontWeight: "600",
  },
  date: {
    margin: 10,
    color: "black",
    fontSize: 10,
    fontWeight: "500",
  },
});

export default DailyCard;
