import { View, TextInput, StyleSheet, Text } from 'react-native'
import React from 'react'

const Input = ({ handleChangeText, error, state }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                value={state}
                underlineColorAndroid="transparent"
                placeholder="Enter Name"
                autoCapitalize="none"
                onChangeText={handleChangeText} />
            {error ? <Text style={styles.text}>{error}!</Text> : ''}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
    },
    text: {
        margin: 5,
        color: 'red'
    },
    input: {
        margin: 5,
        height: 40,
        padding: 4,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    },
    submitButton: {
        backgroundColor: 'black',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})
export default Input