import React from 'react'
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import { createAppContainer, createStackNavigator, NavigationActions, createBottomTabNavigator } from 'react-navigation'
import { connect } from 'react-redux' 
import { Icon } from 'react-native-elements';

import SignIn from './SignIn'
import SignUp from './SignUp'
import Loading from './Loading'
import SignUpSuccess from './SignUpSuccess'
import ForgotPassword from './ForgotPassword'

const stackAuth = createStackNavigator({
    Loading: {
        screen: Loading,
        headerMode: 'none',
        navigationOptions: () => ({
          header: null,
          headerTruncatedBackTitle: 'Retour',
          
        })
    },
    SignIn: {
      screen: SignIn,
      headerMode: 'none',
      navigationOptions: () => ({
        header: null,
        headerTruncatedBackTitle: 'Retour',
        
      }),
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: () => ({
            header: null
        }),
    },
    SignUpSuccess: {
        screen: SignUpSuccess,
        navigationOptions: () => ({
            header: null
        }),
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: () => ({
            headerTintColor: '#50B263',
        }),
    },
    Main: {
        screen: stackMain,
        navigationOptions: () => ({
            header: null,
            gesturesEnabled: false,
        }),
    },
});

export default connect(undefined)(createAppContainer(stackAuth));
