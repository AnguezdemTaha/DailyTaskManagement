
import React from 'react';
import {View,Text,ImageBackground,Button,TouchableOpacity,TextInput,KeyboardAvoidingView} from 'react-native';

//dd
const firstScreen=props=>{ 

    
  return (
      
    <View style={{flex:1}}>
      <ImageBackground source={require('../assets/img.jpg')} style={{width:'100%',height:'100%'}}>
        <View style={{flex:0.5,justifyContent:'center'}}>
          <View style={{flex:0.6,flexDirection:'row',justifyContent:'center'}}>
            <View style={{flex:0.8,justifyContent:'center',alignItems:"center"}}>
               <Text style={{fontSize:30,fontStyle:"italic",color:'orange',textAlign:'center'}}>Have a successful life, organize it.</Text>
               <Text style={{fontSize:30,fontStyle:"italic",color:'orange',textAlign:'center'}}>Use this app to achieve your goals</Text>
            </View>
          </View>
        </View>
        <View style={{flex:0.55}}>
          <KeyboardAvoidingView style={{flex:0.55,justifyContent:'center'}}>
              <KeyboardAvoidingView style={{flex:0.55,justifyContent:'space-around'}}>
            <View style={{flex:0.48,flexDirection:'row',justifyContent:"center"}}>
                
                <KeyboardAvoidingView style={{flex:0.7}}><TextInput placeholder="Username" placeholderTextColor="gray" style={{flex:1,borderBottomWidth:1.5 ,borderBottomColor:"orange",color:"white",fontSize:15}} /></KeyboardAvoidingView>
            </View>
            <View style={{flex:0.48,flexDirection:'row',justifyContent:"center"}}>
                
                <KeyboardAvoidingView style={{flex:0.7}}><TextInput secureTextEntry={true} placeholder="Password" placeholderTextColor="gray" style={{flex:1,borderBottomWidth:1.5,borderBottomColor:'orange',color:"white",fontSize:15}} /></KeyboardAvoidingView>
            </View>
          </KeyboardAvoidingView>
              
              
          </KeyboardAvoidingView>
          <View style={{flex:0.18,justifyContent:'space-between'}}>
            <View style={{flex:0.9,flexDirection:'row',justifyContent:'center'}}>
              
            <TouchableOpacity  onPress={()=>props.navigation.navigate('thirdScreen')}style={{flex:0.3,borderRadius:20,backgroundColor:'orange',justifyContent:'center',alignItems:'center'}}>
            <KeyboardAvoidingView>
            
              <Text style={{color:'white',fontSize:22}}>Sign In</Text>
              </KeyboardAvoidingView>
              </TouchableOpacity>
              
              
              </View>
              <TouchableOpacity onPress={()=>props.navigation.navigate('secondScreen')} style={{alignItems:'center'}}><Text style={{color:'white',fontSize:15}}>Sign up</Text></TouchableOpacity>
              </View>
        </View>
      </ImageBackground>
      
    </View>
  );
};
export default firstScreen;