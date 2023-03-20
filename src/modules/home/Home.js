//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Video from '../../components/Video';
import {colors} from '../../styles';
import styles from '../navigation/styles';
import QuickLinks from './QuickLinks';
import SubjectWiseClass from './SubjectWiseClass';
import Swiper from 'react-native-swiper';
import Button from '../../components/Button';
// import Video from 'react-native-video';

// create a component
class Home extends Component {
  render() {
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
              <Icon name="search" type="ionicons" size={25} />
              <Image
                source={require('./images/user.png')}
                style={{
                  width: 40,
                  height: 40,
                  margin: 5,
                  marginLeft: 15,
                  borderRadius: 50,
                }}
              />
            </View>
          </View>
          <ScrollView style={{marginBottom:110}}>
            <SubjectWiseClass />
            <QuickLinks />
            <View style={{padding: 10,marginLeft:10,paddingTop:15, backgroundColor: '#fff'}}>
              <Text style={[styles.h3, {fontWeight: '700'}]}>
                Suggested Modules
              </Text>
            </View>
            <View style={{height:350,backgroundColor:colors.white}}>
            <Swiper
          style={style.wrapper}
          showsButtons={false}
          loop={true}
          dot={false}
          autoplay
          activeDotStyle={{width: 25}}
          activeDotColor={colors.primaryBlue}
          paginationStyle={{bottom: 10}}>
        <Video />
        <Video />
        <Video />
        </Swiper>
        </View>
        <View style={{padding: 10,marginLeft:10,marginTop:10, backgroundColor: '#fff'}}>
              <Text style={[styles.h3, {fontWeight: '700'}]}>
                Free Classes
              </Text>
            </View>
            <View style={{backgroundColor:colors.white,paddingBottom:30}}>
            <Video />
            <Button text={"See all free classes"} backgroundColor={'#535353'}/>
            </View>
            
              {/* <Video source={{uri :"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"}} style={{width:300,height:300}} controls={true} /> */}
          </ScrollView>
          <View style={{flexDirection:'row',position:'absolute',width:'100%',justifyContent:'space-between',padding:10,alignItems:'center',backgroundColor:colors.white,bottom:60}}>
            <Text style={styles.h6}>Want to achieve your dreams?</Text>
            <View style={{backgroundColor:colors.primaryBlue,paddingHorizontal:10,paddingVertical:5,borderRadius:5}}>
                <Text style={[styles.h6,{color:colors.white,textDecorationLine:"underline"}]}>
                    Subscribe Now!
                </Text>
            </View>
          </View>
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
