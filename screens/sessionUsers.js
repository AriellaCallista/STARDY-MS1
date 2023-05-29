import React, { Component, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  FlatList,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
 

import Random from './tabs/users/random';
import Friends from './tabs/users/friends';
import Add from './tabs/users/add';


export default function SessionUsers() {

  const focusSession = createMaterialTopTabNavigator();

  return <focusSession.Navigator 
            screenOptions={{
              tabBarLabelStyle: { fontSize: 14 },
              tabBarLabelStyle: { color: '#f6f6f6'},
              tabBarStyle: { backgroundColor: '#007788', paddingTop: 50 },
              
            }}
          >

    <focusSession.Screen 
      name='Friends' 
      component={Friends} 
    />

    <focusSession.Screen 
      name='Random' 
      component={Random}
      />

    <focusSession.Screen 
      name='Add' 
      component={Add}
      />

  </focusSession.Navigator>
} 