import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Login from '../ProfileManager/Login';
import LoginContext from '../Context/Login/LoginContext';
import ProfileSection from '../ProfileManager/ProfileSection';
import SignUp from '../ProfileManager/SignUp';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [count, setCount] = useState(1);
  const [run,setRun]=useState(0)
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
     let UsersDetails = await AsyncStorage.getItem('loginUser');
      UsersDetails != null ? JSON.parse(UsersDetails) : null;
      console.log('UserDetail', UsersDetails);
      console.log('isLogout', isLogout);
      setIsLogin(UsersDetails);
    } catch (error) {}
  };

  const handlePress = () => {
    setIsLogin(false);
  };
 
  console.log('isLogout', isLogout);
  console.log('isLogin', isLogin);
  return (
    <View style={{flex: 1}}>
      {isLogin ? (
        <ProfileSection handlePress={handlePress} />
      ) : (
        <Login navigation={navigation} />
      )}
    </View>
  );
};

export default Profile;
