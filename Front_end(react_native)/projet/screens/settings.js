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
}
