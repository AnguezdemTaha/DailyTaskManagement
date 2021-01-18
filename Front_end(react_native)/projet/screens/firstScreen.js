import React from 'react';

import {View,Text,ImageBackground,Button,TouchableOpacity,TextInput,KeyboardAvoidingView} from 'react-native';

import axios from 'axios';
//dd
export default class firstScreen extends Component { 

  initialState = {
    username:'',
    
    password:'',
    
    
    //otherattr:''
  }
constructor(props) {
    super(props);
    this.state=this.initialState;
    this.userChange = this.userChange.bind(this);
    this.submituser = this.submitUser.bind(this);
  }

submitUser(event) {
    event.preventDefault();
    console.log("must writ usename");
    console.log(this.state.username);
    console.log(this.state.password);
    const user={
      username:this.state.username,
      password:this.state.password,
      //mail:this.state.mail,
      //autre:this.state.autre
    }
    
        axios.post("http://10.0.2.2:3002/users/login", user)
        .then(response => {
          console.log("tets"+response.data);
        if (response.data != null) {
          //to add a if else (if the data user null or not)
            this.setState(this.initialState);
            alert("succé");
            //ecrir dans l'ecrant

            //alert("informations incorectes");
        }
        else{
            this.setState(this.initialState);
            
            //ecrir dans l'ecrant
        }
        })
    
    
  }


//pour logout !!!!!
/*submitUser(event) {
  event.preventDefault();
  
  
      axios.post("http://10.0.2.2:3000/users/logout")
      .then(response => {
      if (response.data != null) {
          //this.setState(this.initialState);
          //alert("succé");
          //ecrir dans l'ecrant
      }
      else{
          //this.setState(this.initialState);
          //alert("informations incorectes");
          //ecrir dans l'ecrant
      }
      })  
}*/

//onPress={()=>this.props.navigation.navigate('thirdScreen')} : navigation to anohter screen

userChange(event) {
    this.setState (
      { [event.target.name]:event.target.value }
    ) ;
  }
    
  render() {
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
                
                <KeyboardAvoidingView style={{flex:0.7}}><TextInput placeholder="Username" name="username" value = {this.state.username} onChange = {this.userChange} placeholderTextColor="gray" style={{flex:1,borderBottomWidth:1.5 ,borderBottomColor:"orange",color:"white",fontSize:15}} /></KeyboardAvoidingView>
            </View>
            <View style={{flex:0.48,flexDirection:'row',justifyContent:"center"}}>
                
                <KeyboardAvoidingView style={{flex:0.7}}><TextInput secureTextEntry={true} placeholder="Password" name="password" value = {this.state.password} onChange = {this.userChange} placeholderTextColor="gray" style={{flex:1,borderBottomWidth:1.5,borderBottomColor:'orange',color:"white",fontSize:15}} /></KeyboardAvoidingView>
            </View>
          </KeyboardAvoidingView>
              
              
          </KeyboardAvoidingView>
          <View style={{flex:0.2,justifyContent:'space-between'}}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
              
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('thirdScreen')}style={{flex:0.3,borderRadius:20,backgroundColor:'orange',justifyContent:'center',alignItems:'center'}}>
            <KeyboardAvoidingView>
            
              <Text onPress={this.submituser} style={{color:'white',fontSize:22}}>Sign In</Text>
              </KeyboardAvoidingView>
              </TouchableOpacity>
              
              
              </View>
              <View style={{justifyContent:'center',flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('secondScreen')} style={{flex:0.2,marginTop:5,alignItems:"center",backgroundColor:'white',borderRadius:15}} ><Text style={{color:'orange',fontSize:15}}>Sign up</Text></TouchableOpacity>
                
              </View>
              <View style={{alignItems:'center'}}>
                <TouchableOpacity><Text style={{color:'white',fontSize:15}}>Password Forgotten?</Text></TouchableOpacity></View>
              </View>
        </View>
      </ImageBackground>
      
    </View>
  );
  }
};
