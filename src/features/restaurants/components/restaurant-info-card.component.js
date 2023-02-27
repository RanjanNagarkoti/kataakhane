import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { Spacer } from "../../../components/spacer/spacer.components";
import { Text } from "../../../components/typography/text.component";

import { useFonts, Oswald400Regular } from "@expo-google-fonts/oswald";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  Rating,
  RestaurantCardContent,
} from "./restaurant-info.styles";

export const ResaturantInfoCard = ({ restaurant = {} }) => {
  const [fontsLoaded] = useFonts({
    Oswald400Regular,
  });

  const {
    name = "Jiten dai ko chiya pasal",
    address = "IIMS",
    rating = 3,
    photos = "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    openingHours = true,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard style={styles.card} elevation={5}>
      <RestaurantCardCover source={{ uri: photos }} style={styles.cover} />
      <RestaurantCardContent>
        <Info>
          <Text variant="label">{name}</Text>
          <Address>{address}</Address>
          <Rating>
            {ratingArray.map((index) => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
        </Info>

        <Info style={styles.row}>
          <View>
            {isClosedTemporarily ? (
              <>
                <Spacer position="left" size="large" />
                <Text variant="error">Closed Temporarily</Text>
              </>
            ) : isClosedTemporarily && !openingHours ? (
              <>
                <Spacer position="left" size="large" />
                <Text variant="error">Closed Temporarily</Text>
              </>
            ) : !isClosedTemporarily && openingHours ? (
              <>
                <Spacer position="left" size="large" />
                <SvgXml xml={open} width={50} height={50} />
              </>
            ) : (
              !openingHours && (
                <>
                  <Spacer position="left" size="large" />
                  <Image
                    source={{ uri: icon }}
                    style={{ width: 50, height: 50 }}
                  />
                </>
              )
            )}
            <Spacer position="left" size="large" />
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
