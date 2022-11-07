import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {globalStyle} from '../style/globalStyle';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#2C2C2C'}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: '#ffb039',
        }}>
        <ImageBackground source={require('../assets/images/bg-header2.png')}>
          <View
            style={{
              alignItems: 'center',
              paddingBottom: 20,
            }}>
            <Image
              source={require('../assets/images/rachel.jpeg')}
              style={{
                width: 60,
                height: 60,
                marginBottom: 5,
                borderRadius: 100,
              }}
            />
            <Text
              style={{
                ...globalStyle.Monrope18BlackBold,
                width: 200,
                textAlign: 'center',
              }}>
              Rachel Florencia
            </Text>
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#2C2C2C', paddingTop: 10}}>
          <Image
            source={require('../assets/images/bg-drawer1a.png')}
            style={styles.bg1}
          />
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: '#FFB039',
          marginBottom: 50,
          width: 180,
          alignSelf: 'center',
          paddingVertical: 12,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Text style={{...globalStyle.Monrope18WhiteBold}}>About us</Text>
      </TouchableOpacity>
      <Image
        source={require('../assets/images/bg-drawer2a.png')}
        style={styles.bg2}
      />
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  bg1: {
    zIndex: -1,
    width: '65%',
    height: '100%',
    position: 'absolute',
    right: 0,
    // top: '23%',
  },
  bg2: {
    zIndex: -1,
    width: '100%',
    height: '50%',
    // marginTop: '60%',
    position: 'absolute',
    bottom: 0,
  },
});
