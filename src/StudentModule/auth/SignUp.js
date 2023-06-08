//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import Button from '../../components/Button';
import RNSTextInput from '../../components/RNSTextInput';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {connect} from 'react-redux';
import {setPhoneNumber, setEmail, setName,requestSignupOtp} from './signin';

// create a component
function Signup({
  navigation,
  setPhoneNumber,
  setEmail,
  setName,
  name,
  email,
  phone_number,
  loading,
  requestSignupOtp
}) {
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior='height' enabled >
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
      <View style={{marginTop: 10}}>
        <Text style={[styles.h4, {marginLeft: 10, marginTop: 20}]}>
          Enter student's name
        </Text>
        <RNSTextInput
          placeHolder={'Student`s name'}
          onChangeText={e => setName(e)}
          value={name}
        />
        <Text style={[styles.h4, {marginLeft: 10, marginTop: 20}]}>
          Enter email address
        </Text>
        <RNSTextInput
          placeHolder={'Email'}
          onChangeText={e => setEmail(e)}
          value={email}
        />
        <Text style={[styles.h4, {marginLeft: 10, marginTop: 20}]}>
          Enter phone number
        </Text>
        <RNSTextInput
          placeHolder={'Phone number'}
          keyboard={'numeric'}
          onChangeText={e => setPhoneNumber(e)}
          value={phone_number}
          maxLength={10}
        />
      </View>
      <View
        style={{
          bottom: 30,
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
          justifyContent:'flex-end',
          left:0
        }}>
          <View style={{width:'70%',alignItems:'center',justifyContent:'center'}}>
        <Text style={[styles.p, {color: '#000', textAlign: 'justify',}]}>
          By signing up, you agree to
        </Text>
        <Text style={[styles.p, {color: '#000', textAlign: 'justify',}]}>
          <Text
            style={{color: colors.secondaryBlue}}
            onPress={() => navigation.navigate('')}>
             Terms & Conditions
          </Text>{' '}
          and
          <Text
            style={{color: colors.secondaryBlue}}
            onPress={() => navigation.navigate('')}>
            {' '}
            Privacy Policy{' '}
          </Text>
        </Text>
        </View>
        {loading ? (
          <Button load={true} backgroundColor={colors.primaryBlue} />
        ) : (
          <Button
            text={'Sign Up'}
            backgroundColor={colors.primaryBlue}
            color={false}
            onpress={() => {
              requestSignupOtp(function () {
                navigation.navigate('signupOtpVerification');
              })
            }}
          />
        )}
      </View>
    </View>
    </KeyboardAvoidingView> 
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
      name: state.signin.name,
    };
  },
  {
    setPhoneNumber,
    setEmail,
    setName,
    requestSignupOtp
  },
)(Signup);
