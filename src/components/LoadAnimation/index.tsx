import React from "react";
import { Container } from "./styles";

import LottieView from "lottie-react-native";

import loadCar from "../../assets/load_animation.json";

const LoadAnimation = () => {
  return (
    <Container>
      <LottieView
        source={loadCar}
        autoPlay
        loop
        style={{ height: 200 }}
        resizeMode="contain"
      />
    </Container>
  );
};

export default LoadAnimation;
