import React from "react";

import { SafeAreaView, StyleSheet, Text } from "react-native";

export default Recipe = ({ route, navigation }) => {
  const [recipe, setRecipe] = React.useState({});

  React.useEffect(() => {
    setRecipe(route.params.item);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text>{recipe.line1}</Text>
      <Text>{recipe.line2}</Text>
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
