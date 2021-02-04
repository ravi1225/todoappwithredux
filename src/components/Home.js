import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";
import Heading from "./Heading";
import Todo from "./Todo";
import { Colors } from "./Colors";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Heading />
      <View>
        <Todo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: Constants.statusBarHeight,
  },
});
