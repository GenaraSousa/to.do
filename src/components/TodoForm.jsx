import React from "react";
import { connect } from "react-redux";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Input from "./Input";
import { Entypo } from "@expo/vector-icons";
import { addTodo, setTodoText, setUpdateTodo } from "../action";

class TodoForm extends React.Component {

  onChangeText(text) {
    this.props.dispatchSetTodoText(text)
  }

  handleAdd() {
    const { todo } = this.props;
    if (todo.id) {
      return this.props.dispatchUpdateTodo(todo)
    }
    const { text } = todo;
    this.props.dispatchAddTodo(text);
    this.props.dispatchSetTodoText('');
  }

  render() {
    return (
      <View style={styles.conatiner}>
        {/* input */}
        <Input
          placeholder="ex: comprar verduras"
          placeholderTextColor="#000"
          value={this.props.todo.text}
          onChangeText={(value) => this.onChangeText(value)}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => this.handleAdd()}
        >
          {
            this.props.todo.id ?
            <Entypo name="new-message" size={24} color="#fff" /> :
            <Entypo name="plus" size={24} color="#fff" />
          }  

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: "row",
    width: "100%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#1723be",
    elevation: 2,
    width: 50,
    height: 50,
  },
});


// const mapDispatchToProps = dispatch => {
//   return {
//     dispatchAddTodo: text => dispatch(addTodo(text))
//   }
// }

// const mapDispatchToProps = {
//   dispatchAddTodo: addTodo
// }

const mapStateToProps = state => {
  return {
    todo: state.editingTodo
  }
}

export default connect(mapStateToProps, {
  dispatchAddTodo: addTodo,
  dispatchSetTodoText: setTodoText,
  dispatchUpdateTodo: setUpdateTodo,
})(TodoForm);