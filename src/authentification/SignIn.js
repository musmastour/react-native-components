import React from 'react';
import { TextInput, Button, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements'

export default class SignIn extends React.Component {

  state = {
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    user: '',
    authFailed: false
  }
  
  constructor(props) {
    super(props)
  }

  /** Sign in with firebase  **/

/*  signIn(email, password) {
      email = email.replace(/\s+$/, '');
      console.log(email)
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.getUser(email))
      .then(() => {
        const { dispatch } = this.props
          console.log('sign in success')
          this.props.screenProps.auth()
        }
      )
      .catch((error) => {
        console.log(error)
        this.setState({
          authFailed: true
        })
      })
  }*/

  //** forget password with firebase **/
  /*
  forgotPassword(email) {
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => console.log('Email sended'))
    .catch((error) => {
        console.log(error)
    })
  }*/

  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
    console.log(this.state.email)
  }

  updatePassword = (pwd) => {
    this.setState({
      password: pwd
    })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>


          <View style={styles.connexionContainer}>
            <Text style={styles.connexion}>Connexion</Text>

            <TouchableOpacity style={styles.buttonInscription}>
            <Text style={styles.inscription}>Inscription</Text>
            </TouchableOpacity>

          </View>

          <KeyboardAvoidingView style={styles.inputContainer} behavior="padding" enabled> 

            <TextInput style={styles.input} placeholder='Email' onChangeText={(v) => this.onChangeText('email', v)}
              returnKeyType ='next' onSubmitEditing={() => { this.passwordInput.focus(); }}
            />

            <TextInput ref={(password) => this.passwordInput = password} returnKeyType ='done' style={styles.input} placeholder='Mot de passe' secureTextEntry={true} onChangeText={(v) => this.updatePassword(v)}/>

            <TouchableOpacity style={styles.passwordButton}>
              <Text style={styles.passwordText}>Mot de passe oublié ?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.connexionButton}>
              <Icon name="check" size={30} type='font-awesome' color='#50B263'/>
              <Text style={styles.connexionText}>Connexion</Text>
            </TouchableOpacity>

          </KeyboardAvoidingView>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 30
  },
  connexionContainer: {
    marginTop: 50,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  fbContainer: {

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