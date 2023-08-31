import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { TabRoutes } from "./src/routes";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsloaded] = useFonts({
    Gotham_light: require("./assets/fonts/Gotham/GothamLight.ttf"),
    Gotham: require("./assets/fonts/Gotham/GothamMedium.ttf"),
    Gotham_bold: require("./assets/fonts/Gotham/GothamBold.ttf"),
  });

  if (!fontsloaded) {
    return null!;
  }

  return (
    <NativeBaseProvider>
      <TabRoutes />
    </NativeBaseProvider>
  );
}
