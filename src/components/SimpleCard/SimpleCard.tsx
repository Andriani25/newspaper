import React, { FC, useState } from "react";
import { View, Text, Image, Pressable, Modal, StyleSheet } from "react-native";
import { DataFetch } from "../../types";

const SimpleCard: FC<DataFetch> = function ({
  title,
  published,
  url,
  image,
  author,
  description,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <Image style={styles.image} source={{ uri: image }} />
          <Text style={styles.text}>{description}</Text>
          <Text style={styles.date}>{published}</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styles.backButton}>←</Text>
          </Pressable>
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
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  date: {
    fontSize: 10,
    fontWeight: "600",
  },
  button: {
    alignItems: "center",
    width: 20,
    height: 31,
    backgroundColor: "red",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  backButton: {
    width: 65,
    height: 30,
    backgroundColor: "red",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
  },
  modalContainer: {
    justifyContent: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: "black",
  },
});

export default SimpleCard;
