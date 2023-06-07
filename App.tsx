import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './src/Navigator/RootNavigator';
import LoginState from './src/Context/Login/LoginState';
import SignUpStatePage from './src/Context/Login/SignUpContext/SignUpStatePage';
import LikeState from './src/Context/Like/LikeState';

import CartState from './src/Context/Cart/CartState';
import PaymentState from './src/Context/Payment/PaymentState';
import { ActivityIndicator, View } from 'react-native';
import axios from 'axios';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [datValue,setdataValue]=React.useState();
  React.useEffect(()=>{
    fetch();
  },[])
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

    const fetch:any=async ()=>{
      const options = {

        method: "GET",
    
        headers: {
    
          Authorization: `Bearer ${'66809256eec1e4143a538804f4fc07e705486b1a667b00e95b83926678b1bb518e1c55ef8037c95991ea5e612d256d55182923cd8850e3a49002a67fdb3f34c5767be8087790bb196d26381f2b71e3fa2b27b8924a35a87522d73f602a054db00e26c0769ebd6d165a83b754f0baa9f3a503fb7c53cf9bea4ac12a483679c362'}`,
    
        },
    
      }
      const response = await fetch(`${"http://localhost:1337"}${"/api/cards"}`, options)

  const data = await response.json()

  return  console.log('data', data.data)
    }
    
  return (
    <>
      {isLoading ? (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <ActivityIndicator size={'large'} color="#0000ff" />
        </View>
      ) : (
        <PaymentState>
          <CartState>
            <SignUpStatePage>
              <LikeState>
                <LoginState>
                  <NavigationContainer>
                    <RootNavigator />
                  </NavigationContainer>
                </LoginState>
              </LikeState>
            </SignUpStatePage>
          </CartState>
        </PaymentState>
      )}
    </>
  );
};

export default App;
