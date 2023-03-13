import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import {useRef, useState, useContext} from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import CartContext from '../Context/Cart/CartContext';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const SinglePage = ({route, navigation}) => {
  const {item} = route.params;
  const {cartProductCount, totalPrice} = useContext(CartContext);

  const [count, setCount] = useState(1);
  const [money, setMoney] = useState(item.Price);
  const previous = useRef(money);
  console.log('previous', previous);
  console.log('idx===', item);

  const decrement = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
      setMoney(money - previous.current);
    }
  };
  const increment = () => {
    if (count < 1) {
      setCount(1);
    } else {
      setCount(count + 1);
      setMoney(previous.current + money);
    }
  };
  return (
    <View style={{backgroundColor: '#F8F8F8', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 3,
          alignItems:'center'
        }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons name="md-arrow-back-outline" size={25} color={'black'} />
        </Pressable>
        <Text
          style={{
            backgroundColor: '#DDDEE9',
            color: '#0D0C22',
            fontSize: 12,
            width: 120,
            borderRadius: 10,
            textAlign: 'center',
            padding: 4,
            height:28,
            alignItems:'center'
          }}>
          {item.catagories}
        </Text>
        <View>
          <FontAwesome name="list-ul" size={20} color={''} />
        </View>
      </View>
   <ScrollView>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{uri: item.image}}
          style={{height: 170, width: 170, marginTop: 50, borderRadius: 22}}
        />
        <View
          style={{
            height: 36,
            width: 86,
            top: -9,
            backgroundColor: '#FFFFFF',
            borderRadius: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Pressable onPress={decrement}>
            <Entypo name="minus" size={30} />
          </Pressable>
          <Text style={{alignItems: 'center', fontSize: 20}}>{count}</Text>
          <Pressable onPress={increment}>
            <Entypo name="plus" size={30} />
          </Pressable>
        </View>
        <View>
          <Text
            style={{
              color: '#2A2B40',
              fontSize: 30,
              color: '#03041E',
              fontWeight: 700,
            }}>
            {item.Pname}
            <Entypo name="minus" size={30} />
            Rs{money}
          </Text>
        </View>

        <View
          style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://w7.pngwing.com/pngs/206/654/png-transparent-burning-fire-combustion-raging-fire-flames.png',
            }}
            style={{height: 30, width: 30}}
          />
          <Text>380.113Cal</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 120,

          height: '100%',
          borderTopLeftRadius: 34,
          borderTopRightRadius: 34,
          padding: 12,
          backgroundColor: '#FFFFFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 25,
          }}>
          <Text style={{color: '#545461', fontSize: 15, fontWeight: 700}}>
            {cartProductCount} items in cart
          </Text>
          <Text>Rs:{totalPrice}</Text>
        </View>
        <View
          style={{
            padding: 23,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', width: '80%'}}>
            <Entypo name="location-pin" size={20} />
            <Text style={{marginLeft: 6, color: '#43404F'}}>746 Hyderabad</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome name="cc-mastercard" />
            <Text style={{color: '#43404F'}}> ....45678</Text>
          </View>
        </View>
        <Pressable style={{borderRadius: 12,justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.navigate('order')}>
          {/* <Button title="Order" borderRadius={12} color="#FC6E3C" /> */}
          <Text
            style={{
              width: '80%',
              height: 35,
              justifyContent:'center',
              textAlign: 'center',
              backgroundColor:'#FC6E3C',
              color:'white',
              fontWeight:'700',
              fontSize:15,
              borderRadius:14,
               
            }}>
           Order
          </Text>
        </Pressable>
      </View>
      </ScrollView>
    </View>
  );
};

export default SinglePage;
