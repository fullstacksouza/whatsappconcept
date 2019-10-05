import React from "react";
import { View, Text } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Stories from "../../components/Stories";
// import { Container } from './styles';

export default function Chat() {
  return (
    <SafeAreaView>
      <View style={{ margin: 20 }}>
        <Stories />
      </View>
    </SafeAreaView>
  );
}
