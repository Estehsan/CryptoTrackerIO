import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomHeader from "./../component/Header/CustomHeader";
import crypto from "./../data/crypto.json";

const CoinDetailScreen = () => {
  const { image, name, market_data, symbol } = crypto;

  return (
    <View>
      <CustomHeader
        image={image}
        name={name}
        market_data={market_data}
        symbol={symbol}
      />
      <View style={styles.PriceContainer}>
        <View style={styles.PriceLeft}>
          <Text style={{ color: "white", fontSize: "20" }}>{name}</Text>
          <Text style={{ color: "white", fontSize: "20", fontWeight: "bold" }}>
            ${market_data.current_price.usd}
          </Text>
        </View>
        <View style={styles.PriceRight}>
          <Text style={{ color: "white", fontSize: "20" }}>
            {market_data.market_cap.usd}
          </Text>
          <Text style={{ color: "white", fontSize: "20" }}>
            {market_data.percent_change_1h}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CoinDetailScreen;

const styles = StyleSheet.create({
  PriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
