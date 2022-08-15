import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import BrandSvg from "../../assets/brand.svg";

import LogoSvg from "../../assets/logo.svg";

import { Container } from "./styles";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
} from "react-native-reanimated";

const Splash = () => {
  const splashAnimation = useSharedValue(0);

  const { navigate } = useNavigation();

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50], //referente ao splashAnimation
            [0, -50], //referente ao translate
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50], //referente ao splashAnimation
            [-50, 0], //referente ao translate
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  function startApp() {
    navigate("SignIn");
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1000 }, () => {
      "worklet";
      runOnJS(startApp)(); //pq a animação é executada na thread de interface, em thread separada
    });
  }, []);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: "absolute" }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: "absolute" }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
};

export default Splash;
