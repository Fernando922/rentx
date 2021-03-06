import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CarDetails from "../screens/CarDetails";
import Home from "../screens/Home";
import Scheduling from "../screens/Scheduling";
import Confirmation from "../screens/Confirmation";
import Splash from "../screens/Splash";
import SignIn from "../screens/SignIn";
import SchedulingDetails from "../screens/SchedulingDetails";
import MyCars from "../screens/MyCars";
import FirstStep from "../screens/SignUp/FirstStep";
import SecondStep from "../screens/SignUp/SecondStep";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"SignIn"}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="FirstStep" component={FirstStep} />
      <Screen name="SecondStep" component={SecondStep} />
      <Screen name="Splash" component={Splash} />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false, //voltar do ios
        }}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
