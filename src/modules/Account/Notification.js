import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors} from '../../styles';
import {Icon} from 'react-native-elements';
import styles from '../navigation/styles';

export default function Notification({navigation}) {
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
            <Text style={styles.h4}>Notification</Text>
          </View>
        </View>
        <View style={{backgroundColor: colors.white, marginTop: 5, flex: 1,justifyContent:'center'}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('./images/nonotification.png')} style={{width:100,height:125}}/>
            <Text style={{fontWeight:500,paddingVertical:5}}>
            No notification yet
            </Text>
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
