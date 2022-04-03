import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CoinItemComp from "../component/CoinItem/CoinItemComp";
import cryptocurrencies from "./../data/cryptocurrencies.json";

const Home = () => {
  return (
    <FlatList
      data={cryptocurrencies}
      renderItem={({ item }) => <CoinItemComp marketcoin={item} />}
    />
  );
};

export default Home;

const styles = StyleSheet.create({});
