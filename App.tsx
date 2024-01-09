import { StyleSheet, View, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import Home from "./src/views/Home";

export default function App() {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: "#C3CBA4",
  },
  darkContainer: {
    backgroundColor: "#2B3A4A",
  },
});
