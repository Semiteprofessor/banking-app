/** @format */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./Onboarding/Onboarding";
import Login from "./Login";
import Register from "./Register";
import Password from "./Password";
import { Text } from "native-base";

const AutheticationStack = createStackNavigator();
export const AuthenticationNavigator = () => (
  <AutheticationStack.Navigator
    initialRouteName="OnBoarding"
    screenOptions={{ headerShown: false }}>
    <AutheticationStack.Screen
      name="OnBoarding"
      component={Onboarding}
      options={{ headerShown: false }}
    />

    <AutheticationStack.Screen
      name="Login"
      component={Login}
      options={{
        headerTitle: () => (
          <Text variant="title1" color="black" fontSize={20}>
            What is your email?
          </Text>
        ),
      }}
    />

    <AutheticationStack.Screen
      name="Register"
      component={Register}
      options={{
        headerTitle: () => (
          <Text variant="title1" color="black" fontSize={20}>
            Create an account
          </Text>
        ),
      }}
    />

    <AutheticationStack.Screen
      name="Password"
      component={Password}
      options={{
        headerTitle: () => (
          <Text variant="title1" color="black" fontSize={20}>
            Enter a password
          </Text>
        ),
      }}
    />
  </AutheticationStack.Navigator>
);
