import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mainTab from '../../../navigation/mainTab';
import Analytics from '../analytics/analytics';
import FocusSession from '../focusSession/focusSession';
import globalStyles from '../../../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import ProfileCard from './profileCard';
import ProgressBar from './progressBar';
import Requests from './requests';
import Buttons from './buttons';

export default function Dashboard({ navigation }) {



    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#eef1e1',
            paddingTop: 10
        }}>
            <View style={{flex: 1}}>
                <ProfileCard nav={navigation} />
                <Requests />
                <Buttons nav={navigation} />
                
            </View> 
        </SafeAreaView>

        
    );
}

const styles=StyleSheet.create({
    
})


