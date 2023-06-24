//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import Button from '../../components/Button';
import RNSTextInput from '../../components/RNSTextInput';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {connect} from 'react-redux';
import {setPhoneNumber, setEmail, setName, requestSignupOtp} from './signin';
import SelectDropdown from 'react-native-select-dropdown';
import {countryCodes} from '../../utils/countrycodes';
import {Icon} from 'react-native-elements';

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
  requestSignupOtp,
}) {
  const [selectCountryCode, setselectCountryCode] = useState(null);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={style.container}>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            width: '100%',
            height: '15%',
            marginTop: 20,
          }}>
          <Image
            source={require('../../../assets/images/logo.png')}
            resizeMode="contain"
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
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <View style={{width: '20%'}}>
              <SelectDropdown
                data={countryCodes}
                onSelect={(selectedItem, index) => {
                  setselectCountryCode(selectedItem.code);
                }}
                defaultButtonText={'+91'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.code;
                }}
                rowTextForSelection={(item, index) => {
                  return item.country;
                }}
                dropdownStyle={{maxHeight: 300, width: 160}}
                rowStyle={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  alignItems: 'flex-start',
                }}
                buttonStyle={{
                  color: colors.white,
                  width: 90,
                  backgroundColor: 'white',
                  marginHorizontal: 10,
                  height: 34,
                  justifyContent: 'flex-start',
                  alignSelf: 'center',
                  marginTop: 15,
                  borderBottomWidth: 1,
                  borderBottomColor: '#d3d3d3',
                  paddingBottom: 13,
                }}
                renderDropdownIcon={() => {
                  return (
                    <Icon
                      name={'chevron-down-outline'}
                      type="ionicon"
                      size={17}
                    />
                  );
                }}
              />
            </View>
            <View style={{width: '80%'}}>
              <RNSTextInput
                placeHolder={'Phone number'}
                keyboard={'numeric'}
                onChangeText={e => setPhoneNumber(e)}
                value={phone_number}
                maxLength={10}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          bottom: 30,
          position: 'absolute',
          backgroundColor: 'white',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
          left: 0,
        }}>
        <View
          style={{
            width: '70%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={[styles.p, {color: '#000', textAlign: 'justify'}]}>
            By signing up, you agree to
          </Text>
          <Text style={[styles.p, {color: '#000', textAlign: 'justify'}]}>
            <Text
              style={{color: colors.secondaryBlue}}
              onPress={() => navigation.navigate('TermsandCondition')}>
              Terms & Conditions
            </Text>{' '}
            and
            <Text
              style={{color: colors.secondaryBlue}}
              onPress={() => navigation.navigate('PrivacyPolicy')}>
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
              });
            }}
          />
        )}
      </View>
    </SafeAreaView>
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
    requestSignupOtp,
  },
)(Signup);
