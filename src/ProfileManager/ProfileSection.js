import {View, Text,StyleSheet, Pressable, Button} from 'react-native';
import {useContext,useState} from 'react';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import LoginContext from '../Context/Login/LoginContext';
import SignUpContextPage from '../Context/Login/SignUpContext/SignUpContextPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProfileSection = ({navigation,handlePress}) => {
    
   
  return (
    <View>

      <View style={{alignItems: 'center', marginTop: 22}}>
    
        <Entypo name="user" size={90} color="black" />
      </View>
     <View style={{ padding:40,marginTop:12}}>
        <Text style={styles.text}>Name: </Text>
        <Text style={styles.text}>Email:</Text>
        <Text style={styles.text}>Phone: {}</Text>
        <Text style={styles.text}>Name:{}</Text>
      </View>
        <Button title='LOGOUT' onPress={handlePress}/>
      
    </View>
  );
};const styles=StyleSheet.create({
    text:{
        marginTop:33,
        color:'black',
        fontSize:18
    }
})
export default ProfileSection;
