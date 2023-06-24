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
import Header from '../../components/Header';
// create a component
const SavedVideos = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>

      <Header title={'Saved Videos'} navigation={navigation} />

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
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default SavedVideos;
