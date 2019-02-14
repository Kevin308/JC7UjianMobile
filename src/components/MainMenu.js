import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Homepage from './Homepage';
import Profile from './Profile';
import { Icon } from 'react-native-elements'

export default createBottomTabNavigator(
    {
        Homepage: {
            screen: Homepage,
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({ tintColor }) => <Icon name='home' color={tintColor} size={35} />,
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: "Profile",
                tabBarIcon: ({ tintColor }) => <Icon name='account-circle' color={tintColor} size={35} />,
            }
        }
    },
    {
        initialRouteName: 'Homepage',
        headerMode: 'none'
    }
);