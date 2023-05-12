import {Image, StyleSheet,Pressable, Text, View} from 'react-native';
import React from 'react';
import styles from '../navigation/styles';
import {colors} from '../styles';
import {Icon} from 'react-native-elements';

export default function LiveClassesVideo({liveStatus,navigation}) {
  return (
    <Pressable
    onPress={()=>navigation.navigate(liveStatus ? 'Live' : 'UpcomingLive')}
      style={{
        height: 130,

        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
      }}>
      <Image
        source={require('./images/user.jpeg')}
        style={{
          height: 100,
          width: 130,
          borderRadius: 10,
          position: 'relative',
        }}
      />
      {liveStatus && (
        <View
          style={{
            backgroundColor: '#EA5755',
            padding: 2,
            borderRadius: 3,
            paddingHorizontal: 4,
            position: 'absolute',
            bottom: 25,
            left: 10,
          }}>
          <Text style={{color: '#ffff', fontSize: 10}}>Live</Text>
        </View>
      )}
      <View style={{paddingHorizontal: 20}}>
        <Text style={[styles.h4, {color: colors.primaryBlue, fontWeight: 600}]}>
          Physics
        </Text>
        <Text style={[styles.h6, {color: '#6C6C6C'}]}>
          Electricity and Magnetism
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 4,
          }}>
          <Icon name="time-outline" type="ionicon" size={15} color={'gray'} />
          <Text style={{fontSize: 12, paddingHorizontal: 5}}>11:00 AM</Text>
        </View>

        <Text style={{fontSize: 12}}>By : Rishabh Jaiswal</Text>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({});
