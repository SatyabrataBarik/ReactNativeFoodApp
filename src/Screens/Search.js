import {View, Text, TextInput, FlatList, Image, Pressable} from 'react-native';
import {useState, useEffect} from 'react';
import details from '../JSON/AllProduct.json';
import Home from './Home';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const Search = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');

  const allProduct = [];
  details.forEach(restaurant =>
    restaurant.product.forEach(food => allProduct.push(food)),
  );
  const filterData = allProduct.filter(
    foodItem =>
      foodItem.Pname.toLowerCase().includes(searchValue.toLowerCase()) ||
      foodItem.title.toLowerCase().includes(searchValue.toLowerCase()),
  );
  console.log('allProduct', allProduct);
  const handleChange = value => {
    setSearchValue(value);
  };
  const itemRender = ({item}) => {
    return (
      <View
        style={{
          margin: 13,
          flex: 1,
          backgroundColor: '#ffff',
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Image source={{uri: item.image}} style={{height: 100, width: 120}} />
        </View>
        <View style={{marginLeft: 16}}>
          <Text style={{color: 'black'}}>{item.Pname}</Text>
          <Text style={{color: 'grey'}}>{item.title}</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={{color: 'black', marginRight: 12}}>${item.Price}</Text>
        </View>
      </View>
    );
  };
  // console.log('filterdata', filterData);
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          alignItems: 'center',
          marginTop: 12,
          borderWidth: 0.4,
          width: '95%',
          borderRadius: 9,
          flexDirection: 'row',
          backgroundColor: '#ffff',
          borderColor: 'grey',
          justifyContent: 'space-between',
        }}>
        <Pressable style={{marginLeft: 7}} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={20} color="black" />
        </Pressable>
        <TextInput
          style={{
            width: '75%',

            height: 43,
            borderRadius: 12,
          }}
          onChangeText={handleChange}
        />
        <View style={{marginRight: 20, borderLeftWidth: 1, padding: 5}}>
          <FontAwesome name="microphone" size={20} color="red" />
        </View>
      </View>
      <View>
        <View style={{marginTop: 30}}>
          <FlatList
            data={filterData ? filterData : allProduct}
            renderItem={itemRender}
          />
        </View>
        <View style={{height: '20%'}}></View>
      </View>
    </View>
  );
};

export default Search;
