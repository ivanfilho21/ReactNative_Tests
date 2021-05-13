import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../img/logo.png")}
        style={styles.logoImg}
        resizeMode="center"
      />
      <Text style={styles.title}>Movies</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#252525",
  },
  title: {
    marginStart: 12,
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white"
  },
  logoImg: {
    width: 48,
    height: 48,
  },
});