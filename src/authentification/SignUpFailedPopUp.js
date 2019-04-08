import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';

export default class SignUpFailedPopUp extends React.Component {

    render() {
        return (
        
            <Dialog
            visible={this.props.isVisible}
            overlayBackgroundColor='black'
            overlayOpacity={0.1}
            onTouchOutside={this.props.closeDialog}
            dialogAnimation={new SlideAnimation({
                slideFrom: 'top'
            })}>
                <DialogContent style={styles.dialog}>
                <Text style={styles.dialogTitle}>Erreur lors de l'inscription</Text>
                <Text style={styles.dialogText}>Veuillez réessayer</Text>

                    <View style={styles.dialogButtonContainer}>

                    <TouchableOpacity style={styles.dialogButtonAbort} onPress={this.props.closeDialog}>
                        <Icon name="times-circle" type='font-awesome' size={50} color='#50B263'/>
                    </TouchableOpacity>


                    </View>
                </DialogContent>
        </Dialog>
        )
    }
}

const styles = StyleSheet.create({
    dialog: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    dialogTitle: {
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 25
    },
    dialogText: {
        marginBottom: 30,
        fontWeight: 'bold',
        fontSize: 25
    },
    dialogButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
  
    dialogButtonAbort: {
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})