import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageComponent,
  ScrollViewBase,
  StatusBar,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

import {
  FlatList,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import allProduct from '../JSON/AllProduct.json';

import Product from './Product';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const src = [
  {key: 1, image: require('../../Assets/dogs.png'), name: 'Hot Dogs'},
  {key: 2, image: require('../../Assets/salad.png'), name: 'Salads'},
  {key: 3, image: require('../../Assets/burger.png'), name: 'Burger'},
  {key: 4, image: require('../../Assets/pizza.png'), name: 'Pizza'},
  {key: 5, image: require('../../Assets/snacs.png'), name: 'Snacks'},
  {key: 6, image: require('../../Assets/sushi.png'), name: 'Sushi'},
  {key: 7, image: require('../../Assets/drink.png'), name: 'Drink'},
];

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [selectProduct, setSelectProduct] = useState();
  const handleClick = item => {
    setSelectProduct(item.key);
    let selectItem = allProduct.filter(allItem => allItem.fkey == item.key);
    setData(selectItem);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableNativeFeedback
        style={{
         
          // borderColor:"red",
          margin: 9,
          color: 'black',
          backgroundColor: selectProduct == item.key ? '#FB6E3B' : '#FFFFFF',
          alignItems: 'center',
          primary: 'white',
          borderRadius: 40,
          elevation:3,
          height:100
        }}
        onPress={() => handleClick(item)}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            borderColor: 'none',
            margin: 8,
            justifyContent: 'center',
            backgroundColor: '#F5F5F6',
            alignItems: 'center',
          }}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </View>
        <Text
          style={{
            color: selectProduct == item.key ? '#FFFFFF' : '#676776',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
          }}>
          {item.name}
        </Text>
      </TouchableNativeFeedback>
    );
  };

  return (
    <>
      <SafeAreaView style={Styled.container}>
        <View style={{marginLeft:8,flex:1}}>
        <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            
            backgroundColor: '#FFFFFF',
          }}>
          <Pressable>
            <FontAwesome name="street-view" size={20} color="#030303" />
          </Pressable>
          <View
            style={{
              width: 140,
              height: 40,
              borderRadius: 12,
             
              backgroundColor: '#F6F6F6',
              elevation:4,
              // borderWidth:0.1
            }}>
            <Text style={{color: '#0A091C', textAlign: 'center', marginTop: 9}}>
              745 Lincoin PI
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate('cart')}>
            <Fontisto name="shopping-basket" size={20} color="#030303" />
          </Pressable>
        </View>
        <View style={{backgroundColor: '#FEFEFE'}}>
          <View style={{marginTop:12,}}>
            <Text style={Styled.text}>Main </Text>
            <Text style={Styled.text}>Categories</Text>
          </View>
          <View style={{backgroundColor: '#FDFDFD'}}>
            <FlatList
              horizontal
               showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.key}
              data={src}
              renderItem={({item}) => renderItem({item: item})}
            />
          </View>
   
          {/* <View style={{}}> */}
            <FlatList
           
              showsVerticalScrollIndicator={false}
              data={data.length != 0 ? data : allProduct}
              keyExtractor={data => data.id}
              renderItem={({item}) => {
                return <Product item={item} navigation={navigation} />;
              }}
            />
          {/* </View> */}
          </View>
          </View>
      </SafeAreaView>
    </>
  );
};
const Styled = StyleSheet.create({
  container: {
    flex: 1,
    padding:12,
    backgroundColor:'#FFFFFF'
  },
  text: {
    
    fontSize: 26,
    color: 'black',
    backgroundColor: '#FEFEFE',
    
  },

  img: {},
});
export default Home;
