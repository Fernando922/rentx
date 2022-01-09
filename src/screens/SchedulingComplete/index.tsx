import React from "react";

import { StatusBar, useWindowDimensions } from "react-native";

import { Container, Content, Title, Message, Footer } from "./styles";

import LogoSvg from "../../assets/logo_background_gray.svg";

import DoneSvg from "../../assets/done.svg";
import ConfirmButton from "../../components/ConfirmButton";
import { useNavigation } from "@react-navigation/native";

const SchedulingComplete = () => {
  const { width } = useWindowDimensions();

  const { navigate } = useNavigation();

  function confirm() {
    navigate("Home");
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
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir{"\n"}até a concessionária da RENTX{"\n"}
          pegar o seu automóvel
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" onPress={confirm} />
      </Footer>
    </Container>
  );
};

export default SchedulingComplete;
