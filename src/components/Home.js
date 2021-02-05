import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";
import Heading from "./Heading";
import Todo from "./Todo";
import { Colors } from "./Colors";

export default function Home(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Heading type={props.type} />
      <View>
        <Todo type={props.type} todo={props.todo} />
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
