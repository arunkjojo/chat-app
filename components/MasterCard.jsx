import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const MessageCard = ({ room }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ChatScreen", { room: room })}
      className="w-full flex-row items-center justify-start py-2"
    >
      {/* images */}
      <View className="w-16 h-16 rounded-full flex items-center border-2 border-primary p-1 justify-center">
        <FontAwesome5 name="users" size={24} color="#555" />
      </View>
      {/* content */}
      <View className="flex-1 flex items-start justify-center ml-4">
        <Text className="text-[#333] text-base font-semibold capitalize">
          {room.chatName}
        </Text>

        <Text className="text-primaryText text-sm">
          Lorem ipsum dolor sit amet consec tetur adipis adip isicing icing
          elit....
        </Text>
      </View>

      {/* time text */}
      <Text className="text-primary px-4 text-base font-semibold">27 min</Text>
    </TouchableOpacity>
  );
};

export default MessageCard;
