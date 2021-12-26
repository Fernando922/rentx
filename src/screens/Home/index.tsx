import React from "react";
import { StatusBar } from "react-native";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import Car from "../../components/Car";

const Home = () => {
  const carData = {
    brand: "porsche",
    name: "Panamera",
    rent: {
      period: "ao dia",
      price: 340,
    },
    thumbnail: "https://pngkit.com/png/full/237-2375888_porsche-panamera-s.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars> Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
};

export default Home;
