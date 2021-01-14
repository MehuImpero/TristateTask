
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import homeTabScreen from '../Screen/homeTabScreen';
import homeScreen from '../Screen/homeScreen';
import profileScreen from '../Screen/profileScreen';
import loginScreen from '../Screen/loginScreen';



const App = createStackNavigator({

    profileScreen: { screen: profileScreen},
    homeScreen: { screen: homeScreen },
    loginScreen: { screen: loginScreen },

  
    homeTabScreen: 
  {
    screen: homeTabScreen,
    header: null,
    navigationOptions: {
      header: null
    }
  },
}, {
    initialRouteName: 'loginScreen',
});


export default createAppContainer(App);


 