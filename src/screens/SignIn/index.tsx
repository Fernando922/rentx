import React from "react";
import { Footer, Container, Header, SubTitle, Title, Form } from "./styles";
import { Keyboard, KeyboardAvoidingView, StatusBar } from "react-native";
import Button from "../../components/Button";
import theme from "../../styles/theme";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const SignIn = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="position" enabled>
        <Container>
          <StatusBar
            barStyle={"dark-content"}
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <Title>Estamos{"\n"}quase lá.</Title>
            <SubTitle>
              Faça seu login para começar{"\n"}uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize={"none"}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize={"none"}
            />
          </Form>

          <Footer>
            <Button
              title="Login"
              onPress={() => {}}
              loading={false}
              enabled={false}
            />
            <Button
              title="Criar conta gratuita"
              onPress={() => {}}
              enabled={false}
              loading={false}
              color={theme.colors.background_secondary}
              light
            />
          </Footer>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
