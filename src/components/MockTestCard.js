import {Pressable, StyleSheet,Image, Text, View} from 'react-native';
import React from 'react';
import styles from '../modules/navigation/styles';
import {colors} from '../styles';
import {Icon} from 'react-native-elements';



export default function MockTestCard({topic, subject, question,bgColor,navigation}) {

  return (
    <Pressable style={[style.header]} onPress={()=>navigation.navigate('TestReview')}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Text style={[styles.h5, {marginTop: 2,justifyContent:'center',alignItems:'center'}]}>{topic}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 7,
            }}>
            <View
              style={{
                backgroundColor: `rgba(${bgColor},0.2)` ,
                padding: 2,
                paddingHorizontal: 7,
                borderRadius: 10,
                alignItems: 'center',
                
              }}>
              <Text style={[styles.p, {marginLeft: 5, color: `rgb(${bgColor})`}]}>
                {subject}
              </Text>
            </View>
            <Text
              style={[styles.p, {marginLeft: 10, color: colors.primaryBlue}]}>
              {question} Questions
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{height: 40, width: 40}}
          source={require('./images/test.png')}
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
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderColor: '#f5f5f5',
    elevation: 1,
  },
});
