import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {useContext, useState, useEffect} from 'react';
import {LikeContext} from '../Context/Like/LikeContext';
import AllProduct from '../JSON/AllProduct.json';
import {ScrollView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {Touchable} from 'react-native/Libraries/Components/Touchable/Touchable';
const Like = ({navigation}) => {
  const {data,handleDelete} = useContext(LikeContext);
  console.log('data', data);
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
                onPress={() => navigation.navigate('plp', {data: value.product})}
                key={i}>
                <View style={Liked.main}>
                  <Text style={{marginLeft: 15}}>{value.name}</Text>
                  <Image
                    source={{uri: value.image}}
                    style={{height: 120, width: 120}}
                  />
                </View>
              </Pressable>

            <Pressable onPress={()=>handleDelete(value.id)} style={Liked.delete}>
              <AntDesign name="delete" size={20} />
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
});
export default Like;
