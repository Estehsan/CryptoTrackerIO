import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import cryptocurrencies from "./src/data/cryptocurrencies.json";
import CoinItemComp from "./src/component/CoinItem/CoinItemComp";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cryptocurrencies}
        renderItem={({ item }) => <CoinItemComp marketcoin={item} />}
      />

      {/* <Text>Yes up App.js to start working on your app!</Text> */}

      {/* <StatusBar style="auto" /> */}
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
