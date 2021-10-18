import React from 'react';
import { ScrollView, StyleSheet, } from 'react-native';
import { connect } from 'react-redux';
import { toggleTodo, setEditingTodo } from '../action';
import Todo from './Todo';

function TodoList({ todos, dispatchTogleTodo, dispatchEditingTodo }) {
    return (
        <ScrollView style={styles.container}>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    todo={todo}
                    onPress={() => dispatchTogleTodo(todo.id)}
                    onLongPress={() => dispatchEditingTodo(todo)}
                >
                    {todo.text}
                </Todo>)}
        </ScrollView>
    )
}

// Estilo
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 30,
    },
});


// redux
const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
}

export default connect(
    mapStateToProps,
    {
        dispatchTogleTodo: toggleTodo,
        dispatchEditingTodo: setEditingTodo
    }
)(TodoList);