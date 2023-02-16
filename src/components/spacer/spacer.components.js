import React from "react";
import styled from "styled-components/native";

const TopSmall = styled.View`
  margin-top: ${(props) => props.theme.space[2]};
`;

const TopMedium = styled.View`
  marign-top: ${(props) => props.theme.space[3]};
`;
const TopLarge = styled.View`
  marign-top: ${(props) => props.theme.space[4]};
`;

const LeftSmall = styled.View`
  margin-top: ${(props) => props.theme.space[2]};
`;

const LeftMedium = styled.View`
  marign-top: ${(props) => props.theme.space[3]};
`;
const LeftLarge = styled.View`
  marign-top: ${(props) => props.theme.space[4]};
`;
export const Spacer = ({ variant }) => {
  if (variant === "top.medium") {
    return <TopMedium />;
  }
  if (variant === "top.large") {
    return <TopLarge />;
  }
  if (variant === "left.medium") {
    return <LeftMedium />;
  }
  if (variant === "left.large") {
    return <LeftLarge />;
  }
  if (variant === "left.small") {
    return <LeftSmall />;
  }
  return <TopSmall />;
};
