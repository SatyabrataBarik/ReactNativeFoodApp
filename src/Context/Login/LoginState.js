import {useState, useContext} from 'react';
import LoginContext from './LoginContext';
import SignUpContextPage from './SignUpContext/SignUpContextPage';

const LoginState = props => {
  const [error, setError] = useState('');
  const [login, setLogin] = useState({
    user: '',
    pass: '',
  });
  const {userSign} = useContext(SignUpContextPage);
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = (user, pass, navigation) => {
    console.log('user1', user);
    console.log('userSign', userSign);
    let x = userSign.find(v => v.userEmail == user && v.userPassword == pass);
    console.log('x', x);
    if (x) {
      setIsLogin(true);
      setLogin({user, pass});
      navigation.navigate('home', {navigation});
    } else {
      setError('Your User id or password is incorrect');
    }
    console.log('x', x);
  };

  console.log('setLogin', isLogin);
  return (
    <LoginContext.Provider value={{login, handleLogin, isLogin, error}}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginState;
