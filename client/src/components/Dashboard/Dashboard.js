/** @format */

import React, { useEffect } from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { Container, Content, View } from "native-base";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {
  Butterfly,
  Phone,
  Bills,
  Nigeria,
  Usa,
  Home,
  Transactions,
  More,
  Cards,
} from "../../Icons";
import Animated from "react-native-reanimated";
import { SEGMENT, ICON_SIZE, PADDING } from "../../Constants";
import Tab from "./Tab";
import {
  TapGestureHandler,
  TouchableOpacity,
} from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const actions = [
  {
    title: "Request Money",
    icon: <Butterfly width={20} height={20} />,
    color: "#FDD1FF",
    cta: "Request",
  },
  {
    title: "Send Money",
    icon: <Butterfly width={20} height={20} />,
    color: "#F9F9D6",
    cta: "Send",
  },
  {
    title: "Buy Airtime",
    icon: <Phone width={20} height={20} />,
    color: "#DCF5FF",
    cta: "Buy",
  },
  {
    title: "Pay Bills",
    icon: <Bills width={20} height={20} />,
    color: "#C6E1DD",
    cta: "Pay",
  },
];

export const menus = [
  { text: "Home", icon: <Home width={30} height={30} />, routeName: "Home" },
  { text: "Cards", icon: <Cards width={30} height={30} />, routeName: "Card" },
  {
    text: "Transactions",
    icon: <Transactions width={30} height={30} />,
    routeName: "Transactions",
  },
  { text: "More", icon: <More width={30} height={30} />, routeName: "More" },
];

function Dashboard({ navigation }) {
  return <View></View>;
}

export default Dashboard;
