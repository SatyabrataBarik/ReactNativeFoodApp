import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import {useState, useContext} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import SignUpContextPage from '../Context/Login/SignUpContext/SignUpContextPage';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const [userName, setUserName] = useState('');

  const [userEmail, setUserEmail] = useState('');

  const [userPassword, setUserPassword] = useState('');

  const [userMobile, setUserMobile] = useState('');

  const [showError, setShowError] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    password: false,
    allAbove: false,
  });

  const handleName = val => {
    // setShowError({... prev ,[name] :true})

    if (!/^[a-zA-Z ]+$/.test(val)) {
      setShowError({...showError, name: true});
      // setNameError('name is invalid');
    } else {
      setShowError({...showError, name: false});
      setUserName(val);
    }
  };
  const handleEmail = val => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        val,
      )
    ) {
      setShowError({...showError, email: true});
    } else {
      setShowError({...showError, email: false});
      setUserEmail(val);
    }
  };
  const handleMobile = val => {
    if (!/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/.test(val)) {
      setShowError({...showError, phoneNumber: true});
    } else {
      setShowError({...showError, phoneNumber: false});
      setUserMobile(val);
    }
  };
  const handlePassword = val => {
    if (val.length <= 8) {
      setShowError({...showError, password: true});
    } else {
      setShowError({...showError, password: false});
      setUserPassword(val);
    }
  };

  const saveSignUp = async () => {
    let userDetails = {};
    if (
      userEmail == '' ||
      userMobile == '' ||
      userName == '' ||
      userPassword == ''
    ) {
      setShowError({...showError, allAbove: true});
    } else {
      setShowError({...showError, allAbove: false});
      userDetails.userName = userName;
      userDetails.userEmail = userEmail;
      userDetails.userPassword = userPassword;
      userDetails.userMobile = userMobile;

     
      let allUsersDetails;
      try {
        allUsersDetails = await AsyncStorage.getItem('allUsers');
        allUsersDetails != null ? JSON.parse(allUsersDetails) : null;
      } catch (e) {
        console.error();
      }
      if (allUsersDetails === null) {
        let usersDB = [];
        usersDB.push(userDetails);
        try {
          const allUsers = JSON.stringify(usersDB);
          await AsyncStorage.setItem('allUsers', allUsers);
          navigation.navigate('login')
          alert('user data saved');

        } catch (e) {
          console.error();
        }
      } else {
        allUsersDetails != null ? JSON.parse(allUsersDetails) : null;
        let parsedData = JSON.parse(allUsersDetails)
        let existingUser;
        parsedData.map(
          (user, id) =>
          existingUser=user.userEmail === userEmail
        );
        if (existingUser) {
          alert('already registered');
        } else {
          let tempUsers = [...JSON.parse(allUsersDetails),userDetails]
          console.log('tempUsers', tempUsers)
          try {
            const userToAdd = JSON.stringify(tempUsers);
            await AsyncStorage.setItem('allUsers', userToAdd);
            alert('user data saved');
          } catch (e) {
            console.error(e);
          }
        }
      }
    }

    try {
      let allUsersDetails = await AsyncStorage.getItem('allUsers');
      allUsersDetails != null ? JSON.parse(allUsersDetails) : null;
      console.log('allUsersDetails', allUsersDetails);
    } catch (e) {
      console.error();
    }
  };

  return (
    <View style={Styled.main}>
      <View>
        <Text style={{fontSize: 40, color: 'black'}}>Register</Text>
        <Text>Enter Your Details to Register</Text>
      </View>
      <View style={Styled.input}>
        <View style={{marginLeft: 6}}>
          <Entypo name="user" size={20} />
        </View>
        <TextInput
          style={Styled.TextInput}
          placeholder="Enter your Name"
          onChangeText={handleName}
        />
      </View>
      {showError.name && (
        <Text style={{color: 'red'}}>Please Enter valid name</Text>
      )}
      <View style={Styled.input}>
        <View style={{marginLeft: 6}}>
          <Fontisto name="email" size={20} />
        </View>
        <TextInput
          style={Styled.TextInput}
          placeholder="Enter your Email"
          onChangeText={handleEmail}
        />
      </View>
      {showError.email && (
        <Text style={{color: 'red'}}>Please Enter valid Email</Text>
      )}
      <View style={Styled.input}>
        <View style={{marginLeft: 6}}>
          <Entypo name="mobile" size={20} />
        </View>
        <TextInput
          style={Styled.TextInput}
          placeholder="Enter your Phone"
          keyboardType="numeric"
          maxLength={10}
          onChangeText={handleMobile}
        />
      </View>
      {showError.phoneNumber && (
        <Text style={{color: 'red'}}>Please Enter valid phone number</Text>
      )}
      <View style={Styled.input}>
        <View style={{marginLeft: 6}}>
          <Entypo name="lock" size={20} />
        </View>
        <TextInput
          style={Styled.TextInput}
          placeholder="Enter Password"
          onChangeText={handlePassword}
          secureTextEntry
        />
      </View>
      {showError.password && (
        <Text style={{color: 'red'}}>Please Enter valid password</Text>
      )}
      {showError.allAbove && (
        <Text style={{color: 'red'}}>All above field are mandatory</Text>
      )}
      <View style={Styled.button}>
        <Button title="Signup" onPress={() => saveSignUp()} />
        <View style={{marginTop: 12}}>
          <Pressable
            onPress={() => {
              navigation.navigate('login');
            }}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'blue'}}>already have account ?login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const Styled = StyleSheet.create({
  main: {
    padding: 30,
    height: 600,
  },
  TextInput: {
    height: 40,
    marginLeft: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  input: {
    width: '96%',
    height: 40,
    marginTop: 40,
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginTop: 30,
    width: '90%',
    justifyContent: 'center',
  },
});

export default SignUp;
