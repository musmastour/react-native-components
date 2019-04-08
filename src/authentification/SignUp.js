import React from 'react';
import { TextInput, Button, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationAction } from 'react-navigation';
import { Icon } from 'react-native-elements'
import firebase from 'firebase';

import SignIn from './SignIn'
import SignUpSuccess from './SignUpSuccess'
import SignUpFailedPopUp from './SignUpFailedPopUp'

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

export default class SignUp extends React.Component {
 
  state = {
    prenom: '',
    nom: '',
    password: '',
    tel: '',
    email: '',
    signUpFailed: false
  }

  constructor(props) {
    super(props)
  }
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }

  signUp(email, password) {
      email = email.replace(/\s+$/, '');
      firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
          console.log('sign up success')
          this.props.navigation.navigate('SignUpSuccess')
        }
      )
      .catch((error) => {
          console.log(error)
          this.setState({
            signUpFailed: true
          })
      })
  }

  showDialog() {
    this.setState({signUpFailed: true});
  }

  closeDialog() {
      this.setState({signUpFailed: false});
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>

            <KeyboardAvoidingView style={styles.form} behavior="padding" enabled>

            <View style={styles.connexionContainer}>
              <Text style={styles.connexion}>Inscription</Text>

              <TouchableOpacity style={styles.buttonInscription} onPress={() => {this.props.navigation.navigate('SignIn')}}>
                <Text style={styles.inscription}>Connexion</Text>
              </TouchableOpacity>

            </View>



              <TextInput style={styles.input} placeholder='Prénom' onChangeText={(v) => this.onChangeText('prenom', v)}
                returnKeyType ='next' onSubmitEditing={() => { this.nomInput.focus(); }}
              />

              <TextInput ref={(nom) => this.nomInput = nom} style={styles.input} placeholder='Nom' onChangeText={(v) => this.onChangeText('nom', v)}
                returnKeyType ='next' onSubmitEditing={() => { this.phoneInput.focus(); }}
              />

              <TextInput ref={(phone) => this.phoneInput = phone} style={styles.input} placeholder='Téléphone' keyboardType='phone-pad' onChangeText={(v) => this.onChangeText('tel', v)}
                returnKeyType ='next' onSubmitEditing={() => { this.emailInput.focus(); }}
              />

              <TextInput ref={(email) => this.emailInput = email} style={styles.input} placeholder='Email' keyboardType='email-address' onChangeText={(v) => this.onChangeText('email', v)}
                returnKeyType ='next' onSubmitEditing={() => { this.passwordInput.focus(); }}
              />

              <TextInput ref={(password) => this.passwordInput = password} style={styles.input} placeholder='Mot de passe' secureTextEntry={true} onChangeText={(v) => this.onChangeText('password', v)}
                returnKeyType ='done' onSubmitEditing={() => {  }}
              />

              <Text style={ (this.state.password.length >= 8) ? styles.indicePasswordValid: styles.indicePasswordInvalid}>Minimum 8 caractères</Text>

              <TouchableOpacity style={styles.connexionButton} onPress={() => this.signUp(this.state.email, this.state.password)}>
                <Icon name="check" type='font-awesome' size={30} color='#50B263'/>
                <Text style={styles.connexionText}>Inscription</Text>
              </TouchableOpacity>


          </KeyboardAvoidingView>

        <SignUpFailedPopUp
          closeDialog={() => this.closeDialog()}
          isVisible={this.state.signUpFailed}
        />

      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  form: {
    justifyContent: 'center'
  },
  connexion: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold'
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
  connexionContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  connexionButton: {
    marginTop: 20,
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
  indicePasswordInvalid: {
    color: '#BEC6C7',
    alignSelf: 'center',
    marginTop: 5
  },
  indicePasswordValid: {
    color: '#50B263',
    alignSelf: 'center',
    marginTop: 5
  }
});