import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./src/Store/configureStore";
import MyTabs from "./src/components/MyTabs";
import { Colors } from "./src/components/Colors";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
