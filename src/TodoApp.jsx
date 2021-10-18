import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reduces";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
//criar nosso store

const store = createStore(rootReducer);

export default class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <Text style={styles.title}>to.do</Text>
          <TodoForm />
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 26,
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "5%",
    marginBottom: '5%',
    color: "#171f50",
  },
});
