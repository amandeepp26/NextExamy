import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
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
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAssessmentQuestion();
  }, []);

  const getAssessmentQuestion = () => {
    fetch('https://app.ankitbangwaldigitalmarketing.in/api/assessmentdata', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.warn(json);
        if (json.status) {
          setData(json.data);
          setIsLoading(false);
        }
        else{
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.warn(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      {isLoading ? (
        <View style={{justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size={25} color={colors.primaryBlue} />
        </View>
      ) : (
        <>
        {data!=null ?
        <>
          <View
            style={{
              backgroundColor: colors.white,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 3,
              borderColor: '#e5e5e5',
            }}>
            <Text style={[styles.h6, {padding: 20}]}>
              {' '}
              {data?.[index].id} of {data?.length}
            </Text>
            <Pressable
              onPress={() => navigation.navigate('TESTS')}
              style={{
                borderWidth: 1,
                paddingVertical: 6,
                paddingHorizontal: 25,
                marginRight: 10,
                borderColor: '#d3d3d3',
                borderRadius: 7,
              }}>
              <Text style={styles.h6}>Finish</Text>
            </Pressable>
          </View>
          <ScrollView>
            <View
              style={{
                marginTop: 10,
                paddingHorizontal: 15,
              }}>
              <Text style={[styles.h6, {marginLeft: 10, color: colors.black}]}>
                Question {data?.[index].id}
              </Text>
              <View style={{marginLeft: 10, marginTop: 10}}>
                <Text style={[styles.p, {lineHeight: 18, marginBottom: 10}]}>
                  {data?.[index]?.question}
                </Text>
                {/* {Questions[index]?.answers.map((key, index) => {
              return ( */}
                {data?.[index]?.option_one.includes('png') ? (
                  <>
                    <Pressable
                      onPress={() => {
                        if (selectedCardIndex != index) {
                          setSelectedCardIndex(index);
                        } else {
                          setSelectedCardIndex(null);
                        }
                      }}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 15,
                        borderBottomWidth: 1,
                        paddingBottom: 10,
                        borderColor: '#d3d3d3',
                        flex:1,
                        height:'auto',
                        // width:'100%'
                      }}>
                      <Icon
                        key={index}
                        name={
                          selectedCardIndex === index
                            ? 'radio-button-on-outline'
                            : 'radio-button-off-outline'
                        }
                        color={
                          selectedCardIndex === index
                            ? colors.primaryBlue
                            : '#000'
                        }
                        type="ionicon"
                        size={20}
                      />
                      <View style={{width:250,height:150,alignItems:'center'}}>
                      <Image
                        source={{
                          uri: `https://app.ankitbangwaldigitalmarketing.in/images/assessments/${data?.[index].option_one}`,
                        }}
                        style={style.optionImg}
                      />
                      </View>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        if (selectedCardIndex != index) {
                          setSelectedCardIndex(index);
                        } else {
                          setSelectedCardIndex(null);
                        }
                      }}
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
                        name={
                          selectedCardIndex === index
                            ? 'radio-button-on-outline'
                            : 'radio-button-off-outline'
                        }
                        color={
                          selectedCardIndex === index
                            ? colors.primaryBlue
                            : '#000'
                        }
                        type="ionicon"
                        size={20}
                      />
                      <View style={{width:250,height:50}}>

                      <Image
                        source={{
                          uri: `https://app.ankitbangwaldigitalmarketing.in/images/assessments/${data?.[index].option_two}`,
                        }}
                        style={style.optionImg}
                      />
                      </View>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        if (selectedCardIndex != index) {
                          setSelectedCardIndex(index);
                        } else {
                          setSelectedCardIndex(null);
                        }
                      }}
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
                        name={
                          selectedCardIndex === index
                            ? 'radio-button-on-outline'
                            : 'radio-button-off-outline'
                        }
                        color={
                          selectedCardIndex === index
                            ? colors.primaryBlue
                            : '#000'
                        }
                        type="ionicon"
                        size={20}
                      />
                      <View style={{width:250,height:50}}>
                      <Image
                        source={{
                          uri: `https://app.ankitbangwaldigitalmarketing.in/images/assessments/${data?.[index].option_three}`,
                        }}
                        style={style.optionImg}
                      />
                      </View>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        if (selectedCardIndex != index) {
                          setSelectedCardIndex(index);
                        } else {
                          setSelectedCardIndex(null);
                        }
                      }}
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
                        name={
                          selectedCardIndex === index
                            ? 'radio-button-on-outline'
                            : 'radio-button-off-outline'
                        }
                        color={
                          selectedCardIndex === index
                            ? colors.primaryBlue
                            : '#000'
                        }
                        type="ionicon"
                        size={20}
                      />
                      <View style={{width:250,height:50}}>
                      <Image
                        source={{
                          uri: `https://app.ankitbangwaldigitalmarketing.in/images/assessments/${data?.[index].option_four}`,
                        }}
                        style={style.optionImg}
                      />
                      </View>
                    </Pressable>
                  </>
                ) : (
                  <>
                    <Pressable
                      onPress={() => {
                        if (selectedCardIndex != index) {
                          setSelectedCardIndex(index);
                        } else {
                          setSelectedCardIndex(null);
                        }
                      }}
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
                        name={
                          selectedCardIndex === index
                            ? 'radio-button-on-outline'
                            : 'radio-button-off-outline'
                        }
                        color={
                          selectedCardIndex === index
                            ? colors.primaryBlue
                            : '#000'
                        }
                        type="ionicon"
                        size={20}
                      />
                      <Text style={[styles.p, {marginLeft: 10, width: '85%'}]}>
                        {data?.[index].option_one}
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        if (selectedCardIndex != index) {
                          setSelectedCardIndex(index);
                        } else {
                          setSelectedCardIndex(null);
                        }
                      }}
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
                        name={
                          selectedCardIndex === index
                            ? 'radio-button-on-outline'
                            : 'radio-button-off-outline'
                        }
                        color={
                          selectedCardIndex === index
                            ? colors.primaryBlue
                            : '#000'
                        }
                        type="ionicon"
                        size={20}
                      />
                      <Text style={[styles.p, {marginLeft: 10, width: '85%'}]}>
                        {data?.[index].option_two}
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        if (selectedCardIndex != index) {
                          setSelectedCardIndex(index);
                        } else {
                          setSelectedCardIndex(null);
                        }
                      }}
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
                        name={
                          selectedCardIndex === index
                            ? 'radio-button-on-outline'
                            : 'radio-button-off-outline'
                        }
                        color={
                          selectedCardIndex === index
                            ? colors.primaryBlue
                            : '#000'
                        }
                        type="ionicon"
                        size={20}
                      />
                      <Text style={[styles.p, {marginLeft: 10, width: '85%'}]}>
                        {data?.[index].option_three}
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        if (selectedCardIndex != index) {
                          setSelectedCardIndex(index);
                        } else {
                          setSelectedCardIndex(null);
                        }
                      }}
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
                        name={
                          selectedCardIndex === index
                            ? 'radio-button-on-outline'
                            : 'radio-button-off-outline'
                        }
                        color={
                          selectedCardIndex === index
                            ? colors.primaryBlue
                            : '#000'
                        }
                        type="ionicon"
                        size={20}
                      />
                      <Text style={[styles.p, {marginLeft: 10, width: '85%'}]}>
                        {data?.[index].option_four}
                      </Text>
                    </Pressable>
                  </>
                )}
                {/* );
            })} */}
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
              {index > 0 ? (
                <Button
                  text={'Previous'}
                  color={true}
                  onpress={() => {
                    if (index > 0) {
                      setIndex(index - 1);
                    }
                  }}
                />
              ) : null}
            </View>
            <View style={{width: '47%'}}>
              <Button
                backgroundColor={colors.primaryBlue}
                text={index + 1 == Questions.length ? 'Finish' : 'Save & Next'}
                onpress={() => {
                  if (index + 1 < Questions.length) {
                    setSelectedCardIndex(null);
                    setIndex(index + 1);
                  } else {
                    navigation.navigate('TESTS');
                  }
                }}
              />
            </View>
          </View>
        </>
        :
        
        <View style={{justifyContent: 'center',alignItems:'center', flex: 1}}>
        <Text style={styles.h3}>
          No data found!
        </Text>
        </View>
}
        </>
      )}
    </SafeAreaView>
  );
}

//make this component available to the app
export default TestQuestions;

// define your styles
const style = StyleSheet.create({
  optionImg: {
    width: '100%',
    height: "100%",
    marginLeft: 20,
    resizeMode:'contain'
  },
});