import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import LinkScreen from "../screens/LinkScreen"

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions: {
      title: 'Home',
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  }
)

const LinkStack = createStackNavigator(
  {
    Home: LinkScreen
  },
  {
    defaultNavigationOptions: {
      title: 'Link',
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Link!',
    },
  }
)

const Tabs = createBottomTabNavigator({
  HomeStack,
  LinkStack
});

export default createAppContainer(Tabs);
