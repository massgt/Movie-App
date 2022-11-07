import React, {Component} from 'react';
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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {globalStyle} from '../style/globalStyle';
import CardLatest from '../components/CardLatest';
import CardFavorite from '../components/CardFavorite';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/bg-1.png')}
          style={styles.bg1}
        />
        <Image
          source={require('../assets/images/bg-2.png')}
          style={styles.bg2}
        />
        <ScrollView>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle={'light-content'}
          />
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}>
              <FontAwesomeIcon icon={faBars} size={20} color={'#FFFFFF'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size={20}
                color={'#FFFFFF'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.profileParent}>
            <View>
              <Text style={{...globalStyle.Monrope18WhiteBold}}>
                Hi, Rachel
              </Text>
              <Text style={{...globalStyle.Monrope14GreyMedium}}>
                See what's new today
              </Text>
            </View>
            <Image
              source={require('../assets/images/rachel.jpeg')}
              style={{width: 40, height: 40, borderRadius: 100}}
            />
          </View>

          <View style={{paddingTop: 25}}>
            <Text style={styles.textLatest}>Latest</Text>
            <ScrollView
              horizontal={true}
              style={{paddingLeft: 25}}
              showsHorizontalScrollIndicator={false}>
              <CardLatest
                Img={require('../assets/images/mv1.png')}
                Title={'Dare Devil'}
                DateFilm={'21 October 2012'}
                Action={() => this.props.navigation.navigate('detail-movie')}
              />
              <CardLatest
                Img={require('../assets/images/mv2.png')}
                Title={'See'}
                DateFilm={'12 July 2016'}
                Action={() => this.props.navigation.navigate('detail-movie')}
              />
              <CardLatest
                Img={require('../assets/images/mv3.png')}
                Title={'The Boys'}
                DateFilm={'16 July 2015'}
                Action={() => this.props.navigation.navigate('detail-movie')}
              />
            </ScrollView>
          </View>

          <View style={{paddingTop: 25, paddingHorizontal: 25}}>
            <Text style={styles.textFavorite}>Favorite</Text>
            <CardFavorite
              Img={require('../assets/images/fav1.png')}
              Title={'Friends'}
              Rating={'4.8'}
            />
            <CardFavorite
              Img={require('../assets/images/fav2.png')}
              Title={'Avatar'}
              Rating={'4.9'}
            />
            <CardFavorite
              Img={require('../assets/images/fav3.png')}
              Title={'Dexter'}
              Rating={'4.6'}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
  },
  bg1: {
    zIndex: -1,
    width: '65%',
    height: '40%',
    position: 'absolute',
    right: 0,
  },
  bg2: {
    zIndex: -1,
    width: '65%',
    height: '60%',
    marginTop: '60%',
    position: 'absolute',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingTop: Platform.OS === 'ios' ? 47 : 37,
    paddingBottom: 20,
  },
  profileParent: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLatest: {
    ...globalStyle.Monrope18WhiteBold,
    paddingBottom: 20,
    marginLeft: 25,
  },
  textFavorite: {
    ...globalStyle.Monrope18WhiteBold,
    paddingBottom: 20,
  },
});
