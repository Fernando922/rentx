import React, { useState } from "react";
import BackButton from "../../../components/BackButton";
import {
  Container,
  Header,
  Steps,
  SubTitle,
  Title,
  Form,
  FormTitle,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import Bullet from "../../../components/Bullet";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Alert, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as Yup from "yup";
import { Keyboard } from "react-native";

const FirstStep = () => {
  const { navigate, goBack } = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicense, setDriverLicense] = useState("");

  const handleGoBack = () => {
    goBack();
  };

  const handleNextStep = async () => {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required("CNH é obrigatório"),
        email: Yup.string()
          .email("E-mail inválido")
          .required("E-mail é obrigatório"),
        name: Yup.string().required("Nome é Obrigatório"),
      });

      const data = { name, email, driverLicense };
      await schema.validate(data);

      navigate("SecondStep", data);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Ops!", error.message);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="position">
        <Container>
          <Header>
            <BackButton onPress={goBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>
          <Title>Crie sua{"\n"}conta</Title>
          <SubTitle>Faça seu cadastro de{"\n"}forma rápida e fácil</SubTitle>
          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input
              iconName="user"
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              iconName="credit-card"
              onChangeText={setDriverLicense}
              placeholder="CNH"
              keyboardType="numeric"
              value={driverLicense}
            />
          </Form>
          <Button title="Próximo" onPress={handleNextStep} />
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default FirstStep;
