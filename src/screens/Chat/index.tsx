import React from "react";
import { View, Text } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Stories from "../../components/Stories";
import ChatList from "../../components/ChatList";
// import { Container } from './styles';

export default function Chat() {
  return (
    <SafeAreaView style={{ flex: 100 }}>
      <View style={{ margin: 20, flex: 100 }}>
        <Stories />
        <ChatList />
      </View>
    </SafeAreaView>
  );
}
