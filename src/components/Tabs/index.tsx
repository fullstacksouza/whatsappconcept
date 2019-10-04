import React, { useEffect } from "react";
import { View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
// import { Container } from './styles';

export default function Tabs(props) {
  const { routes } = props.navigation.state;
  useEffect(() => {
    console.log(routes);
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
      {routes.map(route => (
        <View
          key={route.key}
          style={{
            backgroundColor: route.key == "Chat" ? "#0086fd" : "#FFFF",
            borderRadius: 62,
            width: 70,
            height: 65,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Ionicons name={getIcon(route.key)} size={35} color="#c3c5c6" />
        </View>
      ))}
    </View>
  );
}
