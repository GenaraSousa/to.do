import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export default function Todo({ todo, ...rest }) {
    return (
        <TouchableOpacity
            style={[styles.todo, todo.done && { backgroundColor: '#ffdad3' }]}
            {...rest} activeOpacity={0.5}
        >
            <Text style={[styles.todoText, todo.done && { textDecorationLine: 'line-through' }]}>
                {todo.text}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    todo: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        minHeight: 50,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#e7e8fa',
    },
    todoText: {
        color: '#120841',
        fontSize: 18,
    }
});
