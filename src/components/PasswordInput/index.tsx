import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Container, IconContainer, InputText } from "./styles";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  placeholder: string;
}

const PasswordInput = ({ iconName, ...rest }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const theme = useTheme();

  const handlePasswordVisibilityChange = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>

      <InputText {...rest} secureTextEntry={!isPasswordVisible} />

      <BorderlessButton onPress={handlePasswordVisibilityChange}>
        <IconContainer>
          <Feather
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  );
};

export default PasswordInput;
