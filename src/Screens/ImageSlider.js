import {View, Text, Image, StyleSheet} from 'react-native';
import {useState} from 'react';
import { SliderBox } from 'react-native-image-slider-box';
// import Swiper from 'react-native-custom-swiper';
const ImageSlider = () => {

    const [images, setImages] =useState([
      "https://proudly.in/wp-content/uploads/2021/11/Instamart.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BCXPXNev_a1WIC6fkffGUrKy1Q4qaGl7eQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BCXPXNev_a1WIC6fkffGUrKy1Q4qaGl7eQ&usqp=CAU",
  ]);

  return (
      <View style={styles.container}>
          <SliderBox 
              images={[
                "https://proudly.in/wp-content/uploads/2021/11/Instamart.webp",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BCXPXNev_a1WIC6fkffGUrKy1Q4qaGl7eQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BCXPXNev_a1WIC6fkffGUrKy1Q4qaGl7eQ&usqp=CAU",
            ]}
              sliderBoxHeight={100}
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"  
              onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
              paginationBoxVerticalPadding={20}
              autoplay
              circleLoop
          />
         
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      paddingTop: 10,
      flex: 1,
  },
});
export default ImageSlider;
