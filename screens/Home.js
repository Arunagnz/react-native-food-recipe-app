import React from "react";

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const username = "Arun";

const recipeData = [
  {
    id: 1,
    type: "Starter",
    image: require("../assets/grill.jpg"),
    line1: "Full Grill With",
    line2: "Eggless Mayonnaise",
    time: "45",
    serving: "4",
  },
  {
    id: 2,
    type: "Dessert",
    image: require("../assets/jamun.jpg"),
    line1: "Paneer Jamun",
    line2: "With Milk Rabdi",
    time: "60",
    serving: "6",
  },
  {
    id: 3,
    type: "Pasta",
    image: require("../assets/pasta.jpg"),
    line1: "Spaghetti With",
    line2: "Shrimp Sauce",
    time: "30",
    serving: "1",
  },
  {
    id: 4,
    type: "Local",
    image: require("../assets/meat.jpg"),
    line1: "Meat Satay With",
    line2: "Brown Sauce",
    time: "40",
    serving: "2",
  },
  {
    id: 5,
    type: "Gravy",
    image: require("../assets/drumstick.jpg"),
    line1: "Drumstick Sambar",
    line2: "With Onion Rings",
    time: "25",
    serving: "4",
  },
];

export default Home = ({ navigation }) => {
  const [user, setUser] = React.useState(null);
  const [recipes, setRecipes] = React.useState([]);
  const [term, setTerm] = React.useState(null);

  React.useEffect(() => {
    setUser(username);
    setRecipes(recipeData);
  });

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>Hello {user},</Text>
          <Text style={styles.subject}>What you want to cook today?</Text>
        </View>
        <Image source={require("../assets/avatar.jpg")} style={styles.avatar} />
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <TouchableOpacity style={styles.search}>
        <Image style={styles.icon} source={require("../assets/search.png")} />
        <TextInput
          style={styles.term}
          placeholder="Search Recipes"
          value={term}
          onChangeText={setTerm}
        ></TextInput>
      </TouchableOpacity>
    );
  };

  const renderReminder = () => {
    return (
      <View style={styles.reminder}>
        <Image style={styles.burger} source={require("../assets/burger.png")} />
        <View>
          <Text style={{ fontSize: 15 }}>You have 12 recipes that</Text>
          <Text style={{ fontSize: 15 }}>you haven't tried yet</Text>
          <Text style={styles.link}>See Recipes</Text>
        </View>
      </View>
    );
  };

  const renderTrendingRecipe = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ marginRight: 30 }}
          onPress={() =>
            navigation.navigate("Recipe", {
              item,
            })
          }
        >
          <Image style={styles.recipe} source={item.image} />
          <LinearGradient
            colors={["#262626", "transparent", "#262626"]}
            style={styles.background}
          />
          <Text style={styles.type}>{item.type}</Text>
          <View style={styles.title}>
            <Text
              style={{
                color: "white",
                marginTop: 10,
                marginLeft: 15,
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              {item.line1}
            </Text>
            <Text
              style={{
                color: "white",
                marginLeft: 15,
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              {item.line2}
            </Text>
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                bottom: 15,
                left: 15,
              }}
            >
              <Text style={{ color: "white" }}>{item.time} Mins | </Text>
              <Text style={{ color: "white" }}>{item.serving} Serving</Text>
            </View>
            <Image
              style={{
                position: "absolute",
                height: 20,
                width: 20,
                tintColor: "#29947C",
                right: 15,
                top: 15,
              }}
              source={require("../assets/bookmark.png")}
            />
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View>
        <Text style={styles.trending}>Trending Recipe</Text>
        <FlatList
          data={recipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingLeft: 30,
            paddingRight: -30,
            marginTop: 15,
          }}
        />
      </View>
    );
  };

  const renderCategory = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.trending}>Categories</Text>
        <TouchableOpacity
          style={{
            fontSize: 15,
            paddingRight: 30,
            paddingTop: 30,
          }}
        >
          <Text style={{ color: "gray" }}>View All</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderSearch()}
      {renderReminder()}
      {renderTrendingRecipe()}
      {renderCategory()}
      <StatusBar barStyle={"dark-content"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  name: {
    paddingLeft: 18,
    color: "#29947C",
    fontSize: 25,
    fontWeight: "bold",
  },
  subject: {
    paddingLeft: 18,
    color: "gray",
    fontSize: 18,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  search: {
    backgroundColor: "#F6F7FC",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 35,
    marginTop: 20,
    flexDirection: "row",
  },
  icon: {
    resizeMode: "cover",
    padding: 10,
    height: 20,
    width: 20,
    tintColor: "gray",
  },
  term: {
    flex: 7,
    marginLeft: 20,
    color: "black",
    fontSize: 15,
  },
  reminder: {
    flexDirection: "row",
    backgroundColor: "#EDF8F1",
    marginHorizontal: 35,
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
  },
  burger: {
    resizeMode: "cover",
    height: 55,
    width: 55,
    marginRight: 25,
  },
  link: {
    color: "#29947C",
    paddingTop: 8,
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 15,
  },
  trending: {
    fontSize: 22,
    fontWeight: "500",
    paddingLeft: 30,
    paddingTop: 30,
  },
  recipe: {
    resizeMode: "cover",
    height: 400,
    width: 250,
    borderRadius: 10,
  },
  type: {
    position: "absolute",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    marginLeft: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  title: {
    left: 20,
    bottom: 20,
    right: 20,
    height: 120,
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    borderRadius: 10,
  },
});
