//This is an example code for Bottom Navigation//
import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import colors from '../config/colors';
import globalImage from '../config/globalImage';
import homeScreen from '../Screen/homeScreen';
import profileScreen from '../Screen/profileScreen';
import StyleConfig from '../config/StyleConfig'




const HomeStack = createStackNavigator(
{
//Defination of Navigaton from home screen
homeScreen: { screen: homeScreen },

},
);

const ProfileStack = createStackNavigator(
{
//Defination of Navigaton from setting screen
profileScreen: { screen: profileScreen },
}

);








const App = createBottomTabNavigator(
{
    homeScreen: { screen: HomeStack },
    profileScreen: { screen: ProfileStack },
},
{
defaultNavigationOptions: ({ navigation }) => ({



tabBarIcon: ({ focused, horizontal, tintColor }) => {
const { routeName } = navigation.state;
let IconComponent = Image;
let iconName;

if (routeName === 'profileScreen') {
        if(iconName = focused){
        return <View style={styles.mainTextStyle} >
        <Text style={styles.textStyle}>Profile</Text>
        <Image source={globalImage.dotIcon} style={{width: 8,height: 8,marginTop:StyleConfig.countPixelRatio(6)}} />
        </View>
        }

        else{
        iconName = focused ? globalImage.userIcon : globalImage.userIcon;
        }
}




else if (routeName === 'homeScreen') {
if(iconName = focused){
return <View style={{justifyContent:'center',alignItems:'center',marginTop:6}} >

<Text style={styles.textStyle}>Home</Text>

<Image source={globalImage.dotIcon} style={{width: 8,height: 8,marginTop:StyleConfig.countPixelRatio(6)}} />


</View>
}else{
iconName = focused ? globalImage.homeIcon : globalImage.homeIcon;
}
}






return <View style={styles.imageViewStyle}>
<IconComponent source={iconName} resizeMode='stretch' style={styles.imageStyle} />
</View>;

},
}),
tabBarOptions: {
activeTintColor: 'white',
inactiveTintColor: 'gray',
showLabel:false,


style: {
backgroundColor: colors.Inputbg,
height:StyleConfig.responsiveHeight(9),
paddingVertical:10,
alignItems: 'center',
justifyContent: 'center',
elevation: 0,
borderTopWidth: 0,
},
},
}
);
export default createAppContainer(App);



const styles = StyleSheet.create(
{

//Common view
mainTextStyle: {
justifyContent:'center',
alignItems:'center',
alignSelf:'center',
alignContent:'center',
},
textStyle: {
fontFamily: StyleConfig.fontMedium,
fontSize:StyleConfig.countPixelRatio(14),
width:StyleConfig.countPixelRatio(130),
paddingHorizontal:8,
color:colors.white,
textAlign:'center',
},
textBlcakStyle: {
fontFamily: StyleConfig.fontMedium,
fontSize:StyleConfig.countPixelRatio(14),
width:StyleConfig.countPixelRatio(150),
paddingHorizontal:8,
color:colors.white,
textAlign:'center',
},
imageViewStyle:{
height:StyleConfig.countPixelRatio(36),
width:StyleConfig.countPixelRatio(36),
alignSelf:'center',
justifyContent:'center',
alignItems:'center',
alignContent:'center',
backgroundColor:colors.Inputbg
},
imageStyle:{
height:StyleConfig.countPixelRatio(31),
width:StyleConfig.countPixelRatio(34),
}
});