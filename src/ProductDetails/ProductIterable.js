import {View, Image, StyleSheet, Text, Pressable, Button} from 'react-native';
import {useContext} from 'react';
import Ratting from './Ratting';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CartContext from '../Context/Cart/CartContext';
import {LikeContext} from '../Context/Like/LikeContext';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
const ProductIterable = ({item, navigation}) => {
  const {addToCart} = useContext(CartContext);
  const {handleSet, whishList, handleDelete} = useContext(LikeContext);
  console.log('addToCart[0]', addToCart);

  // console.log('navigation', navigation)
  const handlePress = item => {
    console.log('itemH', item);
    navigation.navigate('singlePage', {item: item});
  };
  return (
    <View>
      <Pressable style={Styled.image} onPress={() => handlePress(item)}>
        <View style={{color: 'black'}}>
          <Text style={{color: 'black'}}>{item.Pname}</Text>
          <Text>
            <Ratting rate={item.ratting} />
          </Text>
          <Text style={{color: 'black'}}>Price:{item.Price}</Text>
        </View>
        <Image
          source={{uri: item.image}}
          style={{height: 120, width: 120, borderRadius: 12}}
        />
      </Pressable>
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => addToCart(item)}>
          <Text style={{color: 'green'}}>AddToCart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('order', {navigation: navigation})
          }>
          <Text style={{color: 'blue'}}>order</Text>
        </TouchableOpacity>
        {whishList.find(id => id === item.id) ? (
          <Pressable onPress={() => handleDelete(item.id)}>
            <AntDesign name="heart" color="red" size={15} />
          </Pressable>
        ) : (
          <Pressable onPress={() => handleSet(item)}>
            <AntDesign name="hearto" color="red" size={15} />
          </Pressable>
        )}
      </View>
    </View>
  );
};
const Styled = StyleSheet.create({
  image: {
    backgroundColor: 'white',
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
  },
});
export default ProductIterable;
