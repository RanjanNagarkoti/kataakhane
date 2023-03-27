import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CameraScreen } from "../../features/settings/screen/camera.screen";
import { FavouritesScreen } from "../../features/settings/screen/favourites.screen";
import { SettingsScreen } from "../../features/settings/screen/setting.screens";

const SettingStack = createStackNavigator();

export const SettingsNavigator = () => {
  <SettingStack.Navigator
    options="screen"
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <SettingStack.Screen
      options={{ header: () => null }}
      name="Setting"
      component={SettingsScreen}
    />
    <SettingStack.Screen name="Favourites" component={FavouritesScreen} />
    <SettingStack.Screen name="Camera" component={CameraScreen} />
  </SettingStack.Navigator>;
};
