import React from "react";

import { Image, TouchableOpacity, View } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { isIphoneX } from "react-native-iphone-x-helper";

import { Home } from "../screens";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            height: 40,
            backgroundColor: "white",
          }}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 15,
            right: 15,
            height: 5,
            backgroundColor: "#29947C",
            marginVertical: 3,
            borderRadius: 3,
          }}
        ></View>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 40,
          backgroundColor: "white",
        }}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

const CustomTabBar = (props) => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: "white",
          }}
        ></View>
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};

export default Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          borderTopWidth: 0,
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
      tabBar={(props) => <CustomTabBar props={props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/home.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#29947C" : "gray",
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/search.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#29947C" : "gray",
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Favourite"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/bookmark.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#29947C" : "gray",
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/settings.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#29947C" : "gray",
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};
