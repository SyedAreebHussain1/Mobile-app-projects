import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import ButtonStart from './ButtonStart'
import Input from './Input'
const HomeView = () => {
    const [state, setState] = useState("")
    const [error, setError] = useState("")
    const navigation = useNavigation();

    function handleNavigate() {
        if (state !== "" && state.length > 2) {
            navigation.navigate("Select Level", { userName: state })
            setState('')
            setError('')
        } else {
            setError("Name are requried")
        }
    }
    function handleChangeText(text) {
        if (text) {
            setState(text)
        }
    }
    return (
        <View>
            <Input error={error} state={state} handleChangeText={handleChangeText} />
            <ButtonStart handleNavigate={handleNavigate} />
        </View>
    )
}

export default HomeView