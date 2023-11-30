import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/logomiercoles.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flexGrow: 50,
  },
  rightContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 30,
    color: "white",
  },
  image: {
    width: 80,
    height: 70,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 2,
  },
});

export default Header;
