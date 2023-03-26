import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component.js";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component.js";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;
const SettingsList = styled(List.Section)`
  background-color: rgba(255, 255, 255, 0.7);
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="tomato" />
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>
      <SettingsList>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="tomato" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="tomato" icon="door" />}
          onPress={onLogout}
        />
      </SettingsList>
    </SafeArea>
  );
};
