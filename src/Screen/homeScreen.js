import colors from "../config/colors";
import globalImage from '../config/globalImage';
import StyleConfig from '../config/StyleConfig'
import ButtonSlide from '../component/ButtonSlide';

import React, {Component} from 'react';
import {FlatList,StyleSheet,Text,View,Alert,Slider,TouchableOpacity,Button} from 'react-native';



export default class UnderDevScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      distance: 25,

      slideValue: [],

      minDistance: 1,
      maxDistance: 25,
      data: [
        {key: 'Slider1'},
        {key: 'Slider2'},
        {key: 'Slider3'},
        {key: 'Slider4'},
        {key: 'Slider5'},
        {key: 'Slider6'},
        {key: 'Slider7'},
        {key: 'Slider8'},
        {key: 'Slider9'},
        {key: 'Slider10'},
        {key: 'Slider11'},
        {key: 'Slider12'},
        {key: 'Slider13'},
        {key: 'Slider14'},
        {key: 'Slider15'},
        {key: 'Slider16'},
        {key: 'Slider17'},
        {key: 'Slider18'},
        {key: 'Slider19'},
        {key: 'Slider20'},
        {key: 'Slider21'},
        {key: 'Slider22'},
      ],
    };
  }



    static navigationOptions = {
        header: null
    };

  
     

    callSlide(index)
    {

        if (index == undefined) {
                 
          alert("select slider")
        }
      
                
     

        else{

           alert(this.state.slideValue[index])
        }

    }
   
    

    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: '#000',
          }}
        />
      );
    };
    //handling onPress action
    getListViewItem = (item) => {
      Alert.alert(item.key);
    };
  
    render() {
      return (
        <View style={styles.container}>
          <FlatList
            contentContainerStyle={{marginBottom:StyleConfig.smartScale(48)}}

            data={this.state.data}
            renderItem={({item,index}) => (
              <View>
                <Text
                  style={styles.item}
                  onPress={this.getListViewItem.bind(this, item)}>
                  {item.key}
                </Text>
                <Slider
                  style={{width: 300,color:colors.black,marginHorizontal:10}}
                  step={1}
                  minimumValue={this.state.minDistance}
                  maximumValue={this.state.maxDistance}
                  value={this.state.slideValue[index]}
  
                  onValueChange={(value)=>
                      { 
                         console.log("rating==",value)
                         let { slideValue } = this.state;
                         slideValue[index] = value;
                         this.setState({
                          slideValue,
                       });
  
                     }}
  
                  thumbTintColor={colors.black}
                  onTintColor={colors.black}
                  maximumTrackTintColor={colors.black}
                  minimumTrackTintColor={colors.bgColor}
                />
                <View style={styles.textCon}>
                  <Text style={styles.colorGrey}>{this.state.minDistance} </Text>
                  <Text style={styles.colorGrey}>{this.state.slideValue[index]}</Text>
                  <Text style={styles.colorGrey}>{this.state.maxDistance} </Text>
                </View>

                <ButtonSlide
                                    BtnName={"Submit"}
                                    BtnPress={()=>this.callSlide(index)}

                                />

               

              </View>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    textCon: {
      width: 320,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    colorGrey: {
      color: colors.black,
      fontSize:20,
      marginLeft:10
    },
    colorYellow: {
      color: 'rgb(252, 228, 149)',
    },
  });
  