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
import styles from '../navigation/styles';
import {Icon} from 'react-native-elements';
import SearchBar from '../../components/SearchBar';

const subjects = [
  {
    id: 1,
    subject: 'Physics',
    topics: '10 Topics',
  },
  {
    id: 2,
    subject: 'Mathematics',
    topics: '15 Topics',
  },
  {
    id: 3,
    subject: 'Chemistry',
    topics: '8 Topics',
  },
  {
    id: 4,
    subject: 'Biology',
    topics: '18 Topics',
  },
];
const testTopics = [
  {
    id: 1,
    name: 'Kinematics',
    questions: 50,
    time: '30 minutes',
  },
  {
    id: 2,
    name: 'Solid & Fuel Mechanics',
    questions: 50,
    time: '30 minutes',
  },
  {
    id: 3,
    name: 'Waves',
    questions: 50,
    time: '30 minutes',
  },
  {
    id: 4,
    name: 'Electricity & Magnetism',
    questions: 50,
    time: '30 minutes',
  },
  {
    id: 5,
    name: 'Modern Physics',
    questions: 50,
    time: '30 minutes',
  },
  {
    id: 6,
    name: 'Thermal Physics',
    questions: 50,
    time: '30 minutes',
  },
  {
    id: 7,
    name: 'Kinematics',
    questions: 50,
    time: '30 minutes',
  },
  {
    id: 8,
    name: 'Mechanism',
    questions: 50,
    time: '30 minutes',
  },
];
// create a component
function Tests({navigation}) {
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
        <View
          style={{
            marginTop: 10,
            backgroundColor: colors.white,
            paddingBottom: 20,
          }}>
          <View style={{paddingLeft: 12}}>
            <Text
              style={[
                styles.h3,
                {fontWeight: '700', color: colors.primaryBlue, marginTop: 10},
              ]}>
              Mock tests
            </Text>
            <Text style={[styles.h4, {fontWeight: '700'}]}>
              to evaluate your preparation
            </Text>
            {/* subjects */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 20,
              }}>
              {subjects.map((subject, index) => {
                return (
                  <Pressable
                    key={index}
                    onPress={() => {
                      if (selectedCardIndex != index) {
                        setSelectedCardIndex(index);
                      } else {
                        setSelectedCardIndex(null);
                      }
                    }}
                    style={{
                      borderWidth: selectedCardIndex === index ? 2 : 1,
                      borderColor:
                        selectedCardIndex === index
                          ? colors.primaryBlue
                          : '#d3d3d3',
                      paddingVertical: 6,
                      paddingHorizontal: 20,
                      borderRadius: 25,
                      alignItems: 'center',
                      marginRight: 8,
                    }}>
                    <Text style={styles.h6}>{subject.subject}</Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
          {testTopics.map(key => {
            return (
              <Pressable
                onPress={() => navigation.navigate('MockTest')}
                style={[style.header]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View>
                    <Text style={[styles.p, {color: colors.primaryBlue}]}>
                      {key.questions} Questions
                    </Text>
                    <Text style={[styles.h5, {marginTop: 2}]}>{key.name}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 2,
                      }}>
                      <Icon name="time-outline" type="ionicon" size={15} />
                      <Text style={[styles.p, {marginLeft: 5}]}>
                        {key.time}
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
          })}
        </View>
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
export default Tests;
