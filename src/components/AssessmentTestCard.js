import {Pressable, StyleSheet, Text,Image, View} from 'react-native';
import React from 'react';
import styles from '../modules/navigation/styles';
import {colors} from '../styles';
import {Icon} from 'react-native-elements';



export default function AssessmentTestCard({topic, subject, question,bgColor,navigation}) {
  return (
    
    <Pressable
    onPress={() => navigation.navigate('MockTest')}
    style={[style.header]}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View>
        <Text style={[styles.p, {color: colors.primaryBlue}]}>
          {question} Questions
        </Text>
        <Text style={[styles.h5, {marginTop: 2}]}>{topic}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 2,
          }}>
          <Icon name="time-outline" type="ionicon" size={15} />
          <Text style={[styles.p, {marginLeft: 5}]}>
            50 min
          </Text>
        </View>
      </View>
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        style={{height: 40, width: 40}}
        source={require('./images/notebook.png')}
      />
    </View>
  </Pressable>
  );
}

const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderWidth: 1,
        marginHorizontal: 15,
        // paddingVertical: 5,
        marginTop: 15,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: '#f5f5f5',
        elevation: 1,
      },
});
