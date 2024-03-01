import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  useColorScheme,
  Linking,
} from "react-native";
import { DataFetch } from "../../types";

const DailyCard: FC<DataFetch> = function ({
  image,
  title,
  author,
  description,
  url,
  published,
}) {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const themeTextStyle =
    colorScheme === "light" ? styles.lightText : styles.darkText;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <ScrollView>
        {image ? (
          <Image
            style={[styles.image, themeContainerStyle]}
            source={{ uri: image }}
          />
        ) : (
          <Image
            style={styles.image}
            source={require("../../../assets/default.png")}
          />
        )}
        <Text style={[styles.text, themeTextStyle]}>
          Author ={" "}
          {author?.includes("<") ? (author = "Autor Desconocido") : author}
        </Text>
        <Text style={[styles.title, themeTextStyle]}>{title}</Text>
        <Text style={[styles.text, themeTextStyle]}>{description}</Text>
        <Button color="white" title="🔎" onPress={() => Linking.openURL(url)} />
        <Text style={[styles.date, themeTextStyle]}>{published}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 500,
    marginTop: 16,
    marginBottom: 10,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
    borderWidth: 2,
  },
  lightContainer: {
    borderColor: "#5E683C",
    backgroundColor: "#97A564",
  },
  darkContainer: {
    borderColor: "#E8EDF2",
    backgroundColor: "#506C8B",
  },
  lightText: { color: "#F0F2E8" },
  darkText: { color: "#E8EDF2" },
  image: {
    width: "100%",
    height: 200,
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
    fontSize: 15,
    margin: 10,
  },
  date: {
    margin: 10,
    color: "black",
    fontSize: 10,
    fontWeight: "500",
  },
  button: {
    height: 100,
    width: 100,
  },
});

export default DailyCard;
