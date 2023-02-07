import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const RestaurantCard = styled(Card)`
  backgroundcolor: "white";
  margin: 18px;
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: 20px;
    backgroundColor: "white";
`;
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
    <RestaurantCard style={styles.card}>
      <Card.Title title={name} subtitle={address} />

      <RestaurantCardCover source={{ uri: photos }} style={styles.cover} />
      <Card.Content style={styles.row}>
        <View>
          <Title variant="bodyMedium">{rating}</Title>
          <Title variant="bodyMedium">{openingHours ? "Open" : "Closed"}</Title>
        </View>
        <Card.Actions>
          <Button>Ok</Button>
        </Card.Actions>
      </Card.Content>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
