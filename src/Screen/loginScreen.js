import React, { Component } from 'react';
import {View, ActivityIndicator,Text,StatusBar,KeyboardAvoidingView} from 'react-native';


import stylesMain from "../style/loginStyle";
import InputComp from '../component/InputComp';
import ButtonComp from '../component/ButtonComp';
import Loader from '../component/Loader'
import Api from '../component/Api'
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from 'react-navigation';




export default class signInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tiNumber:'9725733710',  
            tiToken:'',  
            isLoading: false,

           
           

           
        };
     
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount(){

        this.getToken();


        this.load()


       
    }


    load = () => {

        this.setState({ isLoading: false });

        AsyncStorage.getItem("IS_Login").then((data) => {
            {
                this.setState({ Is_Login: JSON.parse(data) })
                if (this.state.Is_Login == true)
                {
                   this.props.navigation.replace('homeTabScreen');
               }
               else {
                   this.getToken();
               }
            }
           
        })
    }

    async getToken() {

        Api.PostDataForToken("rest/V1/vibcare/customer/generatetoken", 'POST',"ox3wsFkQlD98761mx2ic1jjs85q0w4")
            .then((data) => 
            {

                console.log("data===",data.message);


                if (data.success == 1) 
                {

                    this.setState({tiToken:data.access_token});
                    this.Savedata('access_token', data.access_token);

                    
                    AsyncStorage.getItem('access_token')
                    .then(req => JSON.parse(req))
                    .then((data) => {  
                        console.log("access_token ==== ",data);
                    })
                    

                    // { this.Savedata('UserDetails', data) }
                    //     { this.Savedata('IS_Login', true) }
                    //     this.props.navigation.replace('HomeTab');
                }
                else{

                    console.log("not" + data.success);
                    this.getToken();
                }

             
            })
            .catch(error => {
               
                this.getToken();
            })
    }
    async callLoginApi() {


        AsyncStorage.getItem('access_token')
        .then(req => JSON.parse(req))
        .then((data) => {  
            console.log("access_token ==== ",data);
            this.setState({tiToken:data});
        })

        this.setState({isLoading :true})
        let formdata = new FormData();
        formdata.append("mobile_no", this.state.tiNumber)
       
        Api.PostDataWithToken("rest/V1/vibcare/customer/login",formdata, 'POST',this.state.tiToken)
            .then((data) => 
            {

                console.log("data===",data.message);


                if (data.success == 1) 
                {

                    { this.Savedata('IS_Login', true) }

                    this.setState({isLoading :false})

                        this.props.navigation.replace('homeTabScreen');
                }
                else{

                    this.setState({isLoading :false})
                   alert(data.message)

                }

             
            })
            .catch(error => {

                this.setState({isLoading :false})

                alert(error)

                
            })
    }


    callApi()
    {

        if (this.state.tiNumber.trim().length <= 0) {
                 alert("Enter Mobile Number")
        }
                
        else if (this.state.tiNumber.length < 10) {
            alert("Enter Valid Mobile Number")
        }

        else{

           this.callLoginApi();
        }

    }


  

    Savedata(key, detail) {
        AsyncStorage.setItem(key, JSON.stringify(detail))
            .then(() => {
                console.log('Login Data Saved')
            })
    }

    render() {
        return (
            <View style={stylesMain.ContainerStyle} >

                <StatusBar  
                    backgroundColor = "#1c1c1e"  
                    barStyle = "light-content"   
                    translucent = {true}  
                />   
                    <View style={stylesMain.headerStyle}>
                        
                    </View>                    
                        <View style={stylesMain.bodyStyle}>
                        <KeyboardAvoidingView  keyboardShouldPersistTaps={'handled'}
                            style={{flex:1}}
                            bounces={false}
                            showsVerticalScrollIndicator={false}>

                                <Text style={stylesMain.textTop1Style}>{"Signin"}</Text>
                               
                                <InputComp
                                        lableName={"Mobile No."}
                                        placeholder={"Enter Mobile Number"}
                                        inputname={input => {this.tiNumber = input;}} 
                                        onChangeText={(text) => this.setState({tiNumber:text})}
                                        value={this.state.tiNumber}
                                    />
                               
                                 <ButtonComp
                                    BtnName={"Submit"}
                                    BtnPress={()=>this.callApi()}

                                />


                               

                   


                              

                    </KeyboardAvoidingView>

                      
                        
                    </View>
                    

                                       {/* ------------------ Loader ----------------- */}
                                       {this.state.isLoading && (
                            <View style={stylesMain.LoaderContainer} >
                                <Loader />
                            </View>
                        )}    
                 


                  
                    
              


                            
               
            </View>
    
            );
    }
}

 