import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Favourites from '../screens/Favourites';

const Tab = createBottomTabNavigator();

function Navigation() {
  const navigationOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeScreen') {
              iconName = 'cat';
            } else if (route.name === 'FavScreen') {
              iconName = 'heart';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarLabel: route.name === 'HomeScreen' ? 'All Dogs' : 'Dogs I Like',
          tabBarLabelStyle: {
            padding: 2,
            fontSize: 13.5,
          },
          tabBarItemStyle: {
            padding: 3,
          },
        })}
      >
        <Tab.Screen options={navigationOptions} name="HomeScreen" component={Home} />
        <Tab.Screen options={navigationOptions} name="FavScreen" component={Favourites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
