import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// import { Container } from './styles';

export default function ChatList() {
  const users = [
    {
      id: 1,
      name: "User1",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    },
    {
      id: 2,
      name: "User2",
      image:
        "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=515&q=80"
    },
    {
      id: 3,
      name: "User1",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    },
    {
      id: 4,
      name: "User1",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    },
    {
      id: 5,
      name: "User1",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    },
    {
      id: 6,
      name: "User1",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    },
    {
      id: 7,
      name: "User1",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    },
    {
      id: 8,
      name: "User1",
      image:
        "https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    }
  ];
  const chatList = [1, 2, 3, 4, 5];
  const renderMessage = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1
        }}
      >
        <View
          style={{
            margin: 7,
            width: 80,
            height: 80,
            borderRadius: 80 / 2,
            padding: 1
          }}
        >
          <Image
            style={{
              margin: 1,
              width: 70,
              height: 70,
              borderRadius: 70 / 2,
              overflow: "hidden"
              //   borderWidth: 1,
              //   borderColor: "#fff"
            }}
            source={{
              uri: item.image
            }}
          />
        </View>
        <View style={{ marginLeft: 3, flex: 1, height: 80, marginTop: 25 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 20,
                color: "#000",
                fontWeight: "bold",
                marginRight: "55%"
              }}
            >
              Mark Z
            </Text>
            <Text style={{ color: "#cbcfd2", fontSize: 18 }}>8:20</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#cbcfd2", marginTop: 10, fontSize: 18 }}>
              I don't like this, it's to beautiful
            </Text>
            <View
              style={{
                alignSelf: "flex-end",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0075ff",
                width: 20,
                height: 20,
                borderRadius: 20 / 2
              }}
            >
              <Text style={{ textAlign: "center", color: "#FFF" }}>2</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 90 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#000" }}>
          Chat
        </Text>
        <FontAwesome name="edit" size={30} color="#000" />
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          renderItem={renderMessage}
          data={users}
          keyExtractor={item => String(item.id)}
        />
      </View>
    </View>
  );
}
