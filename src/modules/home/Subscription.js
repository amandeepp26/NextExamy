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
import styles from '../navigation/styles';
import Button from '../../components/Button';
import {Pressable} from 'react-native';
import SubscriptionPlanCard from '../../components/SubscriptionPlanCard';

const Subscription = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 3,
          borderColor: '#e5e5e5',
        }}>
        <Icon
          name="chevron-left"
          type="ionicons"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={[styles.h3, {padding: 20}]}>Choose a plan</Text>
      </View>
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
