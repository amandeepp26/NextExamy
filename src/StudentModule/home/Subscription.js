//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Video from '../../components/Video';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import Button from '../../components/Button';
import {Pressable} from 'react-native';
import SubscriptionPlanCard from '../../components/SubscriptionPlanCard';
import Header from '../../components/Header';

const Subscription = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
   
      <Header title={'Choose a plan'} navigation={navigation}/>
      
      <View style={{flexDirection: 'row', flex: 1}}>
        <ScrollView horizontal>
          <SubscriptionPlanCard />
          <SubscriptionPlanCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    // paddingVertical: 5,
    marginTop: 20,
  },
  circleView: {
    width: 35,
    height: 35,
    backgroundColor: 'rgba(2, 146, 183, 0.5)',
    opacity: 0.3,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Subscription;
