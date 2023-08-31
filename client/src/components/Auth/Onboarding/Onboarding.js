/** @format */

import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import { Box, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useRef, Fragment, useEffect } from "react";
import { Butterfly } from "../../../Icons";
import { useScrollHandler } from "react-native-redash";
import Animated, { divide } from "react-native-reanimated";
// import { useSelector } from "react-redux";
import { StackActions } from "@react-navigation/native";

/* Components */
import Slide from "./Slide";
// import Dot from "./Dot";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    title: "Your Better financial Half",
    body: "Managing Your funds should be the easiest task on your to-do-lis, so we created Barter just for you",
  },
  {
    title: "Borderless Payment Experience",
    body: "Create custom virtua USD card at affordable rates for your payments and subscriptions",
  },

  {
    title: "Take Control Over Your Money Anytime, Anywhere",
    body: "Always know what's going on with your money. Thanks for the instant notification",
  },
  {
    title: "Account Protection",
    body: "Barter is secured by Flutterwave. Your money is always safe with us",
  },
];

const Onboarding = ({ navigation }) => {
  const scroll = useRef(null);

  const onLogin = () => {
    navigation.navigate("Login");
  };

  const onRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <Box flex={1} backgroundColor="white">
      <Box height={height * 0.65}>
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          paddingTop={12}>
          <MaterialCommunityIcons
            name="butterfly-outline"
            size={34}
            color="coral"
          />
          <Text
            variant="title1"
            fontSize={30}
            fontWeight="bold"
            textDecorationStyle="solid"
            style={{ marginLeft: 3 }}
            color="coral">
            Barter
          </Text>
        </Box>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          {slides.map(({ title, body }, index) => (
            <Fragment key={index}>
              <Slide {...{ title, body }} />
            </Fragment>
          ))}
        </Animated.ScrollView>
      </Box>
      <Box flex={1} alignItems="center" justifyContent="center" paddingY="2">
        <TouchableOpacity onPress={onRegister}>
          <Box
            width={width * 0.8}
            bg="coral"
            paddingY="3"
            borderRadius="sm"
            marginBottom="3">
            <Text
              textAlign="center"
              fontSize={18}
              color="white"
              fontWeight={700}>
              Create an account
            </Text>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogin}>
          <Box
            width={width * 0.8}
            bg="primary.300"
            paddingY="3"
            borderRadius="sm"
            marginBottom="3">
            <Text
              textAlign="center"
              fontSize={18}
              color="white"
              fontWeight={700}>
              Login
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
