import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// import { Container } from './styles';

export default function Stories(props) {
  const stories = [1, 2, 3, 4, 5, 6];

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "#000000", fontSize: 20, fontWeight: "bold" }}>
          Stories
        </Text>
        <MaterialIcons name="more-horiz" size={40} color="#000000" />
      </View>
      <View>
        <FlatList
          horizontal={true}
          data={stories}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <View key={item}>
              <Image
                style={{ width: 60, height: 60, borderRadius: 10 }}
                source={{
                  uri:
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                }}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}
