import React, { useEffect } from "react";
import { View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
// import { Container } from './styles';

export default function Tabs(props) {
  const { routes } = props.navigation.state;
  const { navigation } = props;
  useEffect(() => {
    console.log(navigation);
  }, []);
  const getIcon = routeName => {
    switch (routeName) {
      case "Chat":
        return "ios-chatbubbles";
      case "Call":
        return "ios-call";
      case "Profile":
        return "md-person";
    }
  };
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 20
      }}
    >
      {routes.map((route, index) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(route.routeName)}
          key={route.key}
          style={{
            backgroundColor:
              navigation.state.index == index ? "#8d3dc8" : "#FFFF",
            borderRadius: 62,
            width: 70,
            height: 70,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Ionicons
            name={getIcon(route.key)}
            size={35}
            color={navigation.state.index == index ? "#ffffff" : "#c3c5c6"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
