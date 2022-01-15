import React from "react";
import Acessory from "../../components/Acessory";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer,
} from "./styles";
import Button from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

interface Params {
  car: CarDTO;
}

const CarDetails = () => {
  const { navigate, goBack } = useNavigation();

  const { params } = useRoute();

  const { car } = params as Params;

  function handleConfirmRental() {
    navigate("Scheduling", { car });
  }

  function handleBack() {
    goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Acessories>
          {car.accessories.map((accesory) => (
            <Acessory
              key={accesory.type}
              name={accesory.name}
              icon={getAccessoryIcon(accesory.type)}
            />
          ))}
        </Acessories>
        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
};

export default CarDetails;
