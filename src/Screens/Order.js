import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import PaymentMethod from '../Payment/PaymentMethod';
import PaymentContext from '../Context/Payment/PaymentContext';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const Order = ({navigation}) => {
  const {cardDetails, setPayment, payment, setClickPayment, clickPayment} =
    useContext(PaymentContext);
  console.log('cardDetails', cardDetails);
  console.log('payment.width', payment.width);
  console.log('payment.height', payment.height);
  const cardRender = ({item}) => {
    return (
      <View
        style={{
          borderWidth: 1,
          height: 90,
          width: 140,
          alignItems: 'center',
          justifyContent: 'center',
          backfaceVisibility: 'hidden',
          marginLeft:6
        }}>
        <View>
          <Text style={{fontSize:11,color:'black'}}>card Number: {item.cardNumber}</Text>
        </View>
      </View>
    );
  };
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
        <ScrollView horizontal={true}>
          <FlatList
            horizontal
            keyExtractor={item => item.index}
            data={cardDetails}
            renderItem={cardRender}
          />

          <Pressable
            style={{
              borderWidth: 1,
              height: 90,
              width: 140,
              alignItems: 'center',
              justifyContent: 'center',
              backfaceVisibility: 'hidden',
            }}
            onPress={() => {
              return (
                setPayment({
                  ...payment,
                  width: 370,
                  height: 500,
                  background: 'visible',
                }),
                setClickPayment(true)
              );
            }}>
            <Entypo name="plus" size={30} />
          </Pressable>
        </ScrollView>
      </View>
      <View
        style={{
          height: payment.height,
          width: payment.width,
          borderWidth: 1,
          position: 'absolute',
          top: 38,
          left: 12,
          backgroundColor: '#ffff',
        }}>
        <View>{clickPayment && <PaymentMethod payment={payment} />}</View>
      </View>
    </SafeAreaView>
  );
};

export default Order;
