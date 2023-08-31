/** @format */

import { StyleSheet, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./Dashboard";
import Card from "./Card";
import Transaction from "./Transaction";
import More from "./More";
import Send from "./Send";
import SendMoney from "./SendMoney";
import { View } from "react-native";

const DashboardStack = createStackNavigator();
const DashboardNavigator = () => {
  <DashboardStack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}>
    <DashboardStack.Screen name="Home" component={Dashboard} />
    <DashboardStack.Screen name="Card" component={Card} />
    <DashboardStack.Screen name="Transactions" component={Transaction} />
    <DashboardStack.Screen name="More" component={More} />
    <DashboardStack.Screen
      name="Send"
      component={Send}
      options={{
        headerTitle: () => (
          <Text variant="title1" color="black" fontSize={20}>
            Bank Transfer
          </Text>
        ),
      }}
    />
    <DashboardStack.Screen
      name="SendMoney"
      component={SendMoney}
      options={{
        headerTitle: () => (
          <Text variant="title1" color="black" fontSize={20}>
            Send Money
          </Text>
        ),
      }}
    />
  </DashboardStack.Navigator>;
  return (
    <View>
      <Text>DashboardNavigator</Text>
    </View>
  );
};

export default DashboardNavigator;
