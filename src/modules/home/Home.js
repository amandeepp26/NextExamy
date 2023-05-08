//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Video from '../../components/Video';
import {colors} from '../../styles';
import styles from '../navigation/styles';
import QuickLinks from './QuickLinks';
import SubjectWiseClass from './SubjectWiseClass';
import Swiper from 'react-native-swiper';
import Button from '../../components/Button';
import CompleteProfilePopup from '../../components/CompleteProfilePopup';
// import Video from 'react-native-video';

// create a component
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({isVisible: false});
    }, 10000);
  }
  render() {
    const {isVisible} = this.state;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <View style={styles.container}>
          {/* Header */}
          <View style={style.header}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/images/logoIcon.png')}
                style={{width: 70, height: 70, margin: 5}}
              />
              <Text style={styles.h4}>IIT-JEE Mains</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon onPress={()=>this.props.navigation.navigate('Search')} name="search" type="ionicons" size={25} />
              <Pressable
                onPress={() => this.props.navigation.navigate('Account')}>
                <Image
                  source={require('../../components/images/user.jpeg')}
                  style={{
                    width: 40,
                    height: 40,
                    margin: 5,
                    marginLeft: 15,
                    borderRadius: 50,
                  }}
                />
              </Pressable>
            </View>
          </View>
          <ScrollView style={{marginBottom: 110}}>
            <SubjectWiseClass navigation={this.props.navigation} />
            <QuickLinks navigation={this.props.navigation} />
            <View
              style={{
                padding: 10,
                marginLeft: 10,
                paddingTop: 15,
                backgroundColor: '#fff',
              }}>
              <Text style={[styles.h3, {fontWeight: '700'}]}>
                Suggested Modules
              </Text>
            </View>
            <View style={{height: 320, backgroundColor: colors.white}}>
              <Swiper
                style={style.wrapper}
                showsButtons={false}
                loop={true}
                dot={false}
                autoplay
                activeDotStyle={{width: 25}}
                activeDotColor={colors.primaryBlue}
                paginationStyle={{bottom: 10}}>
                <Video navigation={this.props.navigation} />
                <Video navigation={this.props.navigation} />
                <Video navigation={this.props.navigation} />
              </Swiper>
            </View>
            <View
              style={{
                padding: 10,
                marginLeft: 10,
                marginTop: 5,
                backgroundColor: '#fff',
              }}>
              <Text style={[styles.h3, {fontWeight: '700'}]}>Free Classes</Text>
            </View>
            <View style={{backgroundColor: colors.white, paddingBottom: 30}}>
              <Video navigation={this.props.navigation} />
              <Button
                onpress={() => this.props.navigation.navigate('FreeVideos')}
                text={'See all free classes'}
                backgroundColor={'#535353'}
              />
            </View>

            {/* <Video source={{uri :"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"}} style={{width:300,height:300}} controls={true} /> */}
          </ScrollView>
          {/* Subscribe button */}
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              width: '100%',
              justifyContent: 'space-between',
              padding: 10,
              alignItems: 'center',
              backgroundColor: colors.white,
              bottom: 60,
            }}>
            <Text style={styles.h6}>Want to achieve your dreams?</Text>
            <Pressable
              onPress={() => this.props.navigation.navigate('Subscription')}
              style={{
                backgroundColor: colors.primaryBlue,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
              }}>
              <Text
                style={[
                  styles.h6,
                  {color: colors.white, textDecorationLine: 'underline'},
                ]}>
                Subscribe Now!
              </Text>
            </Pressable>
          </View>
          {/* Complete profile button */}
          {isVisible && <CompleteProfilePopup navigation={this.props.navigation} />}
        </View>
      </SafeAreaView>
    );
  }
}

// define your styles
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 5,
  },
});

//make this component available to the app
export default Home;
