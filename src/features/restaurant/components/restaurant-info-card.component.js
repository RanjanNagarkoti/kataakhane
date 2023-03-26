import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";

import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.components";
import { Favourite } from "../../../components/favourites/favourite.component";

import {
  RestaurantCard,
  Info,
  Icon,
  Address,
  RestaurantCardCover,
  Rating,
  Section,
  SectionEnd,
} from "./restaurant-info.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Rajesh dai ko coffee shop",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.pexels.com/photos/7020290/pexels-photo-7020290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = "teha para ko rukh muni",
    isOpenNow = true,
    rating = 4.2,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  // const apple = "asd";
  // console.log(`${apple}-${placeId}-${rating}`);

  return (
    <RestaurantCard>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer positionVariant="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer positionVariant="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
