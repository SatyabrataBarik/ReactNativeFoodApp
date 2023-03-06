import {View, Text,StyleSheet, Pressable} from 'react-native';
import {useContext,useState} from 'react';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import LoginContext from '../Context/Login/LoginContext';
import SignUpContextPage from '../Context/Login/SignUpContext/SignUpContextPage';
const ProfileSection = ({navigation}) => {
    
     
     
  return (
    <View>

      <View style={{alignItems: 'center', marginTop: 22}}>
    
        <Entypo name="user" size={90} color="black" />
      </View>
      {
        data.map((v)=><View style={{ padding:40,marginTop:12}}>
        <Text style={styles.text}>Name: {v.userName}</Text>
        <Text style={styles.text}>Email: {v.userEmail}</Text>
        <Text style={styles.text}>Phone: {}</Text>
        <Text style={styles.text}>Name:{}</Text>
      </View>
        )
      }
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
