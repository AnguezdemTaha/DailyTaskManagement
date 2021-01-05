import React from 'react';
import {View,Image,Text,FlatList,ImageBackground,TextInput,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DOMAINS} from '../data/dummydata';
const thirdScreen=props=>{
    
      const renderItem = ( itemData ) => {
    
    
        return <TouchableOpacity onPress={()=>props.navigation.navigate('fourthScreen',{imagee:itemData.item.image,domainId:itemData.item.id})} style={{flex:1,margin:15,height:160,borderRadius:40,overflow:'hidden'}}>
          <ImageBackground source={itemData.item.image} style={{height:'100%',width:'100%',justifyContent:'flex-end',alignItems:'center'}}>
          <Text style={{color:'white',fontSize:30,textAlign:'center'}}>{itemData.item.title}</Text>
          </ImageBackground>
          </TouchableOpacity>;
          
      };

    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../assets/img.jpg')} style={{width:'100%',height:'100%'}}>
            <View style={{ flex:0.136,justifyContent:'flex-end',marginBottom:10}}>
                 <View style={{flex:0.55,flexDirection:'row'}}>
                   <View style={{flex:0.15,alignItems:'center',justifyContent:'center'}}>
                   <TouchableOpacity onPress={()=>console.log("hi")}>
                   <Icon name="search"  size={30} style={{alignItems:'center'}} color="orange"/>
                   </TouchableOpacity>
                   </View>
                   <View style={{flex:0.85}}>
                   
                   <TextInput placeholder="Look for a domain" placeholderTextColor='white' style={{flex:1,borderRadius:20}} backgroundColor='gray'/>
                   
                   </View>
                 </View>
                 </View>
                 <View style={{flex:0.864,justifyContent:'space-around'}}>
                   
                <FlatList
        data={DOMAINS}
        renderItem={renderItem}
        keyExtractor={(item,index) => item.id}
        numColumns={2}
      />

                </View>
            </ImageBackground>

        </View>
    )
}
export default thirdScreen;