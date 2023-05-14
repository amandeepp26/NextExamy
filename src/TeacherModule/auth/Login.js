//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../../components/Button';
import RNSTextInput from '../../components/RNSTextInput';
import {colors, fonts} from '../../styles';
import styles from '../../navigation/styles';

// create a component
function TeacherLogin({navigation}) {
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
     
        <View style={{marginTop: 25,paddingHorizontal:15}}>
          <View>
          <Text style={[styles.h4, {marginLeft: 10}]}>Enter Username</Text>
          <RNSTextInput placeHolder={'Username'} keyboard={'numeric'} />
          </View>
          <View style={{marginTop:25}}>
          <Text style={[styles.h4, {marginLeft: 10}]}>Enter Password</Text>
          <RNSTextInput placeHolder={'Password'} keyboard={'numeric'} secureTextEntry />
          </View>
          <Text style={{color:colors.primaryBlue,textAlign:'right',paddingTop:20}}>Forgot Password?</Text>
        </View>

      <View
        style={{
          bottom: 30,
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
        }}>
      
        <Button text={'Login'} backgroundColor={colors.primaryBlue} color={false} onpress={()=>navigation.navigate("Home",)} />
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
export default TeacherLogin;
