import { StyleSheet,StatusBar,Platform,Dimensions} from 'react-native';
import colors from '../config/colors';
import StyleConfig from '../config/StyleConfig'


export default StyleSheet.create ({

    ContainerStyle: {
        backgroundColor:colors.bgColor,
        width:'100%',
        height:'100%',
        flex:1,
    },
    headerStyle: {
      width:'100%',
      height:'12%', 
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:colors.bgColor,   
  },

   
  bodyALLStyle:{
    backgroundColor:colors.bgColor,
    width:'88%',
    height:'88%',
    alignSelf:'center',
    flex:1,
},


    bodyStyle:{
        backgroundColor:colors.bgColor,
        width:'88%',
        height:'80%',
        alignSelf:'center',
        flex:1,
    },
    bodyScrollStyle:{
        backgroundColor:colors.bgColor,
        width:'100%',
        height:'80%',
        alignSelf:'center',
        flex:1,
    },
   footerStyle:{
      backgroundColor:colors.bgColor,
      width:'90%',
      height:'8%',
      position:'absolute',
      bottom:0,
      alignItems:'center',
      alignSelf:'center',
  },

   
  textTopStyle:{
    color:colors.white,
    fontSize:StyleConfig.countPixelRatio(37),
     

  },

  textTop1Style:{
    color:colors.white,
    fontSize:StyleConfig.countPixelRatio(30),
    marginTop:10,
    marginBottom:40,    
  },
 

  textStyle:{
    fontSize:StyleConfig.countPixelRatio(37),

    color:colors.white,
  },

  text1Style:{
    fontSize:StyleConfig.countPixelRatio(37),
    color:colors.white,
    textDecorationLine:'underline'
  },

  inputViewStyle:{
    marginTop:'8%',
    justifyContent:'center',

  },


  textBottemStyle:{
    fontSize:StyleConfig.countPixelRatio(17),
    textAlign:'center',
    color:colors.white,
  },
text1BottemStyle:{
    fontSize:StyleConfig.countPixelRatio(17),
    textAlign:'center',
    color:colors.white,
    textDecorationLine:'underline'
  },
  textForgotStyle:{
    fontSize:StyleConfig.countPixelRatio(15),
    textAlign:'center',
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

inputContainer: {
  width:'100%',
  marginVertical:5,
  
},
inputsStyle:{
  width:'100%',
  paddingVertical:2,
  fontSize:StyleConfig.countPixelRatio(18),
  color:colors.white,
  borderBottomColor:colors.lineColor,
  borderBottomWidth:0.5,
  marginVertical:2,
  paddingLeft:0,

},
textLableStyle:{
  color:colors.steel,
  fontSize:StyleConfig.countPixelRatio(18),

},

spinnerStyle: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor:colors.white
 }

}); 