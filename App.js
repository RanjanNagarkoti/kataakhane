import React from "react";
import { StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme/";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { SafeArea } from "./src/components/utility/safe-area.component";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  // Prevent rendering until the font has loaded
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  const TAB_ICON = {
    Restaurant: "md-restaurant",
    Home: "md-home",
    Settings: "md-settings",
  };

  const Map = () => (
    <SafeArea>
      <Text>Map Screen</Text>
    </SafeArea>
  );
  const Settings = () => (
    <SafeArea>
      <Text>Settings Screen</Text>
    </SafeArea>
  );

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={Map} />
          <Tab.Screen name="Settings" component={Settings} />
          <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      {/* <RestaurantsScreen /> */}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
