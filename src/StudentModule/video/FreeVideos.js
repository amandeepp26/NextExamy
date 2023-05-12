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
// create a component
const FreeVideos = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: colors.white,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon
          name="chevron-left"
          type="ionicons"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={[styles.h3, {padding: 20}]}>Free Videos</Text>
      </View>
      <ScrollView>
        <View style={{borderBottomWidth: 5, borderColor: colors.lightGray}}>
          <Video navigation={navigation} />
        </View>
        <View style={{borderBottomWidth: 5, borderColor: colors.lightGray}}>
          <Video navigation={navigation} />
        </View>
        <View style={{borderBottomWidth: 5, borderColor: colors.lightGray}}>
          <Video navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const style = StyleSheet.create({});

//make this component available to the app
export default FreeVideos;
