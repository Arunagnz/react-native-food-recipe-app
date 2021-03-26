import React from "react";

import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/welcome.jpg")}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={["transparent", "black"]}
        style={styles.background}
      />
      <SafeAreaView style={styles.main}>
        <View style={{ marginTop: 400 }}>
          <Text style={styles.title}>Cooking a</Text>
          <Text style={styles.title}>Delicious Food</Text>
          <Text style={styles.title}>Easily</Text>
        </View>
        <View style={{ paddingTop: 5 }}>
          <Text style={styles.description}>Discover more than 1200 food</Text>
          <Text style={styles.description}>
            recipes in your hands and cooking
          </Text>
          <Text style={styles.description}>it easily!</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signup}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar barStyle={"light-content"} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
  },
  main: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    paddingLeft: 30,
    paddingTop: 5,
  },
  description: {
    color: "white",
    fontSize: 18,
    paddingLeft: 30,
    paddingTop: 5,
  },
  login: {
    padding: 20,
    backgroundColor: "#3ECB98",
    marginVertical: 20,
    marginHorizontal: 30,
    borderRadius: 20,
    alignItems: "center",
  },
  signup: {
    padding: 20,
    borderColor: "#3ECB98",
    borderWidth: 2,
    marginHorizontal: 30,
    borderRadius: 20,
    alignItems: "center",
  },
});
