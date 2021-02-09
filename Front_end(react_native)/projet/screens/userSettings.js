import React, { Component } from 'react';
import {View, Text,ImageBackground,TextInput,TouchableOpacity} from 'react-native';

import axios from 'axios';

export default class thirdScreen extends Component { 
    initialState = {
        username:'',
        mail:'',
        password:'',
        passwordold:'',
        passwordoldreal:'',
        
        //otherattr:''
      }
    constructor(props) {
        super(props);
        this.state=this.initialState;
        //this.userChange = this.userChange.bind(this);
        this.submitUser = this.submitUser.bind(this);
      }
    
    submitUser(event) {
        event.preventDefault();
        console.log("..........."+this.state.username);
        const user={
          username:this.state.username,
          password:this.state.password,
          mail:this.state.mail,
          //autre:this.state.autre
        }
        if(this.state.passwordold==this.state.passwordoldreal){
            axios.put("http://10.0.2.2:3000/users", user)
            .then(response => {
            if (response.data.message != null) {
                //add if else
                //this.setState(this.initialState);
                alert("user modifiée avec succès");
                //ecrir dans l'ecrant

                //alert("user deja existe");
            }
            else{
                this.setState(this.initialState);
                //alert("user deja existe");
                //ecrir dans l'ecrant
            }
            })
        }
        else{
            alert("incorrect password");
            this.props.navigation.navigate('thirdScreen');
            //ecrir dans l'ecrant 
        }
      }

    
    componentDidMount() {
        console.log("we are here");
        
      //get
        fetch('http://10.0.2.2:3000/session') //a modifier :  only categorie of specific user
            .then((response) => response.json())
            .then((responseData) => {
          console.log("we are here");
          console.log(responseData);
          this.setState({
            username: responseData.username,
            mail: responseData.mail,
            password: responseData.password,
            passwordold:'',
            passwordoldreal: responseData.password,
            //categories: responseData  //c'est le vri
            //categories: [{"id":"x4","image":sports,"title":"testcategories"}]
                });
            })
            .catch(err => console.error(err));
      }

    render() {
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../assets/img.jpg')} style={{width:'100%',height:'100%',justifyContent:'center'}}>
                <View style={{flex:0.6,justifyContent:'space-around'}}>
                <Text style={{fontSize:30,fontStyle:"italic",color:'orange',textAlign:'center'}}>Your informations</Text>
                    
                    <View style={{flex:0.13,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:0.8}}>
                        <TextInput fontStyle='italic' placeholder="Username" name="username" value = {this.state.username} onChangeText={(username) => this.setState({username})} placeholderTextColor="orange" style={{borderBottomWidth:1,borderBottomColor:'white',color:'white'}}/>
                        </View>
                    </View>
                    <View style={{flex:0.13,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:0.8}}>
                        <TextInput fontStyle='italic' placeholder="Email" name="mail" value = {this.state.mail} onChangeText={(mail) => this.setState({mail})} placeholderTextColor="orange" style={{borderBottomWidth:1,borderBottomColor:'white',color:'white'}}/>
                        </View>
                    </View>
                    <View style={{flex:0.13,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:0.8}}>
                        <TextInput fontStyle='italic' secureTextEntry={true} placeholder="Password" name="password" value = {this.state.password} onChangeText={(password) => this.setState({password})} placeholderTextColor="orange" style={{borderBottomWidth:1,borderBottomColor:'white',color:'white'}}/>
                        </View>
                    </View>
                    <View style={{flex:0.13,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:0.8}}>
                        <TextInput fontStyle='italic' secureTextEntry={true} placeholder="Confirm Old password" name="passwordold" value = {this.state.passwordold} onChangeText={(passwordold) => this.setState({passwordold})} placeholderTextColor="orange" style={{borderBottomWidth:1,borderBottomColor:'white',color:'white'}}/>
                        </View>
                    </View>

                </View>
                <View style={{flex:0.2}}>
                    <View style={{flex:0.35,flexDirection:'row',justifyContent:'center'}}>
                    <TouchableOpacity onPress={this.submitUser} style={{flex:0.3,backgroundColor:'orange',borderRadius:15,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:25,color:'white'}}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
      
      </View>
     )
}
}