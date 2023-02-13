import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import styled from "styled-components/native";
import { useFonts, Roboto_400Regular_Italic } from "@expo-google-fonts/roboto";

const Title = styled.Text`
  padding: ${(props) => props.theme.space[4]};
  color: ${(props) => props.theme.colors.text.primary};
  font-family: Roboto_400Regular_Italic;
`;

const RestaurantCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.ui.primary};
  margin: ${(props) => props.theme.space[4]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.lineHeights.copy};
  backgroundcolor: ${(props) => props.theme.colors.ui.primary};
`;
export const ResaturantInfoCard = ({ restaurant = {} }) => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular_Italic,
  });

  const {
    name = "Rajesh dai ko chiya pasal",
    address = "bato side ko rukh muni",
    rating = 5,
    photos = "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon,
    openingHours = true,
    isClosedTemporarily = false,
  } = restaurant;

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <RestaurantCard style={styles.card} elevation={5}>
      <Card.Title
        title={name}
        subtitle={address}
      />
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
