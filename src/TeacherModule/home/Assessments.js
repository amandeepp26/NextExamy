import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../styles';

export default function Assessments({data,navigation}) {
  return data.map(data => {
    const formattedDate = new Date(data.completed_on).toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: '2-digit',
    });
    return (
      <Pressable
      onPress={()=>navigation.navigate('TestReview')}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderColor: colors.lightGray,
          marginHorizontal:10,
          marginVertical:5,
          borderWidth:1,
          borderRadius:10,
          elevation:3,
          backgroundColor:colors.white
        }}>
        <Text style={[styles.p, {color: colors.primaryBlue}]}>
          {data.subject}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: colors.gray,
            textTransform: 'uppercase',
            paddingTop:5
          }}>
          {data.name} : 001
        </Text>
        <Text
          style={[
            styles.h5,
            {
              color: colors.black,
              paddingVertical: 5,
              textTransform: 'uppercase',
            },
          ]}>
          {data.topic}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '85%',
          }}>
          <Text style={{color: colors.gray, fontSize: 11}}>
            {data.questions} Questions
          </Text>
          <Text style={{color: colors.gray, fontSize: 11}}>
          • {data.marks} Marks
          </Text>
          <Text style={{color: colors.gray, fontSize: 11}}>
          • Completed on {formattedDate}
          </Text>
        </View>
      </Pressable>
    );
  });
}

const styles = StyleSheet.create({});
