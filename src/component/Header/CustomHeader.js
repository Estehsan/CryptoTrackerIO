import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

const CustomHeader = ({ image, name, market_data, symbol }) => {
  return (
    <View style={styles.Header}>
      <Ionicons name="caret-back" size={24} color="white" />
      <View style={styles.Center}>
        <Text style={{ color: "white", fontWeight: "bold" }}>{name}</Text>
        <Text
          style={{ color: "red", paddingHorizontal: 10, fontWeight: "bold" }}>
          #{market_data.market_cap_rank}
        </Text>
        <Image
          source={{ uri: image.small }}
          style={{ height: 20, width: 20 }}
        />
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Center: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
});
