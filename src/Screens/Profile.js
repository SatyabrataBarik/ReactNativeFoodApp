import {View, Text, Image} from 'react-native';
import React, {useEffect,useState} from 'react';
import Login from '../ProfileManager/Login';
import LoginContext from '../Context/Login/LoginContext';
import ProfileSection from '../ProfileManager/ProfileSection';
import SignUp from '../ProfileManager/SignUp';

const Profile = ({navigation}) => {
  const [login,setLogin]=useState(false)
  // const [login,setLogin]=useState()
  useEffect(() => {
   
    _retrieveData()
    
    }
  ,)
  
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('login');
      
      console.log('value1', value)
      // if (value !== null) {
      //   // We have data!!
      //  let log= JSON.parse(value);
      //  console.log('log', log)
      //   setLogin()
      // }
    } catch (error) {
      // Error retrieving data
      console.log('error', error)
    }
  };

  return (
    <View>
      {login ? <ProfileSection /> : <Login navigation={navigation} />}
      {/* <SignUp navigation={navigation}/> */}
      <Login navigation={navigation} />
    </View>
  );
};

export default Profile;
