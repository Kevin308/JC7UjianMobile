import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Loginform from './Loginform';
import MainMenu from './MainMenu';

export default createStackNavigator(
    {
        Login: {
            screen: Loginform
        },
        MainMenu: {
            screen: ({ navigation }) => <MainMenu screenProps={{ rootNavigation: navigation }} />
            //utk rootNavigation nama bebas diganti
        }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
)