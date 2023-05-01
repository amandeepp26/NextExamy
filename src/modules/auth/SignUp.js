//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../../components/Button';
import RNSTextInput from '../../components/RNSTextInput';
import {colors} from '../../styles';
import styles from '../navigation/styles';

// create a component
function Signup({navigation}) {
  return (
    <View style={style.container}>
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 20,
        }}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={{width: 90, height: 90}}
        />
      </View>
      <View style={{marginTop:10}}>
        <Text style={[styles.h4, {marginLeft: 10,marginTop:20}]}>Enter student's name</Text>
        <RNSTextInput placeHolder={'Student`s name'} keyboard={'numeric'} />
        <Text style={[styles.h4, {marginLeft: 10,marginTop:20}]}>Enter email address</Text>
        <RNSTextInput placeHolder={'Email'} keyboard={'numeric'} />
        <Text style={[styles.h4, {marginLeft: 10,marginTop:20}]}>Enter phone number</Text>
        <RNSTextInput placeHolder={'Phone number'} keyboard={'numeric'} />

      </View>
      <View style={{bottom: 30, position: 'absolute', width: '100%',alignItems:'center',}}>
        <Text stylele={[styles.p,{color:'#000',textAlign: 'justify',}]}>
          By signing up, you agree to {'\n'}
          <Text style={{color: colors.secondaryBlue}} onPress={()=>navigation.navigate("Signup")} >Terms & Conditions</Text> and 
          <Text style={{color: colors.secondaryBlue}} onPress={()=>navigation.navigate("Signup")} > Privacy Policy </Text>
        </Text>
        <Button text={'Sign Up'} backgroundColor={colors.primaryBlue} color={false} onpress={()=>{navigation.navigate("SelectCategory")}}/>
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
export default Signup;
