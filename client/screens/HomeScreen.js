import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white ">
      <StatusBar barStyle="dark-content" />

      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-1 flex-row items-center rounded-full border border-gray-300 p-3">
          <Text>HomeScreen</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
