import React, { useState } from "react";
import { Footer, Container, Header, SubTitle, Title, Form } from "./styles";
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar } from "react-native";
import Button from "../../components/Button";
import theme from "../../styles/theme";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import * as Yup from "yup";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("A senha é obrigatória"),
      });

      await schema.validate({ email, password });
      Alert.alert("Tudo certo!");

      //fazer login
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa", error.message);
      } else {
        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer login, verifique as credencias"
        );
      }
    }
  };

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
              value={email}
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize={"none"}
              onChangeText={setEmail}
            />
            <PasswordInput
              value={password}
              iconName="lock"
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize={"none"}
              onChangeText={setPassword}
            />
          </Form>

          <Footer>
            <Button
              title="Login"
              onPress={handleSignIn}
              loading={false}
              enabled
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
