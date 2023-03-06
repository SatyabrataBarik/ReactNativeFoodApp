import {View, Text, StyleSheet, Button, ImageBackground} from 'react-native';
import {useContext, useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import LoginContext from '../Context/Login/LoginContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [userEmail, SetUserEmail] = useState('');
  const [pass, SetPass] = useState('');
  const [errors, setErrors] = useState('');

  const handleSignup = navigation => {
    navigation.navigate('signup');
  };
  const getItem = async () => {
    try {
      const jsonFile = await AsyncStorage.getItem('userDetails');
      jsonFile != null ? JSON.parse(jsonFile) : null;
      let user = JSON.parse(jsonFile);
      //  console.log('user.userEmail', user.userEmail)
      if (userEmail == '' || user == '') {
        setErrors(' All above field are Mandatory');
      } else if (user.userEmail == userEmail && user.userPassword == pass) {
        console.log('jsonFile', jsonFile)
        navigation.navigate('home');
        setErrors('');
         let values=true
        try {
           const value=JSON.stringify(values)
          await AsyncStorage.setItem('login', value);
        } catch (e) {
          console.log('e', e)
        }
      } else {
        setErrors('Your user id or password is incorrect');
      }
    } catch (error) {
      console.log('error', error)
    }
  };

  return (
    <ImageBackground
      source={{uri: 'https://mcdn.wallpapersafari.com/medium/17/92/rSjCJd.jpg'}}
      style={{height: '100%', width: '100%'}}>
      <View style={Styled.main}>
        <View style={Styled.input}>
          <TextInput
            style={Styled.TextInput}
            placeholder="Enter your Email"
            onChangeText={val => SetUserEmail(val)}
            placeholderTextColor="white"
          />
        </View>
        <View style={Styled.input}>
          <TextInput
            style={Styled.TextInput}
            placeholder="Enter Password"
            onChangeText={val => SetPass(val)}
            placeholderTextColor="white"
            textIn
          />
        </View>
        <View style={{marginTop: 12}}>
          <Text style={{color: 'red'}}>{errors}</Text>
        </View>
        <View style={Styled.btn}>
          <Button title="Login" onPress={getItem} />
        </View>
        <TouchableOpacity
          style={Styled.button}
          onPress={() => handleSignup(navigation)}>
          {/* <Button title="Signup"   color={'white'} onPress={() => handleSignup(navigation)} /> */}
          <Text style={{color: 'black'}}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const Styled = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 600,
    color: 'white',
  },
  TextInput: {
    borderBottomWidth: 1,
    borderColor: 'white',
    height: 40,
    color:'white',

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  input: {
    width: '60%',
    height: 40,
    marginTop: 20,
    color: 'white',
  },
  button: {
    marginTop: 20,
    width: 232,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
  },
  btn: {
    marginTop: 20,
    width: '60%',
  },
});
export default Login;
