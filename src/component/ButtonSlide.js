import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import StyleConfig from '../config/StyleConfig'



export default ButtonSlide = ({BtnName,BtnPress}) => {
    return (
        <View>
                <TouchableOpacity onPress={BtnPress}>
                    <View style={[styles.buttonContainer]} onPress={BtnPress}>                      
                        <Text style={styles.textBtnStyle}>{BtnName}</Text>                     
                    </View>        
                </TouchableOpacity>             
        </View>

    );
};
const styles = StyleSheet.create(
    {

        buttonContainer: {
            borderRadius:6,
            backgroundColor:colors.footerBg,
            width:'30%',
            height:52,
            alignItems:'center',
            justifyContent:'center',
            marginVertical:20,
            marginLeft:20
        },
        
          textBtnStyle:{
            fontFamily: StyleConfig.fontSemiBold,        
            fontSize:StyleConfig.countPixelRatio(20),
            width:'90%',
            textAlign:'center',
            color:colors.white,
          },
    });
