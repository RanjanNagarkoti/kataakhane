import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

export const ResaturantInfo = ({ restaurant = {} }) => {
  const {
    name = "Rajesh dai ko chiya pasal",
    address = "bato side ko rukh muni",
    rating = 5,
    photos = "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon,
    openingHours = true,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card>
      <Card.Title title={name} subtitle={address} />

      <Card.Cover source={{ uri: photos }} />
      <Card.Content style={styles.row}>
        <View>
          <Text variant="bodyMedium">{rating}</Text>
          <Text variant="bodyMedium">{openingHours ? "Open" : "Closed"}</Text>
        </View>
        <Card.Actions>
          <Button>Ok</Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
