import React, { Component } from 'react';
import {View,Text,Button,ImageBackground,KeyboardAvoidingView,TextInput,TouchableOpacity}from 'react-native';

import axios from 'axios';

export default class settings extends Component { 
    

  
    initialState = {
        Description:'',
        categorieText:'',
        
        //otherattr:''
      }
    constructor(props) {
        super(props);
        //this.state=this.initialState;
        
        const categorie=this.props.route.params.categorie;
        this.state= {
          Description:categorie.discription,
          categorieText:categorie.categorieText,
        }
        this.updateCategorie = this.updateCategorie.bind(this);
        //this.submituser = this.submitUser.bind(this);
      }

    
    updateCategorie(event) {
        event.preventDefault();
        const categorie={
            categorieText:this.state.categorieText,
            discription:this.state.Description,
            //mail:this.state.mail,
            //autre:this.state.autre
          }
        
            axios.put("http://10.0.2.2:3000/categories/"+this.props.route.params.categorie._id, categorie)
            .then(response => {
            if (response.data.message != null) {
                //add if else
                //this.setState(this.initialState);
                alert("categorie modifée avec succès");
                this.props.navigation.navigate('thirdScreen');
                //ecrir dans l'ecrant

                //alert("user deja existe");
            }
            else{
                const categorie1=this.props.route.params.categorie;
                
                this.setState({Description:categorie1.discription,
                  categorieText:categorie1.categorieText});
                //alert("user deja existe");
                //ecrir dans l'ecrant
            }
            })
        
      }


    render() {
    
    return(
      
        <View style={{flex:1}}>
        <ImageBackground source={this.props.route.params.imagee} style={{width:'100%',height:'100%'}}>
        <Text></Text>
        <KeyboardAvoidingView style={{flex:1}}>
                 <KeyboardAvoidingView style={{flex:0.5,backgroundColor:'#fcce58',borderRadius:25}}>
                     <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>add the name of your domain</Text></View>
                     <View style={{flex:0.2,flexDirection:'row',justifyContent:'center'}}><TextInput placeholder='Your answer'  name="categorieText" value = {this.state.categorieText} onChangeText={(categorieText) => this.setState({categorieText})} style={{flex:0.8,borderRadius:20,backgroundColor:'white',textAlign:'center',fontSize:20}}/></View>
                     
                    <KeyboardAvoidingView style={{flex:0.14,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>Description</Text></KeyboardAvoidingView>
                    <KeyboardAvoidingView style={{flex:0.34,flexDirection:'row',justifyContent:'center'}}><TextInput placeholder='Your answer' name="Description" value = {this.state.Description} onChangeText={(Description) => this.setState({Description})} multiline={true} style={{flex:0.8,borderRadius:20,backgroundColor:'white',textAlign:'center',textAlignVertical:'top',fontSize:20}}/></KeyboardAvoidingView>
                    <View style={{flex:0.15,flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:5}}><TouchableOpacity onPress={this.updateCategorie} style={{flex:0.25,backgroundColor:'#996633',borderRadius:20,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20}}>Update</Text></TouchableOpacity></View>
                 </KeyboardAvoidingView>
             </KeyboardAvoidingView>
        </ImageBackground>
        </View>
    )
}
}