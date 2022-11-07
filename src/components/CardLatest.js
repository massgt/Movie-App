import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {globalStyle} from '../style/globalStyle';

const CardLatest = ({Img, Title, DateFilm, Action}) => {
  return (
    <TouchableOpacity style={{marginRight: 25}} onPress={Action}>
      <Image source={Img} style={{width: 150, height: 225, borderRadius: 25}} />
      <Text
        style={{
          ...globalStyle.Monrope16WhiteBold,
          paddingTop: 15,
          paddingBottom: 5,
        }}>
        {Title}
      </Text>
      <Text style={{...globalStyle.Monrope14GreySemiBold}}>{DateFilm}</Text>
    </TouchableOpacity>
  );
};

export default CardLatest;
