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
import Video from 'react-native-video';

import {colors} from '../../styles';
import styles from '../../navigation/styles';
import Button from '../../components/Button';
// create a component
const ParticularVideo = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={{width: '100%', height: 220}}
        controls={true}
      />

      <Pressable
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: 7,
          left: 10,
          padding: 2,
          backgroundColor: colors.white,
          borderRadius: 50,
        }}>
        <Icon name="chevron-left" size={30} />
      </Pressable>
      <View
        style={{
          backgroundColor: colors.white,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          alignItems: 'center',
        }}>
        <View>
          <Text style={[styles.h3, {fontWeight: '600'}]}>Algebra</Text>
          <Text style={[styles.p, {marginTop: 5}]}>By: Rishabh Jaiswal</Text>
        </View>
        <View>
          <Icon name="bookmark-outline" type="ionicon" size={20} />
          <Text style={[styles.p]}>Bookmark</Text>
        </View>
      </View>

      <View style={{backgroundColor: colors.white, padding: 15, marginTop: 5}}>
        <Text style={[styles.h6, {fontWeight: '600'}]}>About the course:</Text>
        <Text style={[styles.p, {marginTop: 5}]}>
          Structural engineers as the name suggest deals with the designing,
          plan and construction of public infrastructure like buildings, bridges
          and so on.
        </Text>
      </View>
      <View style={{backgroundColor: colors.white,flex:1, marginTop: 5}}>
        <View style={{flexDirection: 'row', paddingHorizontal: 15,paddingVertical:10,  alignItems: 'center'}}>
          <View style={style.playIcon}>
            <Icon name="play" color={colors.white} type="ionicon" size={13} />
          </View>
          <Text style={[styles.h6, {marginLeft: 10}]}>00:05:14</Text>
          <Text style={[styles.h6, {marginLeft: 20}]}>Part-1</Text>
        </View>
        <View style={{flexDirection: 'row',paddingVertical:10, paddingHorizontal: 15, alignItems: 'center'}}>
          <View style={style.playIcon}>
            <Icon name="play" color={colors.white} type="ionicon" size={13} />
          </View>
          <Text style={[styles.h6, {marginLeft: 10}]}>00:08:27</Text>
          <Text style={[styles.h6, {marginLeft: 20}]}>Part-2</Text>
        </View>
        <View style={{flexDirection: 'row',paddingVertical:10, paddingHorizontal: 15, alignItems: 'center'}}>
          <View style={style.playIcon}>
            <Icon name="play" color={colors.white} type="ionicon" size={13} />
          </View>
          <Text style={[styles.h6, {marginLeft: 10}]}>00:10:14</Text>
          <Text style={[styles.h6, {marginLeft: 20}]}>Part-3</Text>
        </View>
        
      <View
        style={{
          bottom: 30,
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
        }}>
        <Button onpress={()=>navigation.navigate('VideoRateReview')} backgroundColor={colors.primaryBlue} text={'Leave a Review'} />
        </View>
      </View>
    </View>
  );
};

// define your styles
const style = StyleSheet.create({
  playIcon: {
    padding: 4,
    borderRadius: 50,
    backgroundColor: '#535353',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ParticularVideo;
