import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { Colors } from "./Colors";
import { connect } from "react-redux";
import { changeStatus } from "../Actions/Count";

const Todo = (props) => {
  return (
    <View style={styles.firstView}>
      <FlatList
        data={props.todoList}
        extraData={props}
        renderItem={({ item }) => (
          <View style={styles.flatlistView}>
            <TouchableOpacity
              onPress={() => {
                props.changeStatus(item.key);
              }}
            >
              <Icon
                name={
                  item.check
                    ? "checkbox-marked-circle-outline"
                    : "checkbox-blank-circle-outline"
                }
                size={30}
                color={Colors.CornflowerBlue}
              />
            </TouchableOpacity>

            <View style={styles.touchView}>
              <Text
                style={item.check ? styles.flatlistText1 : styles.flatlistText}
              >
                {item.text}
              </Text>
              <Octicons
                name="primitive-dot"
                size={30}
                color={item.check ? Colors.green : Colors.red}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  firstView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  flatlistView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    marginHorizontal: 15,
    minHeight: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.lightgray,
  },

  flatlistText: {
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0.5,
    fontSize: 25,
    minWidth: 335,
    borderBottomColor: Colors.lightgray,
  },
  flatlistText1: {
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0.5,
    fontSize: 25,
    minWidth: 330,
    borderBottomColor: Colors.lightgray,
    textDecorationLine: "line-through",
    opacity: 0.5,
  },

  touchView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 15,
    marginBottom: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    todoList: state.todos,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    changeStatus: (key) => dispatch(changeStatus(key)),
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(Todo);
