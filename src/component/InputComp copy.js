import React from 'react';
import {View,StyleSheet,Text,TextInput,TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import StyleConfig from '../config/StyleConfig'



export default InputComp = ({ lableName,secureTextEntry,inputname,placeholder,onChangeText,
    value}) => {
    return (
        <View>
           

            <View style={[styles.inputContainer]}>
            <Text style={styles.textLableStyle}>{lableName}</Text>

                <TextInput
                    ref={inputname}
                    style={styles.inputsStyle}
                    placeholder={placeholder}
                    placeholderTextColor={colors.white}
                    onChangeText={onChangeText}
                    keyboardType='number-pad'
                    value={value}
                    maxLength={10}
                    secureTextEntry={secureTextEntry}
                    autoCapitalize='none'
                 />
               
                                  
            </View>
       
        </View>

    );
};
const styles = StyleSheet.create(
    {
       
        inputContainer: {
            width:'100%',
            marginVertical:5,
  
        },
        inputsStyle:{
            width:'100%',
            paddingVertical:2,
            fontFamily: StyleConfig.fontRegular,        
            fontSize:StyleConfig.countPixelRatio(15),
            color:colors.white,
            paddingBottom:StyleConfig.countPixelRatio(6),
            borderBottomColor:colors.Inputbg,
            borderBottomWidth:0.5,
            marginVertical:2,
            paddingLeft:0,

          },
          textLableStyle:{
            color:colors.steel,
            fontFamily: StyleConfig.fontMedium,        
            fontSize:StyleConfig.countPixelRatio(14),

        },
       
    });
