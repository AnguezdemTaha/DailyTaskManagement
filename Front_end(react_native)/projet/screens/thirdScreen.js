import React,{useState} from 'react';
import { Component } from 'react'
import {View,Image,Text,Modal,FlatList,ImageBackground,TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import {DOMAINS} from '../data/dummydata';


import sports from '../assets/sports.jpg';
//import mentalhealth from '../assets/mentalhealth.jpg';
//import spirituality from '../assets/spirituality.jpg';
import studies from '../assets/studies.jpeg';
import family from '../assets/family.jpg';
//import skills from '../assets/skills.png';
//import music from '../assets/music.jpg';
//import sleep from '../assets/sleep.jpg';
//import reading from '../assets/reading.jpg';
//import travel from '../assets/travel.jpg';
import books from '../assets/books.jpg'


import axios from 'axios';
export default class thirdScreen extends Component { 
  
  initialState = {
    modalOpen:false,

    Description:'',
    categorieText:'',
    
  }
  constructor(props) {
    super(props);
    this.state=this.initialState;

    this.deleteCategorie = this.deleteCategorie.bind(this);
    this.createCategorie = this.createCategorie.bind(this);
    //this.submituser = this.submitUser.bind(this);
  }

  
  createCategorie(event) {
    event.preventDefault();
    console.log("we are here pslsplasplsap");
    const categorie={
      categorieText:this.state.categorieText,
      discription:this.state.Description,
      //mail:this.state.mail,
      //autre:this.state.autre
    }
    
        axios.post("http://10.0.2.2:3000/categories", categorie)
        .then(response => {
        if (response.data._id != null) {
            //add if else
            this.setState(this.initialState);
            alert("categorie enregistrée avec succès");
            //ecrir dans l'ecrant

            //alert("user deja existe");
        }
        else{
          this.setState(this.initialState);
          console.log("we are here pslsplasplsap222");
            
            //alert("user deja existe");
            //ecrir dans l'ecrant
        }
        })
  }

  componentDidMount() {
    console.log("on va faire le get categories corespond a un user");
    /*this.setState({categories: [{"id":"x4","image":music,"title":"testcategories"},
                              {"id":"x5","image":music,"title":"testcategories"} ],
                  });*/
  //get
    fetch('http://10.0.2.2:3000/categories/') //a modifier :  only categorie of specific user
        .then((response) => response.json())
        .then((responseData) => {
      console.log("we are here");
      console.log(responseData);
      this.setState({
        
        categories: responseData  //c'est le vri
        //categories: [{"id":"x4","image":sports,"title":"testcategories"}]
            });
        })
        .catch(err => console.error(err));
  }


  deleteCategorie = (categorieId) => {
		axios.delete("http://10.0.2.2:3000/categories/"+categorieId)
		  .then(response => {
			/*if(response.data != null){
			  this.setState({"show":true});
			  this.setState({
				voitures: this.state.voitures.filter(voiture => voiture.id !== voitureId)
			  });*/
			if(response.data != null){
				//this.setState({"show":true});
        //setTimeout(() => this.setState({"show":false}), 3000);
        
        alert("vous voulait vraiment supprimer cette categorie ?");
        console.log("deleting ..."+response.data);
				/*this.setState({
				  categories: this.state.categorie.filter( categorie=> categorie._id !== categorieId)
			});*/
	  
			}else {
			  //error
			}
		  });
	  };
  
    logoutUser(event) {
      event.preventDefault();
      
      //this.props.navigation.navigate('firstdScreen');

          axios.post("http://10.0.2.2:3000/users/logout")
          .then(response => {
          if (response.data != null) {
              //this.setState(this.initialState);
              //alert("succé");
              //ecrir dans l'ecrant
              this.props.navigation.navigate('firstdScreen');
          }
          else{
              //this.setState(this.initialState);
              //alert("informations incorectes");
              //ecrir dans l'ecrant
          }
          })  
    }


    imagechose = (imageText) => {
        if(imageText=="sports"){
          return sports;
        }
        if(imageText=="studies"){
          return studies;
        }
        if(imageText=="family"){
          return family;
        }
        else{
          return books;
        }
    }
    //onPress={this.deleteCategorie(itemData.item._id)} : on delete
  render() {

  //const [modalOpen, setModalOpen] = useState(false);
      const renderItem = ( itemData ) => {
    
    
        return(
        
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('fourthScreen',{imagee:this.imagechose(itemData.item.categorieText),categorie:itemData.item})} style={{flex:0.9,margin:15,height:160,borderRadius:40,overflow:'hidden'}}>
          <ImageBackground source={this.imagechose(itemData.item.categorieText)} style={{height:'100%',width:'100%',justifyContent:'flex-end',alignItems:'center'}}>
          <Text style={{color:'white',fontSize:26,textAlign:'center'}}>{itemData.item.categorieText}</Text>
          
          <View style={{flex:0.25,flexDirection:'row'}}>
          <View style={{flex:0.45,flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("settings",{imagee:this.imagechose(itemData.item.categorieText), categorie:itemData.item})}><Icon name="cog"  size={30} style={{alignItems:'center'}} color="orange"/></TouchableOpacity>
          <TouchableOpacity onPress={()=>this.deleteCategorie(itemData.item._id)}><Icon  name="trash"  size={30} style={{alignItems:'center'}} color="orange"/></TouchableOpacity>
            
            </View>           
          </View>
          </ImageBackground>
         
          </TouchableOpacity>
          
         )
      };

    return(
        <View style={{flex:1}}>
          <Modal visible={this.state.modalOpen} animationType="slide" transparent={true}>
             <Modal visible={true} animationType='fade' transparent={true} >
             <View style={{flex:1,backgroundColor:'black',opacity:0.65}}>

             </View>
             </Modal>
             <KeyboardAvoidingView style={{flex:1,justifyContent:'center'}}>
                 <KeyboardAvoidingView style={{flex:0.5,backgroundColor:'#fcce58',borderRadius:25}}>
                     <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>add the name of your domain</Text></View>
                     <View style={{flex:0.2,flexDirection:'row',justifyContent:'center'}}><TextInput placeholder='Your answer' name="categorieText" value = {this.state.categorieText} onChangeText={(categorieText) => this.setState({categorieText})}  style={{flex:0.8,borderRadius:20,backgroundColor:'white',textAlign:'center',fontSize:20}}/></View>
                     
                    <KeyboardAvoidingView style={{flex:0.14,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>Description</Text></KeyboardAvoidingView>
                    <KeyboardAvoidingView style={{flex:0.34,flexDirection:'row',justifyContent:'center'}}><TextInput placeholder='Your answer' name="Description" value = {this.state.Description} onChangeText={(Description) => this.setState({Description})} multiline={true} style={{flex:0.8,borderRadius:20,backgroundColor:'white',textAlign:'center',textAlignVertical:'top',fontSize:20}}/></KeyboardAvoidingView>
                    <View style={{flex:0.08,flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:5}}><TouchableOpacity onPress={this.createCategorie} style={{flex:0.15,backgroundColor:'#996633',borderRadius:20,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20}}>Add</Text></TouchableOpacity></View>
                 </KeyboardAvoidingView>
             </KeyboardAvoidingView>
        </Modal>
            <ImageBackground source={require('../assets/img.jpg')} style={{width:'100%',height:'100%'}}>
            <View style={{ flex:0.2,justifyContent:'space-between',marginBottom:10}}>
                 <View style={{flex:0.7,justifyContent:'center'}}>
                   <View style={{flex:0.7,flexDirection:'row',justifyContent:'flex-end'}}>
                     <View style={{flex:0.1,justifyContent:'flex-end',alignItems:'flex-end'}}>
                     <TouchableOpacity onPress={()=>this.props.navigation.navigate("userSettings")} ><Icon name="cog"  size={30} style={{alignItems:'center'}} color="orange"/></TouchableOpacity>
                     
                     </View>
                     <View style={{flex:0.1,justifyContent:'flex-end',alignItems:'center'}}>
      
                     <TouchableOpacity onPress={ ()=>this.props.navigation.navigate('firstScreen')}><Icon name="sign-out"  size={30} style={{alignItems:'center'}} color="orange"/></TouchableOpacity>
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
        data={this.state.categories}
        renderItem={renderItem}
        keyExtractor={(item,index) => item._id}
        numColumns={2}
      />

                </View>
                <View style={{flex:0.1,justifyContent:'center',alignItems:'flex-end'}}>
                <Icon name="plus" onPress={()=>this.setState({modalOpen:true})} size={30} style={{marginRight:10}} color="orange"/>
                </View>
            </ImageBackground>

        </View>
    )
}
}