import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View>
      <Image
        source={require("./../../assets/Images/Login.jpg")}
        className="w-full h-[400px] object-cover"
      />
      <View className="p-8 bg-white mt-[-70px] rounded-t-3xl">
        <Text className="text-[30px] font-bold">Community Marketplace</Text>
        <Text className="text-[18px] text-slate-500 mt-6">
          Buy and sell Marketplace where you can sell old item and make real
          money
        </Text>
        <TouchableOpacity
          onPress={onPress}
          className="p-4 bg-blue-500 rounded-full mt-20"
        >
          <Text className="text-[18px] text-white text-center">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
