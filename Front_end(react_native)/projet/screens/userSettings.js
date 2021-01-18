import React from 'react';
import {View, Text,ImageBackground,TextInput,TouchableOpacity} from 'react-native';

const userSettings=(props)=>{
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../assets/img.jpg')} style={{width:'100%',height:'100%',justifyContent:'center'}}>
                <View style={{flex:0.6,justifyContent:'space-around'}}>
                    <Text style={{fontSize:25,color:'white'}}>Page dial settings dial l user</Text>
                    <View style={{flex:0.13,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:0.8}}>
                            <TextInput  fontStyle='italic' placeholder="Full Name" placeholderTextColor="orange" style={{borderBottomWidth:1,borderBottomColor:'white',color:'white'}}/>
                        </View>
                    </View>
                    <View style={{flex:0.13,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:0.8}}>
                        <TextInput fontStyle='italic' placeholder="Username" placeholderTextColor="orange" style={{borderBottomWidth:1,borderBottomColor:'white',color:'white'}}/>
                        </View>
                    </View>
                    <View style={{flex:0.13,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:0.8}}>
                        <TextInput fontStyle='italic' placeholder="Email" placeholderTextColor="orange" style={{borderBottomWidth:1,borderBottomColor:'white',color:'white'}}/>
                        </View>
                    </View>
                    <View style={{flex:0.13,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:0.8}}>
                        <TextInput fontStyle='italic' secureTextEntry={true} placeholder="Password" placeholderTextColor="orange" style={{borderBottomWidth:1,borderBottomColor:'white',color:'white'}}/>
                        </View>
                    </View>
                    <View style={{flex:0.13,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:0.8}}>
                        <TextInput fontStyle='italic' secureTextEntry={true} placeholder="Confirm password" placeholderTextColor="orange" style={{borderBottomWidth:1,borderBottomColor:'white',color:'white'}}/>
                        </View>
                    </View>

                </View>
                <View style={{flex:0.2}}>
                    <View style={{flex:0.35,flexDirection:'row',justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('thirdScreen')} style={{flex:0.3,backgroundColor:'orange',borderRadius:15,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:25,color:'white'}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
      
      </View>
     )
}
export default userSettings;