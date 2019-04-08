
// yarn add react-native-popup-dialog


import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';


export default class PopUpSample extends React.Component {

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
                    <Text style={styles.dialogTitle}>Hello</Text>
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
})