import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import user from './images/user.jpeg';
import styles from '../navigation/styles';
import {Rating} from 'react-native-elements';
export default function Review() {
  return (
    <View
      style={{
        borderBottomWidth: 1.5,
        borderBottomColor: '#f6f6f6',
        paddingBottom: 5,
      }}>
      <View style={{flexDirection: 'row', paddingTop: 15}}>
        <Image
          source={user}
          style={{width: 40, height: 40, borderRadius: 100}}
        />
        <View style={{paddingLeft: 17}}>
          <Text style={[styles.h6, {fontWeight: 500}]}>Sneha bisht</Text>
          <Rating imageSize={15} />
        </View>
        <Text style={[styles.p, {position: 'absolute', right: 0, top: 15}]}>
          19 hours ago
        </Text>
      </View>
      <Text style={[styles.p, {paddingTop: 15}]}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      </Text>
    </View>
  );
}

const style = StyleSheet.create({});
