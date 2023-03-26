import React from "react";
import { Title } from "../components/account.styles";
import {
  AccountBackground,
  AccountCover,
  AuthButton,
  AnimationWrapper,
} from "../components/account.styles";
import { AccountContainer } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.components";
import LottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/welcome.json")}
        />
      </AnimationWrapper>
      <Title>Kata Khane</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
