import React from "react";
import { useTheme } from "styled-components";
import BackButton from "../../components/BackButton";

import ArrowSvg from "../../assets/arrow.svg";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";
import { StatusBar } from "react-native";
import Button from "../../components/Button";

const Scheduling = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={() => {}} color={colors.shape} />
        <Title>
          Escolha uma{"\n"}data de início e{"\n"}fim de aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content></Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
};

export default Scheduling;