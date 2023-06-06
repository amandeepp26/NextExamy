//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../../components/Button';
import RNSTextInput from '../../components/RNSTextInput';
import {colors, fonts} from '../../styles';
import styles from '../../navigation/styles';
import {setPhoneNumber, setEmail,requestOtp} from './signin';
import {connect} from 'react-redux';

// create a component
function Login({
  navigation,
  setPhoneNumber,
  setEmail,
  phone_number,
  loading,
  email,
  requestOtp
}) {
  const [loginPhone, setLoginPhone] = useState(true);
  return (
    <View style={style.container}>
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          width: '100%',
          height:'15%',
          marginTop: 20,
        }}>
        <Image
          source={require('../../../assets/images/logo.png')}
          resizeMode='contain'
          style={{width: '35%', height: '100%'}}
        />
      </View>
      {loginPhone ? (
        <View style={{marginTop: 25}}>
          <Text style={[styles.h4, {marginLeft: 10,fontFamily:'Roboto-italic'}]}>Enter phone number</Text>
          <RNSTextInput
            placeHolder={'Phone number'}
            keyboard={'numeric'}
            onChangeText={e => setPhoneNumber(e)}
            value={phone_number}
            maxLength={10}
          />
          {/* <Text
            style={[
              styles.h6,
              {marginLeft: 10, marginTop: 10, color: colors.secondaryBlue},
            ]}
            onPress={() => setLoginPhone(false)}>
            Or continue with email
          </Text> */}
        </View>
      ) : (
        <View style={{marginTop: 25}}>
          <Text style={[styles.h4, {marginLeft: 10}]}>Enter email address</Text>
          <RNSTextInput
            placeHolder={'Email'}
            value={email}
            onChangeText={e => setEmail(e)}
          />
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
        <Text style={[styles.p, {color: '#000'}]}>
          Don't have an account?
          <Text
            style={{color: colors.secondaryBlue}}
            onPress={() => navigation.navigate('Signup')}>
            {' '}
            Sign Up
          </Text>
        </Text>
        {loading ? (
          <Button load={true}
          backgroundColor={colors.primaryBlue} />
        ) : (
          <Button
            text={'Login'}
            backgroundColor={colors.primaryBlue}
            color={false}
            onpress={() =>
              requestOtp(function () {
                navigation.navigate('OtpVerification');
              })
            }
          />
        )}
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
export default connect(
  state => {
    return {
      phone_number: state.signin.phone_number,
      loading: state.signin.loading,
      email: state.signin.email,
    };
  },
  {
    setPhoneNumber,
    setEmail,
    requestOtp
  },
)(Login);
