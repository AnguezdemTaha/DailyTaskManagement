import React from 'react';
import {View,Text,Button,KeyboardAvoidingView,TextInput,TouchableOpacity}from 'react-native';

const settings=props=>{
    const titre=props.route.params.tittle;
    return(
        <View style={{flex:1}}><Text style={{fontSize:30}}>Screen dial settings</Text>
        <Text>{titre}</Text>
        <KeyboardAvoidingView style={{flex:1}}>
                 <KeyboardAvoidingView style={{flex:0.5,backgroundColor:'#fcce58',borderRadius:25}}>
                     <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>add the name of your domain</Text></View>
                     <View style={{flex:0.2,flexDirection:'row',justifyContent:'center'}}><TextInput placeholder='Your answer'  style={{flex:0.8,borderRadius:20,backgroundColor:'white',textAlign:'center',fontSize:20}}/></View>
                     
                    <KeyboardAvoidingView style={{flex:0.14,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>Description</Text></KeyboardAvoidingView>
                    <KeyboardAvoidingView style={{flex:0.34,flexDirection:'row',justifyContent:'center'}}><TextInput placeholder='Your answer' multiline={true} style={{flex:0.8,borderRadius:20,backgroundColor:'white',textAlign:'center',textAlignVertical:'top',fontSize:20}}/></KeyboardAvoidingView>
                    <View style={{flex:0.08,flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:5}}><TouchableOpacity onPress={()=>props.navigation.navigate("thirdScreen")} style={{flex:0.15,backgroundColor:'#996633',borderRadius:20,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20}}>Add</Text></TouchableOpacity></View>
                 </KeyboardAvoidingView>
             </KeyboardAvoidingView>
        </View>
    )
}
