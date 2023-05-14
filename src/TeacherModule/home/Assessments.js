import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../styles';
import {color} from 'react-native-elements/dist/helpers';

const data = [
  {
    subject: 'Physics',
    Name: 'simran',
    topic: 'Solid and Fluid Mechanic',
    questions: '60',
    marks: '100',
    Completed_on: '02-09-2023',
  },
  {
    subject: 'Mathematics',
    Name: 'Aman',
    topic: 'Algebra',
    questions: '10',
    marks: '50',
    Completed_on: '10-06-2023',
  },
];

export default function Assessments() {
  return data.map(data => {
    const formattedDate = new Date(data.Completed_on).toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: '2-digit',
    });
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderBottomColor: colors.gray,
          borderBottomWidth: 0.5,
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
          {data.Name} : 001
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
      </View>
    );
  });
}

const styles = StyleSheet.create({});
