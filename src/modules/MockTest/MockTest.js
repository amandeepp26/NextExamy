import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {colors} from '../../styles';
import styles from '../navigation/styles';
import {Icon} from 'react-native-elements';

function MockTest({navigation}) {

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: colors.white,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth:5,
          borderColor:'#e5e5e5'
        }}>
        <Icon
          name="chevron-left"
          type="ionicons"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={[styles.h3, {padding: 20}]}>Notes</Text>
      </View>
    </View>
  );
}

export default MockTest;
