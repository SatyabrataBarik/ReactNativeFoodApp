import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
const Order = ({navigation}) => {
  return (
    <SafeAreaView>
      <Pressable style={{padding: 12}} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={25} />
      </Pressable>
      <View style={{padding: 23}}>
        <Text style={{color: '#191917', fontWeight: 500}}>Address</Text>
        <View>
          <Image
            source={{
              uri: 'https://as1.ftcdn.net/v2/jpg/04/60/75/84/1000_F_460758463_yVQPO6mKfBIpg9UdBkUMCoD6QDNTDErH.jpg',
            }}
            style={{height: 150, width: '94%', marginTop: 12, borderRadius: 12}}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 22, color: 'black', fontWeight: 500}}>
            Payment method
          </Text>
        </View>
      </View>
      <View
        style={{
          padding: 23,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Pressable
          style={{
            borderWidth: 1,
            height: 90,
            width: 140,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Entypo name="plus"size={30}/>
        </Pressable>
        <Pressable style={{borderWidth: 1, height: 90, width: 140}}></Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Order;
