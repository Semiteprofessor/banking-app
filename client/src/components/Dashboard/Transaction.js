/** @format */

import React from "react";
import { Dimensions } from "react-native";
import { Container, Content, View } from "native-base";
import { menus, styles } from "./Dashboard";
import Tab from "./Tab";

const { width, height } = Dimensions.get("window");

const transactions = [
  {
    type: "send",
    name: "Samuel",
    price: 200,
    purpose: "I paid money to Victor",
  },
  {
    type: "received",
    name: "Cynthia",
    price: 200,
    purpose: "Refund from mama Deborah",
    date: "Mar 3 2021",
  },
  {
    type: "send",
    name: "Samuel",
    price: 200,
    purpose: "I bought an apple",
    date: "Mar 3 2021",
  },
  {
    type: "received",
    name: "Nengi",
    price: 200,
    purpose: "Office Payment",
    date: "Mar 3 2021",
  },
  {
    type: "send",
    name: "Samuel",
    price: 200,
    purpose: "I bought a shoe",
    date: "Mar 3 2021",
  },
  {
    type: "received",
    name: "Nnanna",
    price: 200,
    purpose: "Transfer from Emeka",
    date: "Mar 3 2021",
  },
];

function Transactions({ navigation }) {
  return <View></View>;
}

export default Transactions;
