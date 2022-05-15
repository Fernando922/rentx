import React from "react";

import { StatusBar, useWindowDimensions } from "react-native";

import { Container, Content, Title, Message, Footer } from "./styles";

import LogoSvg from "../../assets/logo_background_gray.svg";

import DoneSvg from "../../assets/done.svg";
import ConfirmButton from "../../components/ConfirmButton";
import { useNavigation, useRoute } from "@react-navigation/native";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

const Confirmation = () => {
  const { width } = useWindowDimensions();

  const { navigate } = useNavigation();

  const { params } = useRoute();

  const { message, title, nextScreenRoute } = params as Params;

  function confirm() {
    navigate(nextScreenRoute);
  }

  return (
    <Container>
      <LogoSvg width={width} />
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>

        <Message>{message}</Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" onPress={confirm} />
      </Footer>
    </Container>
  );
};

export default Confirmation;
