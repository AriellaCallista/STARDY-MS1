import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Profile from '../screens/profile';
import Home from '../screens/home';

const screens = {
    Home: {
        screen: Home
    }
}

const ProfileStack = createStackNavigator(screens);

export default createAppContainer(ProfileStack);