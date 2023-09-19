import "react-native-gesture-handler";
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import HomeMain from "../src/component/Home/index.js";
import QuizApp from "../src/component/quizApp/index.js";
import ChooseMain from "../src/component/Choose/index.js";
import PlaygroundMain from "../src/component/playground/index.js";

const AppRoutes = ({ Stack }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeMain} />
                <Stack.Screen name="Quiz" component={QuizApp} />
                <Stack.Screen name="Select Level" component={ChooseMain} />
                <Stack.Screen name="Play Now" component={PlaygroundMain} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes