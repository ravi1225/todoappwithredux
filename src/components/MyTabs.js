import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import { connect } from "react-redux";
import { Colors } from "./Colors";

function HomeScreen({ todo }) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <Home type="Today" todo={todo} />
    </SafeAreaView>
  );
}

function ActiveScreen({ todo }) {
  const [active, setActive] = useState([]);

  useEffect(() => {
    activeList();
  }, [activeList]);

  const activeList = () => {
    const listData = todo.filter((item) => {
      if (!item.check) {
        return item;
      }
    });
    setActive(listData);
  };
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <Home type="Active" todo={active} />
    </SafeAreaView>
  );
}

function CompletedScreen({ todo }) {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    completeList();
  }, [completeList]);

  const completeList = () => {
    let listData = todo.filter((item) => {
      if (item.check) {
        return item;
      }
    });
    setCompleted(listData);
  };
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <Home type="Completed" todo={completed} />
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

const MyTabs = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.red,
        inactiveTintColor: Colors.black,
        labelStyle: {
          fontSize: 20,
          fontWeight: "bold",
          padding: 1,
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="All"
        component={() => <HomeScreen todo={props.todoList} />}
      />
      <Tab.Screen
        name="Active"
        component={() => <ActiveScreen todo={props.todoList} />}
      />
      <Tab.Screen
        name="Completed"
        component={() => <CompletedScreen todo={props.todoList} />}
      />
    </Tab.Navigator>
  );
};
const mapStateToProps = (state) => {
  return {
    todoList: state.todos,
  };
};

export default connect(mapStateToProps)(MyTabs);
