
import 'react-native-gesture-handler';
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import RootNavigator from './src/Navigator/RootNavigator'
import LoginState from './src/Context/Login/LoginState';
import SignUpStatePage from './src/Context/Login/SignUpContext/SignUpStatePage';
import LikeState from './src/Context/Like/LikeState';

import CartState from './src/Context/Cart/CartState';
import PaymentState from './src/Context/Payment/PaymentState';

const App = () => {
  return (
    <PaymentState>
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
 </PaymentState>
  )
}

export default App