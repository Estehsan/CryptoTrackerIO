import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import Home from "./src/screens/Home";
import CoinDetailScreen from "./src/screens/CoinDetailScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Home /> */}
      <CoinDetailScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 40,
  },
});
