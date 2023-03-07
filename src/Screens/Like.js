import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {useContext, useState, useEffect} from 'react';
import {LikeContext} from '../Context/Like/LikeContext';
import AllProduct from '../JSON/AllProduct.json';
import {ScrollView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {Touchable} from 'react-native/Libraries/Components/Touchable/Touchable';
import CartContext from '../Context/Cart/CartContext';
const Like = ({navigation}) => {
  const {data,handleDelete} = useContext(LikeContext);
  const {addToCart}=useContext(CartContext)
  // console.log('data', data);
  const handlePress = () => {};
  return (
    <ScrollView style={{flex: 1,height:'100%'}}>
      {data == '' ? (
        <View
          style={{
            height:600,
            justifyContent: 'center',
            alignItems: 'center',
          
          }}>
          <Text style={{color:'black'}}>WishList is Empty</Text>
        </View>
      ) : (
        data.map((value, i) => {
          return (
            <View>
              <Pressable
                onPress={() => navigation.navigate('singlePage', {item: value})}
                key={i}>
                <View style={Liked.main}>
                  <Text style={{marginLeft: 15}}>{value.Pname}</Text>
                  <Image
                    source={{uri: value.image}}
                    style={{height: 120, width: 120}}
                  />
                </View>
              </Pressable>
            
            <Pressable onPress={()=>handleDelete(value.id)} style={Liked.delete}>
              <AntDesign name="delete" size={20} />
            </Pressable> 
            <Pressable  style={Liked.cart} onPress={()=>{return (
              addToCart(value),
              handleDelete(value.id)
            )}}>
              <Text>Add To Cart</Text>
            </Pressable>
            </View>
          );
        })
      )}
    </ScrollView>
  );
};
const Liked = StyleSheet.create({
  main: {
   backgroundColor:'#ffff',
    margin: 10,
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  delete: {
    position: 'absolute',
    top: 110,
    left: 40,
  },
  cart: {
    position: 'absolute',
    top: 110,
    left: 90,
  },
});
export default Like;
