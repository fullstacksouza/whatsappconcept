import { createAppContainer } from "react-navigation";
import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Chat from "./screens/Chat";
import Call from "./screens/Call";
import Tabs from "./components/Tabs";
import Profile from "./screens/Profile";
const TabsNav = createBottomTabNavigator(
  {
    Call: Call,
    Chat: Chat,
    Profile: Profile
  },
  {
    initialRouteName: "Chat",
    tabBarComponent: props => <Tabs {...props} />,
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      style: {
        shadowColor: "transparent",
        borderBottomWidth: 0
      }
    }
  }
);
export default createAppContainer(TabsNav);
