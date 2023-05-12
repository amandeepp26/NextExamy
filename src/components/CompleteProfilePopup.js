//import liraries
import React, {Component} from 'react';
import {Dimensions, Image} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import styles from '../navigation/styles';
import {colors} from '../styles';
import {Pressable} from 'react-native';

// create a component
const CompleteProfilePopup = ({navigation}) => {
  return (
    <Pressable
      style={style.container}
      onPress={() => navigation.navigate('CompleteProfile')}>
      <Image
        source={require('./images/completeProfileIcon.png')}
        style={{width: 70, height: 55}}
      />
      <View style={{marginLeft: 15, width: '80%'}}>
        <Text style={[styles.h5, {fontWeight: '600'}]}>
          Complete your profile
        </Text>
        <Text style={styles.p}>
          Enter your graduation details for seamless experience
        </Text>
      </View>
    </Pressable>
  );
};

// define your styles
const style = StyleSheet.create({
  container: {
    width: '95%',
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: 110,
  },
});

//make this component available to the app
export default CompleteProfilePopup;
