import React,{useState} from 'react';
import { Component } from 'react'
import  {View, Text,ImageBackground,FlatList,TouchableOpacity,Modal,KeyboardAvoidingView} from 'react-native';
import {Goals} from '../goals/goalsdata';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import { Rating, AirbnbRating } from 'react-native-ratings';

import axios from 'axios';


export default class fouthScreen extends Component { 
    initialState = {
        objectifs:null,

        modalOpen:false,
        moodalOpen:false,
        
        tit:{
          objectiveText:null,
        },
        
        fixdate:new Date(2017, 2, 7),

        date:new Date(),
        //date:new Date.parse('01 Jan 1970 00:00 GMT'),

        discription: '',
        objectiveText: '',
        start_date: '',
        end_date: '',

        evaluationExist:false,

        discriptionE: '',
        note: '',

        titnote:0,
          
      }
      constructor(props) {
        super(props);
        this.state=this.initialState;
    
        this.createObjective = this.createObjective.bind(this);
        this.deleteObjective = this.deleteObjective.bind(this);
        this.evaluate = this.evaluate.bind(this);
        //this.submituser = this.submitUser.bind(this);
      }
    
      
      
    
      componentDidMount() {
        console.log("list des objjictives specific au categorie cliked");
        /*this.setState({categories: [{"id":"x4","image":music,"title":"testcategories"},
                                  {"id":"x5","image":music,"title":"testcategories"} ],
                      });*/
      //get
        fetch('http://10.0.2.2:3000/objectifs') //a modifier :  only categorie of specific user
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
    
    
      deleteObjective = (objectiveId) => {
        //alert("vous voulait vraiment supprimer cette categorie ?");
            axios.delete("http://10.0.2.2:3000/objectifs/"+objectiveId)
              .then(response => {
                /*if(response.data != null){
                  this.setState({"show":true});
                  this.setState({
                    voitures: this.state.voitures.filter(voiture => voiture.id !== voitureId)
                  });*/
                if(response.data != null){
                    //this.setState({"show":true});
                    //setTimeout(() => this.setState({"show":false}), 3000);
                    alert("vous voulait vraiment supprimer cet objective ?");
                   /* this.setState({
                        objectives: this.state.objective.filter( objective=> objective._id !== objectiveId)
                });*/
          
                }else {
                  //
                  alert("vous voulait vraiment supprimer cet objective ?");
                }
              });
          };

          existEvaluation = (objective) => {
            if(objective.evaluation != null){
              return true;
            }
            else{
              return false;
            }
          }

          

          evaluationOf = (objective) => {
            console.log("...........+"+objective.evaluation);
            console.log("...........+"+objective.objectiveText);
            if(objective.evaluation == null){
              return 0;
            }
            else{
              fetch('http://10.0.2.2:3000/evaluations/'+objective.evaluation) //a modifier :  only categorie of specific user
                .then((response) => response.json())
                .then((responseData) => {
              console.log("we are here");
              console.log(responseData.note);
              
              //return responseData.note;
              //this.setState({titnote: responseData.note});
              let note=0;

              if(responseData.note !=null){
                note=responseData.note;
              };
              this.setState({titnote: note}); //normalement note pas 4
            
            })
            .catch(err => console.error(err));
              
              return 5;
            }
          }

          descriptionE = (objective) => {
            console.log("...........+"+objective.evaluation);
            console.log("...........+"+objective.objectiveText);
            if(objective.evaluation == null){
              return '';
            }
            else{
              fetch('http://10.0.2.2:3000/evaluations/'+objective.evaluation) //a modifier :  only categorie of specific user
                .then((response) => response.json())
                .then((responseData) => {
              console.log("we are here");
              console.log(responseData.note);
              
              //return responseData.note;
              this.setState({DescriptionE: responseData.discription});
            
            })
            .catch(err => console.error(err));
              
              return '';
            }
          }

          createObjective(event) {
            event.preventDefault();
            const objective={
              //discription: this.state.discription,
              objectiveText: this.state.objectiveText,

              end_date: "2021-02-08T06:50:00.000Z",
              //start_date: this.state.start_date,
              //end_date: this.state.end_date,
              
              //mail:this.state.mail,
              //autre:this.state.autre
            }
            this.setState({modalOpen:false});
            
                axios.post("http://10.0.2.2:3000/objectifs", objective)
                .then(response => {
                if (response.data._id != null) {
                    //add if else
                    //this.setState(this.initialState);
                    alert("objective enregistré avec succès");
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

          evaluate(event) {
            event.preventDefault();

            const evaluation={
              discription: this.state.discriptionE,
              note: this.state.note,
              
            }
            
            
                axios.put("http://10.0.2.2:3000/evaluations/"+this.state.tit._id , evaluation)
                .then(response => {
                if (response.data.message != null) {
                    //add if else

                    this.setState({moodalOpen:false});

                    //this.setState(this.initialState);
                    alert("evaluation enregistrée avec succès");
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
    
      todateFormat = (date_ob1) => {
if(date_ob1 != null){
  let date_ob = new Date();
  date_ob =date_ob1;

      
  let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

// prints date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date +"___" + hours + ":" + minutes);

}
      }

    render() {
    /*const domainIdd=props.route.params.domainId;
    const [modalOpen, setModalOpen] = useState(false);
    const [tit,setTit] =useState(null);
    const [moodalOpen, setMoodalOpen] = useState(false);
    const displayedGoals=Goals.filter(goal=>goal.domainId.indexOf(domainIdd)>=0);
    const [date, setDate] = useState(new Date());*/
//<ImageBackground source={} style={{height:'100%',width:'100%'}}>
    
    const renderItem=(itemData)=>{
        return(
            <TouchableOpacity onPress={ ()=>{this.setState({moodalOpen: true, tit: itemData.item ,note:this.evaluationOf(itemData.item), DescriptionE: this.descriptionE(itemData.item), evaluationExist: this.existEvaluation(itemData.item)})}} style={{height:75,justifyContent:'center',alignItems:'center',marginBottom:15,backgroundColor:'#666699',borderRadius:15}}>
                
                <Text style={{marginLeft:10,color:'white',fontSize:18}}>{itemData.item.objectiveText}</Text>
                
                <Text style={{marginLeft:10,color:'red',fontSize:18}}>{itemData.item.end_date}</Text>

                <TouchableOpacity onPress={()=>alert("vous voulait vraiment supprimer cet objective ?")}><Icon name="trash"  size={30} style={{alignItems:'center'}} color="orange"/></TouchableOpacity>
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
                     <View style={{flex:0.1,flexDirection:'row',justifyContent:'center'}}><TextInput placeholder='Your answer' name="objectiveText" value = {this.state.objectiveText} onChangeText={(objectiveText) => this.setState({objectiveText})}  style={{flex:0.8,borderRadius:20,backgroundColor:'white',textAlign:'center',fontSize:20}}/></View>
                     <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>Pick a end date</Text></View>
                     <View style={{flex:0.27,alignItems:'center'}}><DatePicker
      date={this.state.date}
      //onDateChange={this.setState({date})}
      fadeToColor='#fcce58'
      androidVariant='nativeAndroid'
    /></View>
                    <KeyboardAvoidingView style={{flex:0.1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>Description</Text></KeyboardAvoidingView>
                    <KeyboardAvoidingView style={{flex:0.25,flexDirection:'row',justifyContent:'center'}}><TextInput placeholder='Your answer' multiline={true} style={{flex:0.8,borderRadius:20,backgroundColor:'white',textAlign:'center',textAlignVertical:'top',fontSize:20}}/></KeyboardAvoidingView>
                    <View style={{flex:0.08,flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:5}}><TouchableOpacity onPress={this.createObjective} style={{flex:0.15,backgroundColor:'#996633',borderRadius:20,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20}}>Add</Text></TouchableOpacity></View>
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
                     <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25,color:'orange'}} >{this.state.tit.objectiveText}</Text></View>
                     <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>It ends on</Text></View>
                     <View style={{flex:0.33,alignItems:'center'}}><DatePicker
      date={this.state.date}
      //onDateChange={}//a fire state recoit la date saisi
      fadeToColor='#fcce58'
      androidVariant='nativeAndroid'
    /></View>
                    <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:25}}>Description</Text></View>
                    <View style={{flex:0.2,flexDirection:'row',justifyContent:'center'}}><TextInput editable={!this.state.evaluationExist} placeholder='Your answer' name="DescriptionE" value = {this.state.DescriptionE} onChangeText={(DescriptionE) => this.setState({DescriptionE})} multiline={true} style={{flex:0.8,borderRadius:20,backgroundColor:'white',textAlign:'center',textAlignVertical:'top',fontSize:20}}/></View>
            <AirbnbRating
                    starContainerStyle={{backgroundColor:'white',borderRadius:20}}
                    selectedColor='red'
                    reviewColor='red'
                    isDisabled={this.state.evaluationExist}
                    
  count={5}
  reviews={["Terrible",  "OK", "Good", "Very Good",  "Excellent"]}
  defaultRating={this.state.titnote}
  size={30}
/>


                    <View style={{flex:0.08,flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:5}}>
                      <TouchableOpacity onPress={this.evaluate} style={{flex:0.15,backgroundColor:'#996633',borderRadius:20,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20}}>Done</Text></TouchableOpacity>
                      <TouchableOpacity onPress={()=>this.setState({moodalOpen:false})} style={{flex:0.15,backgroundColor:'#996633',borderRadius:20,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20}}>exit</Text></TouchableOpacity>
                    </View>
                 </View>
             </View>
        </Modal>
        
<ImageBackground source={this.props.route.params.imagee}  style={{height:'100%',width:'100%'}}>
         <View style={{flex:0.85,justifyContent:'center'}}>
         <Text style={{fontSize:30,fontStyle:"italic",color:'orange',textAlign:'center'}}>{this.props.route.params.categorie.categorieText}</Text>
            <View style={{flex:0.8}}>
                <FlatList data={this.state.objectifs} renderItem={renderItem} 
                keyExtractor={(item,index) => item._id}/>
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

