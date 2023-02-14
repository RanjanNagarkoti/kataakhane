import React from "react";
import { View } from "react-native";
import Svg, { Rect, Text } from "react-native-svg";

export const CloseButton = () => {
  return (
    <View>
      <Svg height="120" width="120">
        <Rect x="20" y="20" width="80" height="80" fill="#FF0000" rx="5" />
        <Rect x="10" y="100" width="100" height="20" fill="#CCCCCC" rx="5" />
        <Rect
          x="50"
          y="35"
          width="20"
          height="50"
          fill="#CCCCCC"
          rx="5"
          transform="rotate(45, 60, 60)"
        />
        <Text x="60" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="20">
          Close
        </Text>
      </Svg>
    </View>
  );
};
