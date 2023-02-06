import React, { useState } from "react";
import {
  Searchbar,
  List,
  Avatar,
  Button,
  Card,
  Text,
} from "react-native-paper";
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import { ResaturantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <ResaturantInfo />
      </ScrollView>
    </SafeAreaView>
  );
};
