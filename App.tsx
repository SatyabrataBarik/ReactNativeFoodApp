import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from './src/Navigator/RootNavigator';
import LoginState from './src/Context/Login/LoginState';
import SignUpStatePage from './src/Context/Login/SignUpContext/SignUpStatePage';
import LikeState from './src/Context/Like/LikeState';

import CartState from './src/Context/Cart/CartState';
import PaymentState from './src/Context/Payment/PaymentState';
import {ActivityIndicator, View} from 'react-native';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <>
      {isLoading ? (
        <View style={{alignItems: 'center', justifyContent: 'center',flex:1}}>
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
