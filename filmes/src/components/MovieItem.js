import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default (props) => {
  return (
    <View style={styles.movie}>
      <Image
        source={{uri: props.imgPath}}
        defaultSource={require("../img/placeholder.png")}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100+"%",
    height: 100+"%",
    borderWidth: 0,
    borderRadius: 4,
  },
  movie: {
    width: 100,
    height: 140,
    marginStart: 12,
    marginTop: 12,
    borderWidth: 0,
    borderRadius: 4,
    backgroundColor: "#353535",
  },
});