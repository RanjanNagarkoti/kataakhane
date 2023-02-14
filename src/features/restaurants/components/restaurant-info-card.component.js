import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Card } from "react-native-paper";
import styled from "styled-components/native";

import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const Title = styled.Text`
  padding: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.text.primary};
  font-family: Oswald_400Regular;
`;

const RestaurantCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.ui.primary};
  margin: ${(props) => props.theme.space[1]};
  font-family: Oswald_400Regular;
`;

const RestaurantCardCover = styled(Card.Cover)`
  margin-top: ${(props) => props.theme.space[4]};
  margin-left: ${(props) => props.theme.space[4]};
  margin-right: ${(props) => props.theme.space[4]};
  backgroundcolor: ${(props) => props.theme.colors.ui.success};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[4]};
`;

const Address = styled.Text`
  padding: ${(props) => props.theme.space[2]};
  font-size: 14px;
  font-family: Oswald_400Regular;
`;

const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]};
`;

const RestaurantCardContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ResaturantInfoCard = ({ restaurant = {}, fontFamily }) => {
  const {
    name = "Rajesh dai ko chiya pasal",
    address = "bato side ko rukh muni",
    rating = 5,
    photos = "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon,
    openingHours = true,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard style={styles.card} elevation={5}>
      <RestaurantCardCover source={{ uri: photos }} style={styles.cover} />
      <RestaurantCardContent>
        <Info>
          <Title variant="bodyMedium">{name}</Title>
          <Address>{address}</Address>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
        </Info>

        <Info style={styles.row}>
          <View>
            <Title variant="bodyMedium">
              {openingHours ? (
                <SvgXml xml={open} width={50} height={50} />
              ) : (
                "Closed"
              )}
            </Title>
          </View>
        </Info>
      </RestaurantCardContent>
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
