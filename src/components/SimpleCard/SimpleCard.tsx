import React, { FC, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from "react-native";
import { DataFetch } from "../../types";

const SimpleCard: FC<DataFetch> = function ({
  title,
  published,
  image,
  author,
  description,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const themeTextStyle =
    colorScheme === "light" ? styles.lightText : styles.darkText;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={[styles.title, themeTextStyle]}>{title}</Text>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <View style={[styles.modalContainer, themeContainerStyle]}>
          <ScrollView style={themeContainerStyle}>
            {image ? (
              <Image style={styles.image} source={{ uri: image }} />
            ) : (
              <Image
                style={styles.image}
                source={require("../../../assets/default.png")}
              />
            )}
            <Text style={[styles.title, themeTextStyle]}>
              Author = {""}
              {author?.includes("<") ? (author = "Autor Desconocido") : author}
            </Text>
            <Text style={[styles.text, themeTextStyle]}>{description}</Text>
            <Text style={[styles.date, themeTextStyle]}>{published}</Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <Image
                style={[{ height: 25, width: 25 }]}
                source={require("../../../assets/backarrow.png")}
              />
            </Pressable>
          </ScrollView>
        </View>
      </Modal>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={{ color: "white" }}>...</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    borderColor: "#232716",
    backgroundColor: "#97A564",
  },
  darkContainer: {
    borderColor: "#E8EDF2",
    backgroundColor: "#506C8B",
  },
  lightText: { color: "#F0F2E8" },
  darkText: { color: "#E8EDF2" },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  },
  date: {
    fontSize: 10,
    fontWeight: "600",
    margin: 10,
  },
  button: {
    alignItems: "center",
    width: 20,
    height: 31,
    borderRadius: 10,
    borderWidth: 1,
  },
  backButton: {
    width: 65,
    height: 30,
    borderRadius: 8,
    borderWidth: 1,
  },
  modalContainer: {
    justifyContent: "center",
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderWidth: 1,
    borderRadius: 32,
  },
});

export default SimpleCard;
