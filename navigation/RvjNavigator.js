import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import  HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
const RvjNavigator = createStackNavigator({

    Mainscreen:HomeScreen

});



export default createAppContainer (RvjNavigator);