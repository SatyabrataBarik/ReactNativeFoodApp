import {View, Text, Pressable, FlatList, Image, StyleSheet} from 'react-native';
import {useContext} from 'react';

import CartContext from '../Context/Cart/CartContext';

import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {ScrollView} from 'react-native-gesture-handler';

const Cart = ({navigation}) => {
  const {data, increases, decrease, deleteItem, SubTotalMoney,totalQuantity} =
    useContext(CartContext);
  console.log('data', data.quantity);
  const cartItem = ({item}) => {
    // console.log('Cart', item.Pname)
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Pressable
          style={{
            width: '90%',
            backgroundColor: '#ffff',
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderBottomWidth: 1,
            padding: 12,
          }}
          onPress={() => navigation.navigate('singlePage', {item: item})}>
          <View style={{flexDirection: 'row'}}>
            <Image source={{uri: item.image}} style={{height: 80, width: 80}} />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 6,
                width: 90,
              }}>
              <Text style={Styled.text}>{item.Pname}</Text>
              <Text style={Styled.text}>$ {item.Price}</Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row-reverse',
              marginRight: 8,
            }}>
            <Pressable style={Styled.qnButton} onPress={() => increases(item)}>
              <AntDesign name="plussquare" size={18} color="green" />
            </Pressable>
            <Text style={{marginLeft: 6, color: 'black'}}>{item.quantity}</Text>

            <Pressable style={Styled.qnButton} onPress={() => decrease(item)}>
              <AntDesign name="minussquare" size={18} color="red" />
            </Pressable>
          </View>

          <Pressable
            style={{alignItems: 'center', justifyContent: 'center'}}
            onPress={() => deleteItem(item)}>
            <Entypo name="trash" color="red" size={18} />
          </Pressable>
        </Pressable>
      </View>
    );
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#ffff',
          height: 39,
        }}>
        <Pressable style={{padding: 6}} onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" size={16} color="brown" />
        </Pressable>
        <View>
          <Text style={{color: 'brown', fontWeight: 700}}>MY CART</Text>
        </View>
        <View>
          <Text></Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 12}}>
        {data != '' && (
          <View
            style={{
              borderBottomWidth: 0.2,
              width: '95%',
              height:97,
              justifyContent: 'space-around',
            }}>
            <Text style={{color: 'black'}}>
              Subtotal <FontAwesome name="rupee" color="black" />
              {SubTotalMoney()}
            </Text>
            <Text style={{color: 'green', fontSize: 12}}>
              <AntDesign name="checkcircle" size={14} color="green" /> Your
              order is eligible for FREE Delivery
            </Text>
            <View style={{alignItems:'center'}}>
              <Pressable
                style={{
                  width: '80%',
                  height: 36,
                
                  alignItems: 'center',
                  justifyContent:'center',
                  backgroundColor:'#FFD700'
                }}
                onPress={()=>navigation.navigate('order')}
    
                >
                <Text style={{color:'black'}}> Proceed to Buy({totalQuantity()} item) </Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
      {data == '' ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100%',
          }}>
          <Text style={{color: 'black', fontSize: 23}}>Cart is Empty</Text>
          {/* <Pressable onPress={navigation.navigate('search')}><Text style={{color:'green'}}>click for Buy</Text></Pressable> */}
        </View>
      ) : (
        <ScrollView>
          <View style={{marginTop: 30}}>
            <View>
              <FlatList data={data} renderItem={item => cartItem(item)} />
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
const Styled = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 16,
  },
  qnButton: {
    marginLeft: 6,
  },
});
export default Cart;
