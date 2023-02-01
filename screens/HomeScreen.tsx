import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ActionRow from "../components/ActionRow";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className="flex-1 bg-gray-100 relative">
      <ScrollView>
        {/* PRO/UPGRDE BUTTON */}
        <TouchableOpacity
          className="absolute z-50 top-5 right-10 items-center"
          onPress={() => navigation.navigate("Paywall")}
        >
          <Ionicons name="person-circle" size={24} color="#E5962D" />
          <Text className="text-center text-[#E5962D]">PRO/UPGRADE</Text>
        </TouchableOpacity>
        {/* Images */}
        <Image
          source={{ uri: "https://i.imgur.com/e14NE49.png" }}
          className="w-full h-64"
        />
        {/* ActionRow */}
        <View className="mx-2">
          <View className="flex-row justify-between space-x-2">
            <ActionRow
              title="Track Workout"
              screen={"Demo"}
              color={"#E5962D"}
              icon="fitness"
              vertical
            />
            <ActionRow
              title="Browse Workout"
              screen={"Demo"}
              color={"#1982C4"}
              icon="library"
              vertical
            />
          </View>

          <ActionRow
            title="Connect with Friends"
            screen={"Demo"}
            color={"#F44174"}
            icon="share-social"
          />
          <ActionRow
            title="Add an Exercise"
            screen={"Demo"}
            color={"#8AC926"}
            icon="add-circle"
            requiresPro
          />
          <ActionRow
            title="Create a Routine"
            screen={"Demo"}
            color={"#C03221"}
            icon="md-time"
            requiresPro
          />
          <ActionRow
            title="Join Challenges"
            screen={"Demo"}
            color={"#23967F"}
            icon="trophy"
            requiresPro
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
