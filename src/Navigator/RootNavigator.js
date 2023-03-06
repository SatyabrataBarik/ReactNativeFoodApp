import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomsNavigator from './BottomsNavigator';
import Login from '../ProfileManager/Login';
import ProductList from '../ProductDetails/ProductList';
import SignUp from '../ProfileManager/SignUp';
import SinglePage from '../ProductDetails/SinglePage';
import ProfileSection from '../ProfileManager/ProfileSection';
import Order from '../Screens/Order';
import Cart from '../ProductDetails/Cart';
import Search from '../Screens/Search';
const rootStack = createStackNavigator();
const RootNavigator = () => {
  return (
    <rootStack.Navigator initialRouteName="landing">
      <rootStack.Screen
        name="landing"
        component={BottomsNavigator}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="plp"
        component={ProductList}
        options={{headerShown: false}}
      />
       <rootStack.Screen
        name="singlePage"
        component={SinglePage}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="signup"
        component={SignUp}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="profileSection"
        component={ProfileSection}
        options={{headerShown: false}}
      />
     
      <rootStack.Screen
        name="order"
        component={Order}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="search"
        component={Search}
        options={{headerShown: false}}
      />
     
    </rootStack.Navigator>
  );
};

export default RootNavigator;
