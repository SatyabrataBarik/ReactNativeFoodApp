import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Like from '../Screens/Like';
import Profile from '../Screens/Profile';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import SearchScreen from '../Screens/SearchScreen';
const Tab = createBottomTabNavigator();

const BottomsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="home"  >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel:'',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="searchScreen"
        component={SearchScreen }
        options={{
          tabBarLabel:'',
                    headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AntDesign name="search1" color={color} size={size} />
          ),
         
        }}
      />
      <Tab.Screen
        name="Like"
        component={Like}
        options={{
          tabBarLabel:'',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AntDesign name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel:'',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomsNavigator;
