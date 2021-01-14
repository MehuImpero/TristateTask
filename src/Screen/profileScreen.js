import React, { Component } from 'react';
import {View, Text, Image,TextInput,Platform,StatusBar,StyleSheet} from 'react-native';
import colors from "../config/colors";
import globalImage from '../config/globalImage';
import StyleConfig from '../config/StyleConfig'
import ButtonComp from '../component/ButtonComp';
import Loader from '../component/Loader'

import { ConfirmDialog } from 'react-native-simple-dialogs';

import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from 'react-navigation';



export default class UnderDevScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {

      isReview: false,
      dialogVisible: false,
      isLoading: false,

    

    };
    
}


    static navigationOptions = {
        header: null
    };

  
     


   
    

   
    opendialog = () => {
      this.setState({ dialogVisible: true });
    }

    async finish() {


      AsyncStorage.setItem('IS_Login', false)
      AsyncStorage.setItem('access_token', "")
          AsyncStorage.clear()
          this.setState({ dialogVisible: false })
          this.setState({ isLoading: false });

         
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'loginScreen' })],
          });
          this.props.navigation.dispatch(resetAction);
        }
  
      
     
  

  render() {



    return (




            

         
                





            <View style={styles.dialogContainer} >



<ConfirmDialog
          title="Confirm Logout?"
          titleStyle={{color:colors.white,fontSize:StyleConfig.countPixelRatio(17)}}
          message="Are you sure you want to Logout?"
          visible={this.state.dialogVisible}
          dialogStyle={{ backgroundColor: colors.charcoalGrey, borderRadius: 12 }}
          messageStyle={{backgroundColor:colors.charcoalGrey,color:colors.steel,fontSize:StyleConfig.countPixelRatio(13)}}
          onTouchOutside={() => this.setState({ dialogVisible: false })}
          positiveButton={{
            title: "YES",
            titleStyle: {color:'#FFFFFF',fontSize:StyleConfig.countPixelRatio(17)},
            // onPress: () => this.finish()
            onPress: () => setTimeout(() => {
              this.setState({isLoading :true})

              this.finish()
            }, 200)

          }}
          negativeButton={{
            title: "NO",
            titleStyle: {color:'#FFFFFF',fontSize:StyleConfig.countPixelRatio(17)},
            onPress: () => this.setState({ dialogVisible: false })
          }}
        />


            <StatusBar  
                    backgroundColor = "#1c1c1e"  
                    barStyle = "light-content"   
                    translucent = {true}  
                    />    

                    <View style={styles.dialogStyle}>
                            
                            <View style={{
                            alignSelf:'center',
                                    }}>

                                    <Text style={styles.textDialog1Style}>Profile Detail</Text>
                            </View>
                            

                            <View style={{marginHorizontal:30}}>

                            <ButtonComp
                                    BtnName={"Logout"}
                                    BtnPress={() => this.opendialog()}


                                />
                            </View>
                           

                    </View>

                 {/* ------------------ Loader ----------------- */}
                 {this.state.isLoading && (
                            <View style={styles.LoaderContainer} >
                                <Loader />
                            </View>
                        )}    
                
            </View>
   
  
  );
  }
}


const styles=StyleSheet.create({


    dialogContainer: {
        height:'100%',
        width:'100%',
        alignItems: 'center',
        backgroundColor:colors.white,
        justifyContent:'center',

    },
    dialogStyle: {
        width:300,
        height:300,
        backgroundColor:colors.charcoalGrey,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:14,
    },

    textDialog1Style:{
        fontSize:26,
        alignSelf:'center',
        fontWeight:'600',
        marginVertical:6,
        color:colors.white,
    
    },
    LoaderContainer: {
      position: 'absolute',
      
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
  },



});