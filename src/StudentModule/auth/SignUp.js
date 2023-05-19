//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../../components/Button';
import RNSTextInput from '../../components/RNSTextInput';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {connect} from 'react-redux';
import {setPhoneNumber, setEmail, setName} from './signin';

// create a component
function Signup({
  navigation,
  setPhoneNumber,
  setEmail,
  setName,
  name,
  email,
  phone_number,
}) {
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
        />
      </View>
      <View
        style={{
          bottom: 30,
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
        }}>
        <Text stylele={[styles.p, {color: '#000', textAlign: 'justify'}]}>
          By signing up, you agree to {'\n'}
          <Text
            style={{color: colors.secondaryBlue}}
            onPress={() => navigation.navigate('Signup')}>
            Terms & Conditions
          </Text>{' '}
          and
          <Text
            style={{color: colors.secondaryBlue}}
            onPress={() => navigation.navigate('Signup')}>
            {' '}
            Privacy Policy{' '}
          </Text>
        </Text>
        <Button
          text={'Sign Up'}
          backgroundColor={colors.primaryBlue}
          color={false}
          onpress={() => {
            navigation.navigate('SelectCategory');
          }}
        />
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
      name: state.signin.name,
    };
  },
  {
    setPhoneNumber,
    setEmail,
    setName,
  },
)(Signup);
