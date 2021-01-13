import React,{useState} from 'react';
import { Component } from 'react'
import  {View, Text,ImageBackground,FlatList,TouchableOpacity,Modal,KeyboardAvoidingView} from 'react-native';
import {Goals} from '../goals/goalsdata';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class fourthScreen extends Component {


    initialState = {
        modalOpen: false,
        moodalOpen: false,
        date: new Date(),
        
        objectifs: [{"id":"x4","discription":"test","objectiveText":"testobj"}],
        
        //otherattr:''
      }
    constructor(props) {
        super(props);
        this.state=this.initialState;
        
      }
    
      
      
      
    
    componentDidMount() {
        console.log("we are here");
        this.setState({objectifs: [{"id":"x4","discription":"test","objectiveText":"testobj"}],
                      });
      //get
      const domainIdd=this.props.route.params.domainId;
        fetch('http://10.0.2.2:3000/objectifs/categorie/'+domainIdd) //a modifier :  only categorie of specific user
            .then((response) => response.json())
            .then((responseData) => {
          console.log("we are here");
          console.log(responseData);
          this.setState({
            
            objectifs: responseData  //c'est le vri
            //categories: [{"id":"x4","image":sports,"title":"testcategories"}]
            
                });
            })
            .catch(err => console.error(err));
      }

  render() {
    const domainIdd=this.props.route.params.domainId;


    
    //const [modalOpen, setModalOpen] = useState(false);
    //const [moodalOpen, setMoodalOpen] = useState(false);
    const displayedGoals=Goals;
    //const [date, setDate] = useState(new Date());
    const renderItem=(itemData)=>{
        return(
            <TouchableOpacity onPress={()=>this.setState({moodalOpen: true})} style={{height:50,justifyContent:'center',marginBottom:15,backgroundColor:'#666699',borderRadius:15}}>
                
                <Text style={{marginLeft:10,color:'white'}}>{itemData.item.objectiveText}</Text>
                
                </TouchableOpacity>
            
        )
    }
     return (
     <View>
         <Modal visible={this.state.modalOpen} animationType="slide" transparent={true}>
             <Modal visible={true} animationType='fade' transparent={true} >
             <View style={{flex:1,backgroundColor:'black',opacity:0.65}}>

             </View>
             </Modal>
             <KeyboardAvoidingView style={{flex:1,justifyContent:'center'}}>
                 <KeyboardAvoidingView style={{flex:0.9,backgroundColor:'#fcce58',borderRadius:25}}>
                     <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>What is your goal</Text></View>
                     <View style={{flex:0.1,flexDirection:'row',justifyContent:'center'}}><TextInput placeholder='Your answer'  style={{flex:0.8,borderRadius:20,backgroundColor:'white',textAlign:'center',fontSize:20}}/></View>
                     <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>Pick a date</Text></View>
                     <View style={{flex:0.27,alignItems:'center'}}><DatePicker
      date={this.state.date}
      //onDateChange={this.setState({date})}
      fadeToColor='#fcce58'
      androidVariant='nativeAndroid'
    /></View>
                    <KeyboardAvoidingView style={{flex:0.1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>Description</Text></KeyboardAvoidingView>
                    <KeyboardAvoidingView style={{flex:0.25,flexDirection:'row',justifyContent:'center'}}><TextInput placeholder='Your answer' multiline={true} style={{flex:0.8,borderRadius:20,backgroundColor:'white',textAlign:'center',textAlignVertical:'top',fontSize:20}}/></KeyboardAvoidingView>
                    <View style={{flex:0.08,flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:5}}><TouchableOpacity onPress={()=>this.setState({modalOpen:false})} style={{flex:0.15,backgroundColor:'#996633',borderRadius:20,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20}}>Add</Text></TouchableOpacity></View>
                 </KeyboardAvoidingView>
             </KeyboardAvoidingView>
        </Modal>

        <Modal visible={this.state.moodalOpen} animationType="slide" transparent={true}>
             <Modal visible={true} animationType='fade' transparent={true} >
             <View style={{flex:1,backgroundColor:'black',opacity:0.65}}>

             </View>
             </Modal>
             <View style={{flex:1,justifyContent:'center'}}>
                 <View style={{flex:0.9,backgroundColor:'#99ccff',borderRadius:25}}>
                     <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>Your goal is</Text></View>
                     <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25,color:'orange'}}>Goal</Text></View>
                     <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>It starts on</Text></View>
                     <View style={{flex:0.27,alignItems:'center'}}><DatePicker
      date={this.state.date}
      //onDateChange={this.setState({date})}
      fadeToColor='#fcce58'
      androidVariant='nativeAndroid'
    /></View>
                    <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>Description</Text></View>
                    <View style={{flex:0.25,flexDirection:'row',justifyContent:'center'}}><Text style={{fontSize:18}}>Workout for 1 hour, run, take a shower</Text></View>
                    <AirbnbRating
                    starContainerStyle={{backgroundColor:'white',borderRadius:20}}
                    selectedColor='red'
                    reviewColor='red'
  count={5}
  reviews={["Terrible",  "OK", "Good", "Very Good",  "Excellent"]}
  defaultRating={5}
  size={30}
/>
                    <View style={{flex:0.08,flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:5}}><TouchableOpacity onPress={()=>this.setState({modalOpen:false})} style={{flex:0.15,backgroundColor:'#996633',borderRadius:20,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20}}>Done</Text></TouchableOpacity></View>
                 </View>
             </View>
        </Modal>
        
<ImageBackground source={this.props.route.params.imagee} style={{height:'100%',width:'100%'}}>
         <View style={{flex:0.85,justifyContent:'center'}}>
            <View style={{flex:0.8}}>
                <FlatList data={this.state.objectifs} renderItem={renderItem} 
                keyExtractor={(item,index) => item.id}/>
            </View>
         </View>
         <View style={{flex:0.15,justifyContent:'center'}}>
             <View style={{flex:0.4,flexDirection:'row',justifyContent:'flex-end',marginRight:7}}>
            <TouchableOpacity style={{backgroundColor:'gray',flex:0.103 ,justifyContent:'center',alignItems:'center',borderRadius:30}} onPress={()=>this.setState({modalOpen:true})}>
                   <Icon name="plus"  size={30} style={{alignItems:'center'}} color="orange"/>
            </TouchableOpacity>
            </View>
         </View>
         
         
         
         </ImageBackground></View>)
    }
}
