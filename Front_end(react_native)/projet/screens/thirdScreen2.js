import React, { Component } from 'react';
import {View,Image,Text,FlatList,ImageBackground,TextInput,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DOMAINS} from '../data/dummydata';

import axios from 'axios';
import sports from '../assets/sports.jpg';

export default class thirdScreen extends Component {
    
  constructor(props) {
    super(props);
  //this.state = { voitures: [] };
  
  this.state = { categories: [{"id":"x4","image":sports,"title":"testcategories"},
                              {"id":"x5","image":sports,"title":"testcategories"} ],
  };
  
  }

  componentDidMount() {
    console.log("we are here");
    this.setState({categories: [{"id":"x4","image":sports,"title":"testcategories"},
                              {"id":"x5","image":sports,"title":"testcategories"} ],
                  });
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


  deleteVoiture = (voitureId) => {
		axios.delete("http://localhost:8080/voitures/"+voitureId)
		  .then(response => {
			/*if(response.data != null){
			  this.setState({"show":true});
			  this.setState({
				voitures: this.state.voitures.filter(voiture => voiture.id !== voitureId)
			  });*/
			if(response.data != null){
				//this.setState({"show":true});
				//setTimeout(() => this.setState({"show":false}), 3000);
				this.setState({
				  voitures: this.state.voitures.filter(voiture => voiture.id !== voitureId)
			});
	  
			}else {
			  //error
			}
		  });
	  };

  render() {
      const renderItem = ( itemData ) => {
    
    
        return <TouchableOpacity onPress={()=>this.props.navigation.navigate('fourthScreen',{imagee:itemData.item.image,domainId:itemData.item._id})} style={{flex:1,margin:15,height:160,borderRadius:40,overflow:'hidden'}}>
          <ImageBackground source={itemData.item.image} style={{height:'100%',width:'100%',justifyContent:'flex-end',alignItems:'center'}}>
          <Text style={{color:'white',fontSize:30,textAlign:'center'}}>{itemData.item.categorieText}</Text>
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
                //data={DOMAINS}
                data={this.state.categories}
                renderItem={renderItem}
                keyExtractor={(item,index) => item.id} // id or _id ?
                numColumns={2}
                />

            </View>

          </ImageBackground>

        </View>
    )
  }
}
