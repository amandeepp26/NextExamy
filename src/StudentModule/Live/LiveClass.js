import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Pressable, SafeAreaView} from 'react-native';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {Icon, Image} from 'react-native-elements';
import RNSTextInput from '../../components/RNSTextInput';
import Button from '../../components/Button';
import Navigator from '../../navigation/Navigator';
import LiveClassesVideo from '../../components/LiveClassesVideo';
export default function LiveClass({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}
        <View style={style.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              onPress={() => navigation.goBack()}
              name="chevron-left"
              type="ionicons"
              size={25}
            />
            <Text style={styles.h4}>Live Videos</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            marginTop: 5,
            flex: 1,
            padding: 15,
          }}>
          <View>
            <Text style={[styles.p]}>Live Now</Text>
            <LiveClassesVideo liveStatus={true} navigation={navigation} />
          </View>
          <View style={{marginTop: 40}}>
            <Text>Upcoming</Text>
            <View style={{borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
              <LiveClassesVideo navigation={navigation} />
            </View>
            <View style={{borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
              <LiveClassesVideo navigation={navigation} />
            </View>
            <View style={{borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
              <LiveClassesVideo navigation={navigation} />
            </View>
          </View>
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
