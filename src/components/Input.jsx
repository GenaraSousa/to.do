import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function Input({...rest}) {
    return (
        <TextInput style={styles.container}
            {...rest}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 50,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 10,
        backgroundColor: '#fff', 
        borderWidth: 1.5,
        borderColor: '#1723be',
        borderRadius: 10,
        marginRight: 5,
    }
})
