import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import Welcome from './screens/welcome';
import Navigator from './routes/welcomeStack';
import Profile from './screens/profile';

import Home from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from 'react-navigation-stack';

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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen 
            name='Welcome'
            component={ Welcome }
          />
          <Stack.Screen
            name='Profile'
            component={Profile}
          />
          <Stack.Screen 
            name='Home'
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef1e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    
  }
});
