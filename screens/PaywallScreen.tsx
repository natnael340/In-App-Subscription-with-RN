import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Paywall"
>;
const PaywallScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="bg-[#1A2F44] flex-1 rounded-tl-2xl rounded-tr-2xl">
        <View className="py-5 space-y-2">
          <Text className="text-white uppercase text-2xl font-bold text-center">
            Upgrade
          </Text>
          <Text className="text-white text-center">
            Upgrade to pro to access all features
          </Text>
        </View>

        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-0 right-0 p-5"
        >
          <Ionicons name="md-close-circle-sharp" size={32} color="#E5962D" />
        </TouchableOpacity>
        {/* Logo */}
        <View className="justify-center items-center">
          <MaterialCommunityIcons
            name="trophy-award"
            size={150}
            color="#E5962D"
          />
        </View>
        {/* Content */}
        <View className="space-y-5 px-8 py-5">
          <View className="flex-row space-x-8 items-center">
            <Ionicons name="md-key" size={32} color="#E5962D" />
            <View className="flex-1">
              <Text className="text-white font-bold text-lg">
                All access to pro features
              </Text>
              <Text className="text-white text-sm font-extralight">
                Upgrade to premium version of the app and enjoy all the
                exclusive features available to only pro users.{" "}
              </Text>
            </View>
          </View>
          <View className="flex-row space-x-8 items-center">
            <Ionicons name="md-person-add-outline" size={32} color="#E5962D" />
            <View className="flex-1">
              <Text className="text-white font-bold text-lg">
                Helpline 24/7 to Personal Trainers
              </Text>
              <Text className="text-white text-sm font-extralight">
                Get unlimited access to our personal fitness support team and
                get help anytime you need it - day or night.{" "}
              </Text>
            </View>
          </View>
          <View className="flex-row space-x-8 items-center">
            <Ionicons name="md-star" size={32} color="#E5962D" />
            <View className="flex-1">
              <Text className="text-white font-bold text-lg">
                Unlock Limited Edition Content
              </Text>
              <Text className="text-white text-sm font-extralight">
                Unlock exclusive content that you can't get anywhere else like
                special exclusive workout and routines.{" "}
              </Text>
            </View>
          </View>
        </View>
        {/* Monthly Subscribe */}
        {/* Annual Subscribe */}
        {/* Restore Purchases */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaywallScreen;
