import {View, Text} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import React from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
const Ratting = ({rate}) => {
  return (
    <View>
      <AirbnbRating size={15} />
    </View>
  );
};

export default Ratting;
