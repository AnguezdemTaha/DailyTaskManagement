import React from 'react';
import {View,Text,FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
const thirdScreen=props=>{
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Workout',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Studies',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Business',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d76',
          title: 'Teaching',
        },
        
      ];
      const renderItem = ({ item }) => (
    
    
        <TouchableOpacity style={{height:40,marginBottom:10,backgroundColor:'red',borderRadius:10,justifyContent:'center'}}><Text>{item.title}</Text></TouchableOpacity>
    
  );

    return(
        <View style={{flex:1}}>
            <LinearGradient style={{flex:1}} colors={[ 'rgba(255, 165, 0,0.5)',"rgba(255, 102, 0,0.8)"]}>
                <View style={{flex:0.2,justifyContent:"center"}}>
                  <Icon name="search" size={30} color="#900"/>
                    <View style={{flex:0.5,flexDirection:'row'}}>
                        <View style={{flex:0.6,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'gray'}}>First, chose a domain:</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:0.8}}>
                <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      />

                </View>
            </LinearGradient>

        </View>
    )
}
export default thirdScreen;