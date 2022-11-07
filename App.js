/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component, useState} from 'react';
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
} from 'react-native';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Home from './src/screens/Home';
import DetailMovie from './src/screens/DetailMovie';
import {globalStyle} from './src/style/globalStyle';
import FavoriteMovie from './src/screens/DrawerScreen/FavoriteMovie';
import Membership from './src/screens/DrawerScreen/Membership';
import ShareFav from './src/screens/DrawerScreen/ShareFav';
import Setting from './src/screens/DrawerScreen/Setting';
import Logout from './src/screens/DrawerScreen/Logout';
import CustomDrawer from './src/components/CustomDrawer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#ffb03940',
        drawerLabelStyle: {
          ...globalStyle.Monrope14WhiteRegular,
          marginLeft: -18,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => (
            <Image
              source={require('./src/assets/icons/home-icon.png')}
              style={{width: 22, height: 20}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteMovie}
        options={{
          drawerIcon: () => (
            <Image
              source={require('./src/assets/icons/fav.png')}
              style={{width: 22, height: 20}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Membership"
        component={Membership}
        options={{
          drawerIcon: () => (
            <Image
              source={require('./src/assets/icons/member.png')}
              style={{width: 12, height: 22, marginLeft: 3, marginRight: 6}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Share"
        component={ShareFav}
        options={{
          drawerIcon: () => (
            <Image
              source={require('./src/assets/icons/share.png')}
              style={{width: 20, height: 23, marginRight: 2}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: () => (
            <Image
              source={require('./src/assets/icons/setting.png')}
              style={{width: 20, height: 20, marginRight: 2}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: () => (
            <Image
              source={require('./src/assets/icons/log-out.png')}
              style={{width: 20, height: 20, marginRight: 2}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        // component={Home}
        options={{
          title: null,
          cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
          headerShown: false,
        }}
        name={'home'}>
        {props => <DrawerNavigator {...props} />}
      </Stack.Screen>
      <Stack.Screen
        component={DetailMovie}
        options={{
          title: null,
          cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
          headerShown: false,
        }}
        name={'detail-movie'}
      />
    </Stack.Navigator>
  );
};

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        {/* <DrawerNavigator /> */}
        <AppStack />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

// <NativeBaseProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="home">
//           <React.Fragment>
//             <Stack.Screen
//               component={Home}
//               options={{
//                 title: null,
//                 cardStyle: {backgroundColor: 'transparent'},
//                 headerTransparent: true,
//                 headerShown: false,
//               }}
//               name={'home'}
//             />
//             <Stack.Screen
//               component={DetailMovie}
//               options={{
//                 title: null,
//                 cardStyle: {backgroundColor: 'transparent'},
//                 headerTransparent: true,
//                 headerShown: false,
//               }}
//               name={'detail-movie'}
//             />
//           </React.Fragment>
//         </Stack.Navigator>
//       </NavigationContainer>
//     </NativeBaseProvider>
