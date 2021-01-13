import React,{useState} from 'react';
import {View,Image,Text,Modal,FlatList,ImageBackground,TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import {DOMAINS} from '../data/dummydata';
const thirdScreen=props=>{
  const [modalOpen, setModalOpen] = useState(false);
      const renderItem = ( itemData ) => {
    
    
        return <TouchableOpacity onPress={()=>props.navigation.navigate('fourthScreen',{imagee:itemData.item.image,domainId:itemData.item.id})} style={{flex:1,margin:15,height:160,borderRadius:40,overflow:'hidden'}}>
          <ImageBackground source={itemData.item.image} style={{height:'100%',width:'100%',justifyContent:'flex-end',alignItems:'center'}}>
          <Text style={{color:'white',fontSize:30,textAlign:'center'}}>{itemData.item.title}</Text>
          </ImageBackground>
          <View style={{flex:0.1,justifyContent:'flex-end',alignItems:'center'}}>
                     <Icon name="trash-o info-circle"  size={30} style={{alignItems:'center'}} color="orange"/>
          </View>
          <View style={{flex:0.1,justifyContent:'flex-end',alignItems:'center'}}>
                     <Icon name="trash-o info-circle"  size={30} style={{alignItems:'center'}} color="orange"/>
          </View>
          </TouchableOpacity>;
          
      };

    return(
        <View style={{flex:1}}>
          <Modal visible={modalOpen} animationType="slide" transparent={true}>
             <Modal visible={true} animationType='fade' transparent={true} >
             <View style={{flex:1,backgroundColor:'black',opacity:0.65}}>

             </View>
             </Modal>
             <KeyboardAvoidingView style={{flex:1,justifyContent:'center'}}>
                 <KeyboardAvoidingView style={{flex:0.5,backgroundColor:'#fcce58',borderRadius:25}}>
                     <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>add the name of your domain</Text></View>
                     <View style={{flex:0.2,flexDirection:'row',justifyContent:'center'}}><TextInput placeholder='Your answer'  style={{flex:0.8,borderRadius:20,backgroundColor:'white',textAlign:'center',fontSize:20}}/></View>
                     
                    <KeyboardAvoidingView style={{flex:0.14,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>Description</Text></KeyboardAvoidingView>
                    <KeyboardAvoidingView style={{flex:0.34,flexDirection:'row',justifyContent:'center'}}><TextInput placeholder='Your answer' multiline={true} style={{flex:0.8,borderRadius:20,backgroundColor:'white',textAlign:'center',textAlignVertical:'top',fontSize:20}}/></KeyboardAvoidingView>
                    <View style={{flex:0.08,flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:5}}><TouchableOpacity onPress={()=>setModalOpen(false)} style={{flex:0.15,backgroundColor:'#996633',borderRadius:20,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20}}>Add</Text></TouchableOpacity></View>
                 </KeyboardAvoidingView>
             </KeyboardAvoidingView>
        </Modal>
            <ImageBackground source={require('../assets/img.jpg')} style={{width:'100%',height:'100%'}}>
            <View style={{ flex:0.2,justifyContent:'space-between',marginBottom:10}}>
                 <View style={{flex:0.7,justifyContent:'center'}}>
                   <View style={{flex:0.7,flexDirection:'row',justifyContent:'flex-end'}}>
                     <View style={{flex:0.1,justifyContent:'flex-end',alignItems:'flex-end'}}>
                      <Icon name="user-circle" size={30} style={{alignItems:'center',marginLeft:-10}} color="orange"/>
                     </View>
                     <View style={{flex:0.1,justifyContent:'flex-end',alignItems:'flex-end'}}>
                     <Icon name="cog" onPress={()=>props.navigation.navigate("settings")} size={30} style={{alignItems:'center',marginRight:10}} color="orange"/>
                     </View>
                     <View style={{flex:0.1,justifyContent:'flex-end',alignItems:'center'}}>
                     <Icon name="sign-out"  size={30} style={{alignItems:'center'}} color="orange"/>
                     </View>
                   </View>
                 </View>
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
                <View style={{flex:0.1,justifyContent:'center',alignItems:'flex-end'}}>
                <Icon name="plus" onPress={()=>setModalOpen(true)} size={30} style={{marginRight:10}} color="orange"/>
                </View>
            </ImageBackground>

        </View>
    )
}
export default thirdScreen;