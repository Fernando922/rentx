import React from "react";
import { View, Text } from "react-native";
// import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    // return <AppLoading />
    return null;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "Inter_500Medium", fontSize: 40 }}>
        Inter Black
      </Text>
      <Text style={{ fontSize: 40 }}>Inter Black</Text>
      <Text style={{ fontFamily: "Archivo_600SemiBold", fontSize: 40 }}>
        Inter Black
      </Text>
    </View>
  );
}
