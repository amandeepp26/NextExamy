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
import {SafeAreaView} from 'react-native';
import Button from '../../components/Button';
// create a component

const Questions = [
  {
    id: 1,
    question: 'Which of the following is NOT a prime number?',
    answers: [
      {id: 1, text: '17'},
      {id: 2, text: '19'},
      {id: 3, text: '21', correct: true},
      {id: 4, text: '23'},
    ],
  },
  {
    id: 2,
    question:
      'Which of the following elements has the highest electronegativity?',
    answers: [
      {id: 1, text: 'Carbon'},
      {id: 2, text: 'Oxygen', correct: true},
      {id: 3, text: 'Fluorine'},
      {id: 4, text: 'Nitrogen'},
    ],
  },
  {
    id: 3,
    question: 'Which of the following is NOT a type of RAM?',
    answers: [
      {id: 1, text: 'SDRAM'},
      {id: 2, text: 'DDR4'},
      {id: 3, text: 'SRAM', correct: true},
      {id: 4, text: 'DRAM'},
    ],
  },
  {
    id: 4,
    question: 'Which of the following is NOT a property of a logarithm?',
    answers: [
      {id: 1, text: 'Product rule'},
      {id: 2, text: 'Power rule'},
      {id: 3, text: 'Addition rule', correct: true},
      {id: 4, text: 'Change of base rule'},
    ],
  },
  {
    id: 5,
    question: 'Which of the following countries is NOT a member of the G20?',
    answers: [
      {id: 1, text: 'India'},
      {id: 2, text: 'Russia'},
      {id: 3, text: 'Canada', correct: true},
      {id: 4, text: 'Brazil'},
    ],
  },
  {
    id: 6,
    question: 'Which of the following is NOT a type of radiation?',
    answers: [
      {id: 1, text: 'Alpha'},
      {id: 2, text: 'Beta'},
      {id: 3, text: 'Delta', correct: true},
      {id: 4, text: 'Gamma'},
    ],
  },
  {
    id: 7,
    question: 'Which of the following is NOT a characteristic of a protein?',
    answers: [
      {id: 1, text: 'Primary structure'},
      {id: 2, text: 'Quaternary structure'},
      {id: 3, text: 'Tertiary structure'},
      {id: 4, text: 'Binary structure', correct: true},
    ],
  },
  {
    id: 8,
    question: 'Which of the following is NOT a programming language?',
    answers: [
      {id: 1, text: 'Python'},
      {id: 2, text: 'Java'},
      {id: 3, text: 'Ruby'},
      {id: 4, text: 'Photoshop', correct: true},
    ],
  },
  {
    id: 9,
    question: 'What is the capital of France?',
    answers: [
      {id: 1, text: 'Madrid'},
      {id: 2, text: 'Paris', correct: true},
      {id: 3, text: 'Rome'},
      {id: 4, text: 'Berlin'},
    ],
  },
  {
    id: 10,
    question: 'What is the largest planet in our solar system?',
    answers: [
      {id: 1, text: 'Saturn'},
      {id: 2, text: 'Jupiter', correct: true},
      {id: 3, text: 'Neptune'},
      {id: 4, text: 'Uranus'},
    ],
  },
];
function TestQuestions({navigation}) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View
        style={{
          backgroundColor: colors.white,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 3,
          borderColor: '#e5e5e5',
        }}>
        <Text style={[styles.h6, {padding: 20}]}> {Questions[index].id} of {Questions.length}</Text>
        <View
          style={{
            borderWidth: 1,
            paddingVertical: 6,
            paddingHorizontal: 25,
            marginRight: 10,
            borderColor: '#d3d3d3',
            borderRadius: 7,
          }}>
          <Text style={styles.h6}>Finish</Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 15,
          }}>
          <Text style={[styles.h6, {marginLeft: 10, color: colors.black}]}>
            Question {Questions[index].id}
          </Text>
          <View style={{marginLeft: 10, marginTop: 10}}>
            <Text style={[styles.p, {lineHeight: 18, marginBottom: 10}]}>
              {Questions[index]?.question}
            </Text>
            {Questions[index]?.answers.map((key, index) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15,
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                    borderColor: '#d3d3d3',
                  }}>
                  <Icon
                    key={index}
                    onPress={() => {
                      if (selectedCardIndex != index) {
                        setSelectedCardIndex(index);
                      } else {
                        setSelectedCardIndex(null);
                      }
                    }}
                    name={
                      selectedCardIndex === index
                        ? 'radio-button-on-outline'
                        : 'radio-button-off-outline'
                    }
                    color={
                      selectedCardIndex === index ? colors.primaryBlue : '#000'
                    }
                    type="ionicon"
                    size={20}
                  />
                  <Text style={[styles.p, {marginLeft: 10}]}>{key.text}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          justifyContent: 'space-between',
          bottom: 20,
          width: '95%',
          alignSelf: 'center',
        }}>
        <View style={{width: '47%'}}>
            {index >0 ?
          <Button
            text={'Previous'}
            color={true}
            onpress={() => {
              if (index > 0) {
                setIndex(index - 1);
              }
            }}
          />
          :
          null}
        </View>
        <View style={{width: '47%'}}>
          <Button
            text={index+1 == Questions.length ? 'Finish' : 'Save & Next'}
            onpress={() => {
              if (index+1 < Questions.length) {
                setSelectedCardIndex(null);
                setIndex(index + 1);
              }
              else{
                navigation.navigate('Tests')
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

//make this component available to the app
export default TestQuestions;
