import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  useColorScheme,
} from "react-native";

function Header({ updateLanguage, language }) {
  const newLanguage = language === "en" ? "es" : "en";

  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightText : styles.darkText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <View style={[styles.leftContainer, themeContainerStyle]}>
        {language === "es" ? (
          <Text style={[styles.title, themeTextStyle]}>
            Change the language!
          </Text>
        ) : (
          <Text style={[styles.title, themeTextStyle]}>¡Cambia el idioma!</Text>
        )}
      </View>
      <Pressable></Pressable>
      <Pressable
        style={[styles.rightContainer, themeContainerStyle]}
        onPress={() => updateLanguage(newLanguage)}
      >
        {language === "en" ? (
          <Image
            style={[styles.image, themeContainerStyle]}
            source={require("../../../assets/españa.png")}
          />
        ) : (
          <Image
            style={[styles.image, themeContainerStyle]}
            source={require("../../../assets/usa.png")}
          />
        )}
      </Pressable>
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
    fontSize: 22,
    color: "white",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
  },
  lightContainer: {
    borderColor: "#5E683C",
  },
  darkContainer: {
    borderColor: "#E8EDF2",
  },
  lightText: {
    color: "#F0F2E8",
  },
  darkText: {
    color: "#E8EDF2",
  },
});

export default Header;
