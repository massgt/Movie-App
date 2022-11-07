import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {globalStyle} from '../style/globalStyle';

class DetailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle={'light-content'}
          />
          <View>
            <TouchableOpacity
              style={{
                position: 'absolute',
                marginLeft: 25,
                marginTop: 45,
              }}
              onPress={() => this.props.navigation.goBack()}>
              <FontAwesomeIcon icon={faArrowLeft} size={20} color={'#FFFFFF'} />
            </TouchableOpacity>
            <Image
              source={require('../assets/images/mv1.png')}
              style={styles.imgMovie}
            />
            <Image
              source={require('../assets/images/bg-blur.png')}
              style={styles.bgBlur}
            />
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.titleParent}>
              <Text style={{...globalStyle.Monrope24WhiteBold}}>
                Dare Devil
              </Text>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faHeart} size={20} color={'#FFFFFF'} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bgBlue}>
                <Text style={{...globalStyle.Monrope12WhiteBold}}>13A</Text>
              </View>
              <Text style={{...globalStyle.Monrope14GreySemiBold}}>
                21 October 2012 - 45 min
              </Text>
            </View>
            <View style={styles.starParent}>
              <Image
                source={require('../assets/icons/star1.png')}
                style={styles.star}
              />
              <Image
                source={require('../assets/icons/star1.png')}
                style={styles.star}
              />
              <Image
                source={require('../assets/icons/star1.png')}
                style={styles.star}
              />
              <Image
                source={require('../assets/icons/star1.png')}
                style={styles.star}
              />
              <Image
                source={require('../assets/icons/star2.png')}
                style={styles.star2}
              />
              <Text style={{...globalStyle.Monrope12GreySemiBold}}>
                4/5 star rating
              </Text>
            </View>
            <Text style={styles.textDesc}>
              Daredevil: Matt Murdock, a blind lawyer by day and vigilante by
              night, tries to protect Hell’s Kitchen with his enhanced abilities
              as Daredevil outside the system while also trying to live a
              (somewhat) normal life as a lawyer working within the bounds of
              the law...
            </Text>
            <TouchableOpacity>
              <Text style={{...globalStyle.Monrope14YellowBold}}>
                Read more >
              </Text>
            </TouchableOpacity>
            <View style={styles.castParent}>
              <Text style={{...globalStyle.Monrope18WhiteBold}}>Cast</Text>
              <TouchableOpacity>
                <Text style={{...globalStyle.Monrope14YellowBold}}>
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowCast}>
              <View>
                <Image
                  source={require('../assets/images/charlie.png')}
                  style={styles.imgCast}
                />
                <Text style={styles.nameCast}>Charlie{'\n'}Cox</Text>
              </View>
              <View>
                <Image
                  source={require('../assets/images/deborah.png')}
                  style={styles.imgCast}
                />
                <Text style={styles.nameCast}>Deborah{'\n'}Ann Woll</Text>
              </View>
              <View>
                <Image
                  source={require('../assets/images/jon.png')}
                  style={styles.imgCast}
                />
                <Text style={styles.nameCast}>John{'\n'}Bernthal</Text>
              </View>

              <View>
                <Image
                  source={require('../assets/images/vincent.png')}
                  style={styles.imgCast}
                />
                <Text style={styles.nameCast}>Vincent{'\n'}D'Onofrio</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DetailMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120C0C',
  },
  imgMovie: {
    width: '100%',
    height: 676,
    zIndex: -1,
  },
  bgBlur: {
    width: '100%',
    height: 561,
    position: 'absolute',
    bottom: -260,
  },
  detailContainer: {
    paddingHorizontal: 30,
    marginTop: -220,
  },
  titleParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  bgBlue: {
    paddingHorizontal: 14,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 13,
    backgroundColor: '#006FD5',
  },
  starParent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 23,
  },
  star: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  star2: {
    width: 15,
    height: 15,
    marginRight: 15,
  },
  textDesc: {
    ...globalStyle.Monrope14GreySemiBold,
    marginTop: 15,
    marginBottom: 10,
  },
  castParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  rowCast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  imgCast: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  nameCast: {
    ...globalStyle.Monrope14WhiteBold,
    textAlign: 'center',
    marginBottom: 30,
  },
});
