import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./src/Store/configureStore";
import MyTabs from "./src/components/MyTabs";

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
