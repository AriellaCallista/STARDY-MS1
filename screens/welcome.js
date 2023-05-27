import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Image } from 'react-native';



export default function Welcome({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Profile');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>STARdy</Text>
                <TouchableOpacity style={styles.button} onPress={pressHandler} activeOpacity={0.5}>
                    <Text style={styles.buttonText}>Start Today</Text>
                </TouchableOpacity>
            <Image source={require('../assets/star-icon.png')} style={styles.image} />
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#eef1e1',
        alignItems: 'center',
    },
    titleText: {
        color: '#007788',
        fontFamily: 'PressStart',
        fontSize: 45,
        position: 'absolute',
        top: '20%'        
    }, 
    button: {
        padding: 19,
        backgroundColor: '#007788',
        position: 'absolute',
        bottom: '25%',
        borderRadius: 15
    },
    buttonText: {
        fontSize: 25,
        fontFamily: 'RowdiesRegular',
        color: '#f6f6f6'
    }, 
    image: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: '30%'
    }
})
    



