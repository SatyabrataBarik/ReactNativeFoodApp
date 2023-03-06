import {View, Image, StyleSheet, Text, Pressable, Button} from 'react-native';
import {useContext} from 'react';
import Ratting from './Ratting';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CartContext from '../Context/Cart/CartContext';

const ProductIterable = ({item, navigation}) => {
 const {addToCart}=useContext(CartContext)

 console.log('addToCart[0]', addToCart)

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
            }}>
            <TouchableOpacity onPress={() => addToCart(item)}>
          
              <Text style={{color:'green'}}>AddToCart</Text>
            </TouchableOpacity >
            <TouchableOpacity  onPress={() => navigation.navigate('order',{navigation:navigation})}> 
            <Text  style={{color:'blue'}}>order</Text>
            </TouchableOpacity>
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
