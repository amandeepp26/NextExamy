//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {Icon} from 'react-native-elements';
import Assessments from '../home/Assessments';

const data = [
  {
    subject: 'Physics',
    name: 'simran',
    topic: 'Solid and Fluid Mechanic',
    questions: '60',
    marks: '100',
    completed_on: '02-09-2023',
  },
  {
    subject: 'Mathematics',
    name: 'Aman',
    topic: 'Algebra',
    questions: '10',
    marks: '50',
    completed_on: '10-06-2023',
  },
  {
    subject: 'Chemistry',
    name: 'Kiran',
    topic: 'Thermodynamics',
    questions: '40',
    marks: '80',
    completed_on: '05-11-2023',
  },
  {
    subject: 'Biology',
    name: 'Sonia',
    topic: 'Genetics',
    questions: '20',
    marks: '70',
    completed_on: '12-12-2023',
  },
  {
    subject: 'Computer Science',
    name: 'Ankit',
    topic: 'Data Structures',
    questions: '30',
    marks: '90',
    completed_on: '08-10-2023',
  },
  {
    subject: 'English',
    name: 'Sanya',
    topic: 'Grammar',
    questions: '25',
    marks: '80',
    completed_on: '15-09-2023',
  },
  {
    subject: 'Social Studies',
    name: 'Riya',
    topic: 'World History',
    questions: '15',
    marks: '60',
    completed_on: '20-11-2023',
  },
  {
    subject: 'Physics',
    name: 'Rohit',
    topic: 'Optics',
    questions: '50',
    marks: '90',
    completed_on: '25-12-2023',
  },
];

// create a component
function TeacherTests({navigation}) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: colors.white}}>
        <Text style={[styles.h3, {padding: 20}]}>Tests</Text>
      </View>
      <ScrollView
        style={{
          backgroundColor: colors.white,
          marginTop: 5,
          marginBottom: 50,
        }}>
          <Assessments data={data} navigation={navigation} />
      </ScrollView>
    </View>
  );
}

// define your styles
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
  circleView: {
    width: 35,
    height: 35,
    backgroundColor: 'rgba(2, 146, 183, 0.5)',
    opacity: 0.3,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 5,
    backgroundColor: colors.lightGray,
    height: 100,
    width: '31%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 1,
  },
});

//make this component available to the app
export default TeacherTests;
