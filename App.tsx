
import 'react-native-gesture-handler';
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import RootNavigator from './src/Navigator/RootNavigator'
import LoginState from './src/Context/Login/LoginState';
import SignUpStatePage from './src/Context/Login/SignUpContext/SignUpStatePage';
import LikeState from './src/Context/Like/LikeState';
import { CartProvider, useCart } from "react-use-cart";
import CartState from './src/Context/Cart/CartState';

const App = () => {
  return (
    <CartState>
    <SignUpStatePage>
      <LikeState>
    <LoginState>
 <NavigationContainer>
  
    <RootNavigator/>
   
 </NavigationContainer>
 </LoginState>
 </LikeState>
 </SignUpStatePage>
 </CartState>
  )
}

export default App