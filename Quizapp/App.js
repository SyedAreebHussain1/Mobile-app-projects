import { createStackNavigator } from "@react-navigation/stack";
import AppRoutes from "./config/AppRoutes";

const Stack = createStackNavigator();
export default function App() {
  return <AppRoutes Stack={Stack} />
}
