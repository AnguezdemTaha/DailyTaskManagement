import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import { create } from "react-test-renderer";
import firstScreen from "../screens/firstScreen";
import secondScreen from "../screens/secondScreen";
import thirdScreen from "../screens/thirdScreen";
import fourthScreen from '../screens/fourthScreen';
import settings from "../screens/settings";
const myStack=createStackNavigator();
const AppNavigator=props=>{
    return <NavigationContainer>
        <myStack.Navigator screenOptions={{
            headerShown: false,
            
            }}
>
            
            <myStack.Screen name="firstScreen" component={firstScreen}/>
            
            <myStack.Screen name="secondScreen" component={secondScreen}/>
            <myStack.Screen name="thirdScreen" component={thirdScreen}/>
            <myStack.Screen name="settings" component={settings}/>
            <myStack.Screen name="fourthScreen" component={fourthScreen}/>
        </myStack.Navigator>
    </NavigationContainer>;
}   
export default AppNavigator;