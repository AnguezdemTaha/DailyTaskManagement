import React from 'react';
import  {View, Text,ImageBackground,FlatList,TouchableOpacity} from 'react-native';
import {Goals} from '../goals/goalsdata';
const fourthScreen=props=>{
    const domainIdd=props.route.params.domainId;
    const displayedGoals=Goals.filter(goal=>goal.domainId.indexOf(domainIdd)>=0);
    const renderItem=(itemData)=>{
        return(
            <TouchableOpacity style={{height:50,justifyContent:'center',marginBottom:15,backgroundColor:'#666699',borderRadius:15}}>
                
                <Text style={{marginLeft:10,color:'white'}}>{itemData.item.title}</Text>
                
                </TouchableOpacity>
            
        )
    }
     return (
     <View><ImageBackground source={props.route.params.imagee} style={{height:'100%',width:'100%'}}>
         <View style={{flex:1,justifyContent:'center'}}>
            <View style={{flex:0.8}}>
                <FlatList data={displayedGoals} renderItem={renderItem} 
                keyExtractor={(item,index) => item.id}/>
            </View>
         </View>
         
         
         
         </ImageBackground></View>)
}
export default fourthScreen;