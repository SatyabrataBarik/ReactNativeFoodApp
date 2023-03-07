import {View, Text, Image} from 'react-native';
import React, {useEffect,useState} from 'react';
import Login from '../ProfileManager/Login';
import LoginContext from '../Context/Login/LoginContext';
import ProfileSection from '../ProfileManager/ProfileSection';
import SignUp from '../ProfileManager/SignUp';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [isLogin,setIsLogin]=useState(false)
  const [isLogout,setIsLogout]=useState(false)
  const [count,setCount]=useState(1)

  // let UsersDetails = await AsyncStorage.getItem('loginUser');
  // UsersDetails != null ? JSON.parse(UsersDetails) : null;
  // console.log('UserDetails', UsersDetails)
  // const [login,setLogin]=useState()
  // let UsersDetails = await AsyncStorage.getItem('loginUser');
  // // UsersDetails != null ? JSON.parse(UsersDetails) : null;
   useEffect(()=>{
    getData()
   },[])
   var UsersDetails;
   const getData=async()=>{
    try {
       UsersDetails = await AsyncStorage.getItem('loginUser');
      UsersDetails != null ? JSON.parse(UsersDetails) : null;
      console.log('UserDetail', UsersDetails)
      console.log('isLogout', isLogout)
    
      setIsLogin(UsersDetails)
    } catch (error) {
      
    }
    
  
   }
  //   console.log('UserDetails1',
  //     UsersDetails
  //   )
  const handlePress=()=>{
   setIsLogin(false)
  }
  console.log('isLogout', isLogout)
  console.log('isLogin', isLogin)
  return (
    <View style={{flex:1}}>
    {  isLogin ? <ProfileSection handlePress={handlePress} /> : <Login navigation={navigation} />}
      {/* /* <SignUp navigation={navigation}/>
      <Login navigation={navigation} /> */}
    </View>
  );
};

export default Profile;
