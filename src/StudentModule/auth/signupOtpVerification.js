//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
} from 'react-native';
import Button from '../../components/Button';
import {Icon} from 'react-native-elements';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {connect} from 'react-redux';
import CountDown from 'react-native-countdown-component';
import {setOTP, validateSignupOtp, resendOtp} from './signin';
import {colors, fonts} from '../../styles';
import styles from '../../navigation/styles';
// create a component
const signupOtpVerification = ({
  navigation,
  route,
  setOTP,
  validateSignupOtp,
  otp,
  resendOtp,
  loading,
  phone_number
}) => {
  const [resend, setResend] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          width: '100%',
          height:'12%',
          marginTop: 20,
        }}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={{width: '22%', height: '99%'}}
        />
      </View>
        <View style={{alignItems:'center'}}>
        <Text style={[styles.h3, {marginTop: 20,fontWeight:'bold'}]}>Enter OTP</Text>
        <Text style={[styles.h6, {marginTop: 10, textAlign: 'center',color:colors.gray}]}>
          We have sent an OTP to your {'\n'} Phone number
          <Text style={{fontWeight: 'bold'}}>
            {' '}
            +91 {phone_number}
          </Text>
        </Text>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text
            style={[
              styles.h6,
              {
                color: colors.secondaryBlue,
                fontFamily: fonts.primarySemiBold,
                marginLeft: 5,
              },
            ]}>
            Change Number
          </Text>
        </Pressable>
        </View>
        <View style={{width: '95%', alignItems: 'center'}}>

          <OTPInputView
            style={{
              width: '70%',
              alignSelf: 'center',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
              height: 30,
            }}
            pinCount={4}
            autoFocusOnLoad
            keyboardType="number-pad"
            codeInputFieldStyle={style.underlineStyleBase}
            codeInputHighlightStyle={style.underlineStyleHighLighted}
            onCodeFilled={e => {
              setOTP(e);
            }}
          />
          {/* </View> */}
          {/* Didn't Receive code */}
          {/* {!resend ? (
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  marginTop: 10,
                  color: '#696969',
                  fontFamily: fonts.primaryMedium,
                }}>
                Request OTP in
              </Text>
              <CountDown
                // style={{marginTop:10}}
                // size={30}
                until={60}
                onFinish={setResend(true)}
                digitStyle={{backgroundColor: 'transparent'}}
                digitTxtStyle={{color: '#696969'}}
                separatorStyle={{color: '#696969'}}
                timeToShow={['M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
              />
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
                width: '95%',
              }}>
              <Pressable style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.p, {color: '#000', marginLeft: 5}]}>
                  Didn't receive the seurity code yet?
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setResend(false), resendOtp();
                }}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={[
                    styles.p,
                    {
                      color: colors.cyan,
                      fontFamily: fonts.primarySemiBold,
                      marginLeft: 5,
                    },
                  ]}>
                  Resend
                </Text>
              </Pressable>
            </View>
          )} */}
          
        </View>
        {loading ? (
          <View
          style={{
            bottom: 50,
            position: 'absolute',
            width: '100%',
            alignItems: 'center',
          }}>
            <Button load={true} backgroundColor={colors.primaryBlue} />
            </View>
          ) : (
            <View
              style={{
                bottom: 50,
                position: 'absolute',
                width: '100%',
                alignItems: 'center',
              }}>
              <Button
                text="Verify"
                backgroundColor={colors.primaryBlue}
                onpress={() => validateSignupOtp(function () {
                    navigation.navigate('SelectCategory');
                  })}
              />
            </View>
          )}
    </View>
  );
};
// define your styles
const style = StyleSheet.create({
  logo: {
    width: 250,
    height: 42,
    alignSelf: 'center',
    marginTop: 100,
  },
  icon: {
    width: 35,
    height: 35,
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#FAFCFF',
    borderColor: '#D3DAE6',
    color: colors.black,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  underlineStyleHighLighted: {
    borderColor: colors.gray,
  },
  footer: {
    width: Dimensions.get('window').width,
    height: 150,
  },
});
//make this component available to the app
export default connect(
  state => {
    return {
      otp: state.signin.otp,
      loading: state.signin.loading,
      phone_number:state.signin.phone_number
    };
  },
  {
    setOTP,
    validateSignupOtp,
    resendOtp,
  },
)(signupOtpVerification);
