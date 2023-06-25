import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Pressable, SafeAreaView} from 'react-native';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {Icon, Image} from 'react-native-elements';
import RNSTextInput from '../../components/RNSTextInput';
import Button from '../../components/Button';
import Navigator from '../../navigation/Navigator';
import LiveClassesVideo from '../../components/LiveClassesVideo';
import Header from '../../components/Header';
export default function LiveClass({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}

        <Header title={'Live Videos'} navigation={navigation} />
        <View
          style={{
            backgroundColor: colors.white,
            flex: 1,
            padding: 15,
          }}>
          <View>
            <Text style={[styles.p]}>Live Now</Text>
            <LiveClassesVideo liveStatus={true} navigation={navigation} />
          </View>
          <View style={{marginTop: 20}}>
            <Text>Upcoming</Text>
          </View>
          <ScrollView>
            <View style={{borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
              <LiveClassesVideo navigation={navigation} />
            </View>
            <View style={{borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
              <LiveClassesVideo navigation={navigation} />
            </View>
            <View style={{borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
              <LiveClassesVideo navigation={navigation} />
            </View>
            <View style={{borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
              <LiveClassesVideo navigation={navigation} />
            </View>
            <View style={{borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
              <LiveClassesVideo navigation={navigation} />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 20,
  },
});
