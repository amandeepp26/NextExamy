//import liraries
import {t} from 'i18n-js';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator,
} from 'react-native';
import {colors, fonts} from '../styles';

// create a component
const Button = ({text, onpress,color,backgroundColor, load,opacity, ...props}) => {
  return (
    <Pressable style={[styles.button,{backgroundColor:color ? "white" : backgroundColor,borderWidth:color ? 1 : 0,opacity:opacity?opacity:1 }]} onPress={onpress}>
      {load ? 
      <View style={{alignSelf:"center",width:"100%"}}>
      <ActivityIndicator size="small" color={colors.white} />
      </View> 
      :
      <>
      <Text
        style={[
          styles.p,
          {fontSize: 18, color: color ? colors.gray : colors.white, fontFamily: fonts.primaryMedium},
        ]}>
        {text}
      </Text>
        
        </>
}
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    width: '87%',
    height: 50,
    borderRadius: 10,
    borderColor:"#575757",
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent:'center',
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});

//make this component available to the app
export default Button;
