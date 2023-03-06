import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useContext} from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

import { LikeContext } from '../Context/Like/LikeContext';
const Product = ({item, navigation}) => {
  const {handleSet}=useContext(LikeContext)
  // console.log("product==",item.product)
  let x = item.product;
  const handlePress = (data, navigation) => {
    navigation.navigate('plp', {data: data, navigation: navigation});
    //  console.log("======",{data})
  };
  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Pressable onPress={() => handlePress(item.product, navigation)}>
          <Image
            style={{
              height: 170,
              width: 320,
              alignItems: 'center',
              borderRadius: 30,
            }}
            source={{
              uri: item.image,
            }}
          />
        </Pressable>

        <View style={Styled.name}>
          {/* <Text style={{color: 'blue'}}>{item.name}</Text> */}
          <Text style={{color: 'black'}}>{item.time}</Text>
        </View>
      </View>
      <View>
        <Text style={{color: '#05061F', fontSize: 20, fontWeight: 500}}>
          {item.name}
        </Text>
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text>
          <AntDesign name="star" color="orange" />
          <Text style={{color: 'black', marginLeft: 6}}>
            {item.ratting}
            <Pressable onPress={()=>handleSet(item)}>
              
              <AntDesign name="hearto" backgroundColor="white" color="red" size={12} />
            </Pressable>
          </Text>
          <Text>{item.product.catagories}</Text>
        </Text>
      </View>
      
    </View>
  );
};
const Styled = StyleSheet.create({
  name: {
    color: 'red',
    position: 'absolute',
    backgroundColor: 'white',
    width: 80,
    height: 40,
    justifyContent: 'center',
    left: 0,
    top: 130,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  rate: {
    position: 'absolute',
    left: -150,
    top: 2,
  },
});
export default Product;
