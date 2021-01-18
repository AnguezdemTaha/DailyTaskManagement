<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import {View, Text,ImageBackground,TextInput,TouchableOpacity} from 'react-native';

//import { Card, Form, Col , Button} from 'react-bootstrap';
import axios from 'axios';
//const secondScreen=(props)=>{
export default class settings extends Component {

    initialState = {
        username:'', //normalement it's varibale current user username
        mail:'',
        password:'',

        passwordold:'',
        realpasswordold:'',
        //passwordc:'',
        
        //otherattr:''
      }

    constructor(props) {
        super(props);
        this.state=this.initialState;
        this.userChange = this.userChange.bind(this);
        this.submituser = this.submitUser.bind(this);
      }
    

    componentDidMount() {
        
      //get
        fetch('http://10.0.2.2:3000/users/user/getcurrentuser') //a modifier :  only categorie of specific user
            .then((response) => response.json())
            .then((responseData) => {
          this.setState({
            realpasswordold:responseData.pass,
            username:responseData.username, //normalement it's varibale current user username
            mail:responseData.mail,
            });
            })
            .catch(err => console.error(err));
        
    }


    submitUser(event) {
        event.preventDefault();
        const user={
          username:this.state.username,
          password:this.state.password,
          mail:this.state.mail,
          //autre:this.state.autre
        }
        if(realpasswordold == passwordold){
            axios.put("http://10.0.2.2:3000/users", user)
            .then(response => {
            if (response.data != null) {
                //add if else §§
                this.setState(this.initialState);
                alert("user enregistrée avec succès");
                //ecrir dans l'ecrant

                //alert("user(informations) deja existe");
            }
            else{
                this.setState(this.initialState);
                
                //ecrir dans l'ecrant
            }
            })
        }
       
      }

    //onPress={()=>this.props.navigation.navigate('thirdScreen')} : navigation to anohter screen

    userChange(event) {
        this.setState (
          { [event.target.name]:event.target.value }
        ) ;
      }


    render() {
      return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../assets/img.jpg')} style={{width:'100%',height:'100%',justifyContent:'center'}}>
                <View style={{flex:0.6,justifyContent:'space-around'}}>
                  
                    <View style={{flex:0.13,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:0.8}}>
                            <TextInput  fontStyle='italic' placeholder="Full Name" placeholderTextColor="orange" style={{borderBottomWidth:1,borderBottomColor:'white',color:'white'}}/>
                        </View>
                    </View>
                    <View style={{flex:0.13,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:0.8}}>
                        <TextInput fontStyle='italic' placeholder="Username" name="username" value = {this.state.username} onChange = {this.userChange} placeholderTextColor="orange" style={{borderBottomWidth:1,borderBottomColor:'white',color:'white'}}/>
                        </View>
                    </View>
                    <View style={{flex:0.13,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:0.8}}>
                        <TextInput fontStyle='italic' placeholder="Email" name="mail" value = {this.state.mail} onChange = {this.userChange} placeholderTextColor="orange" style={{borderBottomWidth:1,borderBottomColor:'white',color:'white'}}/>
                        </View>
                    </View>
                    <View style={{flex:0.13,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:0.8}}>
                        <TextInput fontStyle='italic' secureTextEntry={true} placeholder="Password" name="password" value = {this.state.password} onChange = {this.userChange} placeholderTextColor="orange" style={{borderBottomWidth:1,borderBottomColor:'white',color:'white'}}/>
                        </View>
                    </View>
                    <View style={{flex:0.13,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:0.8}}>
                        <TextInput fontStyle='italic' secureTextEntry={true} placeholder="Old Password" name="passwordold" value = {this.state.passwordold} onChange = {this.userChange} placeholderTextColor="orange" style={{borderBottomWidth:1,borderBottomColor:'white',color:'white'}}/>
                        </View>
                    </View>
                    
                 
                </View>
                <View style={{flex:0.2}}>
                    <View style={{flex:0.35,flexDirection:'row',justifyContent:'center'}}>
                        <TouchableOpacity onPress={this.submituser} style={{flex:0.3,backgroundColor:'orange',borderRadius:15,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:25,color:'white'}}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
      
      </View>
     )
    }
>>>>>>> b7bdc9e28bfa1dfa44012bf110422dfa359daf04
}
