import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import Video from 'react-native-video';
import {colors} from '../../styles';
import styles from '../../navigation/styles';

export default function UpcomingLive({navigation}) {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={{width: '100%', height: 220}}
        controls={true}
        paused={true}
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
          padding: 15,
          flex:1
        }}>
        <View>
          <Text style={{color: colors.primaryBlue}}>Mathematics</Text>
          <Text style={[styles.h3, {fontWeight: '600'}]}>Algebra</Text>
          <Text style={[styles.p, {marginTop: 5}]}>By: Rishabh Jaiswal</Text>
          <View style={{flexDirection: 'row',alignItems:'center', marginTop: 10}}>
            <Icon name="time-outline" type="ionicon" size={25} />
            <View style={{marginLeft:10}}>
              <Text style={[styles.p, {fontSize: 12}]}>
                Live in 2 days
              </Text>
              
            <Text style={[styles.p, { fontSize: 12,marginTop:3}]}>
              May 20, 11:00 AM
            </Text>
            </View>
          </View>
          <Text style={[styles.h6, {marginTop: 15,fontSize:14}]}>
          Integration Integration is the calculation of an integral. Integrals in maths are used to find many useful quantities such as areas, volumes, displacement, etc. When we speak about integrals, it is related to usually definite integrals.
          </Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  playIcon: {
    padding: 4,
    borderRadius: 50,
    backgroundColor: '#535353',
    alignItems: 'center',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 50,
    width: '87%',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 40,
    paddingLeft: 10,
    marginLeft: 15,
    backgroundColor: colors.white,
  },
});
