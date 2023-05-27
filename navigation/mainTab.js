import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Dashboard from '../screens/tabs/dashboard/dashboard';
import Analytics from '../screens/tabs/analytics/analytics';
import FocusSession from '../screens/tabs/focusSession/focusSession';
import Classroom from '../screens/classroom';
import FocusTimer from '../screens/focusTimer';
import SessionUsers from '../screens/sessionUsers';

import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons'


// const CustomTabBarButton = ({children, onPress}) => (
//     <TouchableOpacity
//         style={{
//             top:-30,
//             justifyContent: 'center',
//             alignItems: 'center',
//             ...styles.shadow
//         }} 
//         onPress={onPress}>
//         <View style={{
//             width: 70,
//             height: 70,
//             borderRadius: 35,
//             backgroundColor: '#007788'
//         }}>
//             {children}
//         </View>
//     </TouchableOpacity>

// )

export default function mainTab() {

    const MainTab = createMaterialBottomTabNavigator();

    return <MainTab.Navigator 
              initialRouteName='Users'
              //labeled={false}
              barStyle={{ 
                backgroundColor: '#007788',
                // position: 'absolute',
                // marginTop: -20,
                // bottom: 15,
                // left: 15,
                // right: 15,
                // elevation: 0,
                // height: 75,
                // borderRadius: 15,
                // overflow: 'hidden', // need overflow hidden to display borderadius
                }}
              activeColor='#f6cefc'
              inactiveColor='#f6f6f6'
              tabBarOptions={{
                tabBarLabelStyle: {
                  fontSize: 10
                }
              }}
            >

      <MainTab.Screen 
        name='Analytics' 
        component={Analytics} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              // flexDirection: 'column',
              // alignItems: 'center',
              // justifyContent: 'center',
              // position: 'absolute',
              // top: -9
            }}>
              <SimpleLineIcons name='graph' size={27} color={focused ? '#007788' : '#f6f6f6'} />
            </View>
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: 'bold'
          }
        }} 
      />

      <MainTab.Screen 
        name='Users' 
        component={SessionUsers} 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome5 name='user-friends' size={27} color={focused ? '#007788' : '#f6f6f6'} />
            </View>
          ),
        }} 
      />

      <MainTab.Screen 
        name='Timer' 
        component={FocusTimer}  
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome5 name='clock' size={27} color={focused ? '#007788' : '#f6f6f6'} />
            </View>
          ),
        }}
      />

    <MainTab.Screen 
        name='Tasks' 
        component={Classroom} 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome5 name='clipboard-list' size={27} color={focused ? '#007788' : '#f6f6f6'} />
            </View>
          ),
        }} 
      />

      <MainTab.Screen 
        name='Dashboard' 
        component={Dashboard}  
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome name='user-circle-o' size={27} color={focused ? '#007788' : '#f6f6f6'} />
            </View>
          )
        }}
      />
    </MainTab.Navigator>
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eef1e1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainTab: {
      position: 'absolute',
      backgroundColor: '#eef1e1',
    },
    icon: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    shadow: {
      shadowColor: '#007788',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 1,
      shadowRadius: 3.5,
      elevation: 5,
      zIndex: 999 
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  