//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../../components/Button';
import RNSTextInput from '../../components/RNSTextInput';
import {colors, fonts} from '../../styles';
import styles from '../../navigation/styles';

// create a component
function Login({navigation}) {
  const [loginPhone, setLoginPhone] = useState(true);
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
      {loginPhone ? (
        <View style={{marginTop: 25}}>
          <Text style={[styles.h4, {marginLeft: 10}]}>Enter phone number</Text>
          <RNSTextInput placeHolder={'Phone number'} keyboard={'numeric'} />
          <Text
            style={[
              styles.h6,
              {marginLeft: 10, marginTop: 10, color: colors.secondaryBlue},
            ]}
            onPress={() => setLoginPhone(false)}>
            Or continue with email
          </Text>
        </View>
      ) : (
        <View style={{marginTop: 25}}>
          <Text style={[styles.h4, {marginLeft: 10}]}>Enter email address</Text>
          <RNSTextInput placeHolder={'Email'} />
          <Text
            style={[
              styles.h6,
              {marginLeft: 10, marginTop: 10, color: colors.secondaryBlue},
            ]}
            onPress={() => setLoginPhone(true)}>
            Or continue with phone number
          </Text>
        </View>
      )}
      <View
        style={{
          bottom: 30,
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
        }}>
        <Text stylele={[styles.h4, {color: '#000'}]}>
          Don't have an account?
          <Text style={{color: colors.secondaryBlue}} onPress={()=>navigation.navigate("Signup")} > Sign Up</Text>
        </Text>
        <Button text={'Login'} backgroundColor={colors.primaryBlue} color={false} onpress={()=>navigation.navigate("OtpVerification",{phone_number:8755255052})} />
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
export default Login;
