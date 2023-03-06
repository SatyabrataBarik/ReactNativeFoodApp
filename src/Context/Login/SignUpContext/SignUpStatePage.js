import SignUpContextPage from './SignUpContextPage';
import {useState} from 'react';
const SignUpStatePage = props => {
  const [userSign, setUserSign] = useState([
    {
      userName: '',
      userMobile: '',
      userEmail: '',
      userPassword: '',
    },
  ]);
  const handleSignup = (
    userName,
    userMobile,
    userEmail,
    userPassword,
    valid,
    navigation,
  ) => {
  console.warn('valid', valid)
    if (userEmail == userSign.userEmail) {
      alert('you already signup Signup With another Email');
    } else if (valid) {
      setUserSign([
        {...userSign, userName, userMobile, userEmail, userPassword},
      ]);
      alert('Welcome');
      // navigation.navigate('login');
    } else {
      alert('input  field is empty');
    }
  };
  console.log('userSign', userSign);
  return (
    <SignUpContextPage.Provider value={{userSign, handleSignup}}>
      {props.children}
    </SignUpContextPage.Provider>
  );
};

export default SignUpStatePage;
