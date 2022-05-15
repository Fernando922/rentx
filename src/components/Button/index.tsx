import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";

import { Container, Title } from "./styles";

import { useTheme } from "styled-components";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

const Button = ({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false,
}: Props) => {
  const { colors } = useTheme();

  return (
    <Container
      color={color ? color : colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
