import React from "react";

import { Button, StyleSheet, Dimensions } from "react-native";

import { Container } from "./styles";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

const WIDTH = Dimensions.get("window").width;

const Splash = () => {
  const animation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(animation.value, {
            duration: 500,
            easing: Easing.bezier(0, 1.11, 0.99, 0.02),
          }),
        },
      ],
    };
  });

  function handleAnimationPosition() {
    animation.value = Math.random() * (WIDTH - 100);
  }

  return (
    <Container>
      <Animated.View style={[styles.box, animatedStyles]} />

      <Button title="MOVER" onPress={handleAnimationPosition} />
    </Container>
  );
};

export default Splash;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
