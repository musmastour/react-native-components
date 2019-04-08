import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, Header, TouchableHighlight } from 'react-native'
import { createDrawerNavigator, createStackNavigation, createAppContainer, NavigationActions, DrawerActions } from 'react-navigation'

import SignIn from './SignIn'
import SignUp from './SignUp'

export default class SignUpSuccess extends React.Component {
  
    render() {
        return (
            
          <View style={styles.container}>
            <View style={styles.textContainer}>
            <Text style={styles.text}>Inscription confirmée</Text>
            <Text style={styles.text}>🥳</Text>            
            </View>

            <TouchableOpacity style={styles.connexionButton} onPress={() => {
                  this.props.navigation.navigate('SignIn')
                }
              }>
              <Text style={styles.connexionText}>Se connecter</Text>
            </TouchableOpacity>

          </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContainer: {
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
    },
    connexionButton: {
        marginTop: 80,
        marginBottom: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 25,
        paddingHorizontal: 50,
        alignItems: 'center',
        paddingVertical: 15,
        shadowColor: '#BEC6C7',
        backgroundColor: 'white',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 1.0
      },
      connexionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#50B263'
      }
  });