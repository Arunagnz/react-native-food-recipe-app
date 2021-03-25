import React from "react";

import { SafeAreaView, StyleSheet, Text } from "react-native";

export default Recipe = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Recipe</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
