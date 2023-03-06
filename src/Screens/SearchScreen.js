import {View, Text,StyleSheet,Pressable,TextInput,FlatList,Image} from 'react-native';
import React from 'react';

import newData from '../JSON/newData.json'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import ImageSlider from './ImageSlider';
const SearchScreen = ({navigation}) => {
    const renderItem=({item})=>{
        return<Pressable style={Styled.container}  onPress={()=>navigation.navigate('plp',{data:item.product})}>
            <View style={{alignItems:'center'}}>
            <Image source={{uri:item.image}} style={{height:100,width:100,borderRadius:12}}/>
            <Text style={{color:'#060707'}}>{item.id}</Text>
            </View>
        </Pressable>
    }
  return (
    <View style={{backgroundColor:'#ffff',flex:1}}>
      <View style={Styled.mainInput}>
        <Pressable onPress={()=>navigation.navigate('search',{navigation:navigation})} style={Styled.textInput}>
          <Text style={{color:'black'}}>Search For restaurant ,item</Text>
          <AntDesign name='search1' size={18} color='black'/>
        </Pressable>
      </View>
      <View style={{flexDirection:'row',marginTop:16}}>
        <FlatList 
         contentContainerStyle={{flexDirection : "row", flexWrap : "wrap"}} 
        keyExtractor={(item)=>item.id}
          data={newData}
         
          renderItem={renderItem}
        />
      </View>
      <View style={{marginTop:30}}>
          
      </View>
    </View>
  );
};
const Styled=StyleSheet.create({
    mainInput:{
        
       alignItems:'center',
      marginTop:7
    },
    textInput:{
       
        width:350,
        borderRadius:13,
       padding:10,
       backgroundColor:'#cccccc',
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between'
    },
    container:{
     borderWidth:1,
     backgroundColor:'#ffff',
     margin:13,
     borderColor:'#ffff',
     
     
    }
})
export default SearchScreen;
