import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

import Welcome from './screens/welcome';
import Profile from './screens/profile';
import Dashboard from './screens/tabs/dashboard/dashboard';
import MainTab from './navigation/mainTab';
import Encouragement from './screens/tabs/dashboard/encouragement';
import Notes from './screens/tabs/dashboard/notes';
import Todo from './screens/tabs/dashboard/todo';
import Home from './screens/home';
import EditProfile from './screens/tabs/dashboard/editProfile';
import Login from './screens/login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Feather } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

export default function App() {


  const[fontsLoaded] = useFonts({
    PressStart: require('./assets/fonts/PressStart2P-Regular.ttf'),
    RowdiesBold: require('./assets/fonts/Rowdies-Bold.ttf'),
    RowdiesRegular: require('./assets/fonts/Rowdies-Regular.ttf'),
    UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf'),
    UbuntuMedium: require('./assets/fonts/Ubuntu-Medium.ttf')
  });


  if (!fontsLoaded) {
    return null;
  } else {
    return (

      <NavigationContainer>
        <Stack.Navigator screenOptions={({ navigation }) => ({
          headerTitleStyle: {
            color: '#f6f6f6'
          },
          headerStyle: {
            backgroundColor: '#007788'
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Feather
              name='arrow-left' 
              size={22} 
              onPress={() => navigation.goBack() }
              color='#f6f6f6' />
          )
        })}>
          <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }}/>
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }}/>
          <Stack.Screen name='MainTab' children={MainTab} options={{ headerShown: false }}/>
          <Stack.Screen name='Notes' component={Notes} />
          <Stack.Screen name='To Do List' component={Todo} />
          <Stack.Screen name='Encouragement Notes!' component={Encouragement} /> 
          <Stack.Screen name='Edit Profile' component={EditProfile} /> 
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#eef1e1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   mainTab: {
//     position: 'absolute',
//     backgroundColor: '#eef1e1',
//   },
//   icon: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }, 
//   shadow: {
//     shadowColor: '#007788',
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 1,
//     shadowRadius: 3.5,
//     elevation: 5,
//     zIndex: 999 
//   },
//   iconContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
