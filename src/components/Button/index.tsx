import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

import { useTheme } from "styled-components";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
}

const Button = ({ title, color, onPress }: Props) => {
  const { colors } = useTheme();

  return (
    <Container color={color ? color : colors.main} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
