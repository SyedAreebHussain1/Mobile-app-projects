import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import QuizApp from "./src/component/quizApp/index.js";
import PlaygroundMain from "./src/component/playground/index.js";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Quiz App" component={QuizApp} />
        <Stack.Screen name="PlaygroundMain" component={PlaygroundMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
