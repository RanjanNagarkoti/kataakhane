import React, { useContext, useEffect, useState } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component.js";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component.js";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;
const SettingsList = styled(List.Section)`
  background-color: rgba(255, 255, 255, 0.7);
`;
const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/account-back.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const TransparentSafeArea = styled(SafeArea)`
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  const [photo, setPhoto] = useState(null);

  const getProfielPicture = async () => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(photoUri);
  };
  useEffect(() => {
    getProfielPicture();
  }, [user]);

  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <AvatarContainer>
            {!photo && (
              <Avatar.Icon size={180} icon="human" backgroundColor="tomato" />
            )}
            {photo && (
              <Avatar.Icon
                size={180}
                source={{ uri: photo }}
                backgroundColor="tomato"
              />
            )}
            <Text variant="label">{user.email}</Text>
          </AvatarContainer>
        </TouchableOpacity>
        <SettingsList>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color="tomato" icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <SettingsItem
            title="Logout"
            left={(props) => (
              <List.Icon {...props} color="tomato" icon="door" />
            )}
            onPress={onLogout}
          />
        </SettingsList>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
