import React from 'react';
import { TextInput, Button, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements'
import SignUp from './SignUp'
import AuthFailedPop from './AuthFailedPop'
import { connect } from 'react-redux'
import firebase from 'firebase';

import SignIn from './SignIn'
import ForgotPasswordFailedPopUp from './ForgotPasswordFailedPopUp'
import ForgotPasswordSuccessPopUp from './ForgotPasswordSuccessPopUp'

const firebaseConfig = {
  apiKey: "AIzaSyB_C1VV2WkSmp-jZveUKt_7sI6eMWAr9iY",
  authDomain: "rich-and-poor-d9156.firebaseapp.com",
  databaseURL: "https://rich-and-poor-d9156.firebaseio.com",
  projectId: "rich-and-poor-d9156",
  storageBucket: "rich-and-poor-d9156.appspot.com",
  messagingSenderId: "1074587204547"
};

getState = data => {
  return {
      user: data
  }
}

class ForgotPassword extends React.Component {

  state = {
    email: '',
    successPopUp: false,
    errorPopUp: false
  }
  
  constructor(props) {
    super(props)
    this.initializeFirebase()
  }

  initializeFirebase() {
    // Prevent reinitializing the app in snack.
    if (!firebase.apps.length) {
      return firebase.initializeApp(firebaseConfig);
    }
  }

  forgotPassword(email) {
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        console.log('Email sended')
        this.setState({
            successPopUp: true
        })
    })
    .catch((error) => {
        console.log(error)
        this.setState({
            errorPopUp: true
        })
    })
  }

  showErrorDialog() {
    this.setState({errorPopUp: true});
  }

  closeErrorDialog() {
      this.setState({errorPopUp: false});
  }

  showSuccessDialog() {
    this.setState({successPopUp: true});
  }

  closeSuccessDialog() {
      this.setState({successPopUp: false}, () => this.props.navigation.navigate('SignIn'));
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
    console.log(this.state.email)
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>


          <View style={styles.connexionContainer}>
          <Text style={styles.title}>Réinitialisation</Text>
            <Text style={styles.emailTitle}>Veuillez entrer votre email</Text>
          </View>

          <KeyboardAvoidingView style={styles.inputContainer} behavior="padding" enabled> 


            <TextInput style={styles.input} placeholder='Email' onChangeText={(v) => this.onChangeText('email', v)}
              returnKeyType ='done'
            />

            <TouchableOpacity style={styles.connexionButton} onPress={() => this.forgotPassword(this.state.email)}>
              <Icon name="check" type='font-awesome' size={30} color='#50B263'/>
              <Text style={styles.connexionText}>Envoyer</Text>
            </TouchableOpacity>

          </KeyboardAvoidingView>

        <ForgotPasswordFailedPopUp
          closeDialog={() => this.closeErrorDialog()}
          isVisible={this.state.errorPopUp}
        />

        <ForgotPasswordSuccessPopUp
          closeDialog={() => this.closeSuccessDialog()}
          isVisible={this.state.successPopUp}
        />

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(getState)(ForgotPassword)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  emailTitle: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A3B2BB'
  },
  buttonInscription: {
    justifyContent: 'center'
  },
  inscription: {
    marginRight: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BEC6C7'
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 30
  },
  connexionContainer: {
    marginVertical: 50,
  },
  input: {
    borderColor: 'white',
    borderWidth: 1.0,
    borderBottomColor: '#50B263',
    padding: 10,
    marginHorizontal: 50,
    marginTop: 20,
    fontSize: 20
  },
  passwordButton:{
    alignSelf: 'center',
    marginTop: 15
  },
  connexionButton: {
    marginTop: 70,
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
  },
  connexionWith: {
    marginTop: 40,
    alignSelf: 'center',
    color: '#605F5E',
    fontWeight: 'bold'
  },
  connexionWithFb: {
    backgroundColor: 'yellow',
    marginTop: 30,
    paddingHorizontal: 50,
    paddingVertical: 15,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 25,
    backgroundColor: '#3b5998',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 1.0,
    shadowColor: '#BEC6C7',

  },
  connexionFbText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white'
  }
});