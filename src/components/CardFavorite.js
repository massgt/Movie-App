import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from '../style/globalStyle';
import {faClock, faStarHalf} from '@fortawesome/free-regular-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const CardFavorite = ({Img, Title, Rating}) => {
  return (
    <TouchableOpacity
      style={{
        padding: 16,
        backgroundColor: '#81818130',
        zIndex: -1,
        borderRadius: 25,
        flexDirection: 'row',
        marginBottom: 20,
      }}>
      <Image source={Img} style={{width: 67, height: 90, marginRight: 15}} />

      <View style={{justifyContent: 'space-between'}}>
        <Text style={{...globalStyle.Monrope16WhiteBold}}>{Title}</Text>
        <Text style={{...globalStyle.Monrope14GreySemiBold}}>
          PG | September 22, 1994
        </Text>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon
            icon={faClock}
            size={14}
            color={'#FFFFFF'}
            style={{alignSelf: 'center', marginRight: 5}}
          />
          <Text style={{...globalStyle.Monrope14WhiteRegular}}>
            2 hour 15 mins
          </Text>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 7,
          paddingBottom: 7,
          paddingTop: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          right: 20,
          backgroundColor: '#FFB039',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <FontAwesomeIcon icon={faStar} color={'#000000'} size={14} /> */}
        <Image
          source={require('../assets/icons/star.png')}
          style={{width: 11, height: 11, marginBottom: 2}}
        />
        <Text style={{...globalStyle.Monrope14BlackBold}}>{Rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardFavorite;
