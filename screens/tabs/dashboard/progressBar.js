import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Alert, Image } from 'react-native'
import { FlipInEasyX } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';


import * as Progress from 'react-native-progress';

const goToLeaderboard = () => {
    Alert.alert('Leaderboard WIP')
}

const ProgressBar = () => {

    const [width, setWidth] = useState('75%');

    return (
        <SafeAreaView style={{
            //backgroundColor: 'pink',
            marginTop: -20,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            top: 10,
        }}>
            

            <Text style={{
                position: 'absolute',
                //fontFamily: 'PressStart',
                fontSize: 16,
                //color: '#007788',
                //marginTop: -10,
                left: 10,
                top: 15,
            }}>Level 2</Text>

        
            
                <TouchableOpacity onPress={() => goToLeaderboard()}>
                    <View style={styles.progress}>
                        <View style={{
                            display: 'flex',
                            height: 10,
                            backgroundColor: '#007788',
                            borderRadius: 20,
                            width: width,
                           
                        }}></View>
                    </View>
                </TouchableOpacity>

                <View style={{
                width: 50,
                height: 50,
                //backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                top: -5,
                left: 10

            }}>
                <TouchableOpacity onPress={goToLeaderboard}>
                <Image source={require('../../../assets/star-icon.png')} 
                        style={{
                            width: 50,
                            height: 50,

                        }} />

                </TouchableOpacity>
                
            </View>

            
            

            
            
        </SafeAreaView>
    )

}

const styles=StyleSheet.create({
    progress: {
        height: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 20,
        
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        borderRadius: 10,
        
    }
})

export default ProgressBar;