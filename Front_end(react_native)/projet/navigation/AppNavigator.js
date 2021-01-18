import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import { create } from "react-test-renderer";
import firstScreen from "../screens/firstScreen";
import secondScreen from "../screens/secondScreen";
import thirdScreen from "../screens/thirdScreen";
import fourthScreen from '../screens/fourthScreen';
<<<<<<< HEAD
import settings from '../screens/settings';
import userSettings from '../screens/userSettings';
=======
import settings from "../screens/settings";
>>>>>>> b7bdc9e28bfa1dfa44012bf110422dfa359daf04
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
            <myStack.Screen name="userSettings" component={userSettings}/>
            <myStack.Screen name="fourthScreen" component={fourthScreen}/>
        </myStack.Navigator>
    </NavigationContainer>;
}   
export default AppNavigator;