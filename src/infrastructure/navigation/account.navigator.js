import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
