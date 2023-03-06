import {View, Text, Pressable, TouchableNativeFeedback} from 'react-native';
import React, {useEffect} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Image} from 'react-native/Libraries/Image/Image';
import ProductIterable from './ProductIterable';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {LogBox} from 'react-native';
const ProductList = ({route, navigation}) => {
  const {data} = route.params;
  console.log('===4data', data);
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#F5F5F5',flex:1}}>
      <View style={{}}>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{padding: 15}}>
              <AntDesign name="left" size={20} color={'black'} />
            </Text>
          </Pressable>
          <Text style={{color: 'black',marginLeft:95}}>Product List </Text>
        </View>
        <ScrollView>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return <ProductIterable item={item} navigation={navigation} />;
            }}
          />
        </ScrollView>
        
      </View>
    </SafeAreaView>
  );
};

export default ProductList;
