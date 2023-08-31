/** @format */

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@shopify/restyle";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/misc/theme";
import { AuthenticationNavigator } from "./src/components/Auth";
import DashboardNavigator from "./src/components/Dashboard";
import { NativeBaseProvider } from "native-base";
import store from "./src/redux/store";
import { Provider } from "react-redux";

const AppStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider {...{ theme }}>
        <NativeBaseProvider>
          <NavigationContainer>
            <SafeAreaProvider>
              <AppStack.Navigator
                initialRouteName="Authentication"
                screenOptions={{ headerShown: false }}>
                <AppStack.Screen
                  name="Authentication"
                  component={AuthenticationNavigator}
                />
                <AppStack.Screen
                  name="Dashboard"
                  component={DashboardNavigator}
                />
              </AppStack.Navigator>
            </SafeAreaProvider>
          </NavigationContainer>
        </NativeBaseProvider>
      </ThemeProvider>
    </Provider>
  );
}
