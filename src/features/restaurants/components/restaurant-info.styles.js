import styled from "styled-components/native";

import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.ui.primary};
  margin: ${(props) => props.theme.space[1]};
  margin-bottom: ${(props) => props.theme.space[3]};
  font-family: Oswald400Regular;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  margin-top: ${(props) => props.theme.space[4]};
  margin-left: ${(props) => props.theme.space[4]};
  margin-right: ${(props) => props.theme.space[4]};
  backgroundcolor: ${(props) => props.theme.colors.ui.success};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[4]};
`;

export const Address = styled.Text`
  padding: ${(props) => props.theme.space[2]};
  font-size: 14px;
  font-family: Oswald_400Regular;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantCardContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
