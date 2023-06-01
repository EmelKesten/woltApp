import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { headerNotShown } from "./settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTab from "../components/BottomTab";
import { StatusBar } from "react-native";

import MyShifts from "../screens/myShifts/MyShifts";
import AvalibleShifts from "../screens/avalibleShifts/AvalibleShifts";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

const Index = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator screenOptions={headerNotShown} tabBar={BottomTab}>
        <Tab.Screen name="My Shifts" component={MyShifts} />
        <Tab.Screen name="Avalible Shifts" component={AvalibleShifts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Index;
