import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
