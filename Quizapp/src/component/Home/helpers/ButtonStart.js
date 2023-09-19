import { Text, StyleSheet, Pressable } from 'react-native';
import React from 'react'

const ButtonStart = ({ handleNavigate }) => {
    return <Pressable style={styles.button} onPress={handleNavigate}>
        <Text style={styles.text}>Start Quiz</Text>
    </Pressable>
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        padding: 10,
        margin: 15,
        height: 40,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
export default ButtonStart