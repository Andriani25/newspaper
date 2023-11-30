import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Home from "./src/views/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f08080",
  },
});
