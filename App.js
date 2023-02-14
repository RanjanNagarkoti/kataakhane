import React from "react";
import { StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme/";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen fontFamily={Oswald_400Regular} />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
