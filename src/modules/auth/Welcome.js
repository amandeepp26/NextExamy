//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../../components/Button';
import styles from '../navigation/styles';
import { colors } from '../../styles';

// create a component
function Welcome({navigation}) {
  return (
    <View style={style.container}>
      <Image
        source={require('../../../assets/images/logoIcon.png')}
        style={{width: 90, height: 90, margin: 5}}
      />

      <Image
        source={require('../../../assets/images/welcome.png')}
        style={{width: '100%', height: 350, marginHorizontal: 10}}
      />
      <View>
        <Text style={[styles.h2, {marginLeft: 10}]}>Welcome to</Text>
        <Text
          style={[
            styles.h1,
            {marginLeft: 10, fontWeight: '600', fontSize: 32},
          ]}>
          NextExamy
        </Text>
        <View style={{marginTop:15}}>
        <Button text={'I am a Teacher'} backgroundColor={colors.white} color={true} />
        <Button text={'I am a Student'} backgroundColor={colors.primaryBlue} color={false} onpress={()=>navigation.navigate("Login")} />
        </View>
      </View>
    </View>
  );
}

// define your styles
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Welcome;
