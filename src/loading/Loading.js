
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator
  } from 'react-native-indicators';
  import firebase from 'firebase'
  import { addUser, addUserPrenom, addUserNom, addUserEmail, addUserTel, addUserId } from './../redux/user/ReduxUser'
  import { connect } from 'react-redux' 


getState = data => {
    return {
        user: data
    }
}


class Loading extends React.Component {

    state = {
        user: ''
    }

    async getUser(email) { 
   
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user != null) {
                this.getUser(user.email)
            }

            this.props.navigation.navigate(user ? 'Main' : 'SignIn')
        })
    }

    render() {
        return (
        <View style={styles.container}>
            <DotIndicator color='#50B263' />
        </View>
        )
    }
}

export default connect(getState)(Loading)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})