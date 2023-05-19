import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Profile({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={pressHandler} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#eef1e1',
        alignItems: 'center',
    },
    button: {
        padding: 24,
        backgroundColor: '#f6f6f6',
        position: 'absolute',
        top: 400,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'RowdiesRegular',
        color: '#333'
    }, 
})