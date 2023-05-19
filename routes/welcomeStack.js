import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Welcome from '../screens/welcome';
import Profile from '../screens/profile';

const screens = {
    Welcome: {
        screen: Welcome ,
        navigationOptions: { headerShown: false }
    },
    Profile: {
        screen: Profile
    }
}

const WelcomeStack = createStackNavigator(screens);

export default createAppContainer(WelcomeStack);