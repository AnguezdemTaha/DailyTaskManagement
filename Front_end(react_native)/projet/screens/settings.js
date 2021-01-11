import React from 'react';
import {View,Text,Button}from 'react-native';

const settings=props=>{
    return(
        <View><Text style={{fontSize:30}}>Screen dial settings</Text>
        <Button onPress={()=>props.navigation.navigate("thirdScreen")} title='add'/>
        </View>
    )
}
export default settings;