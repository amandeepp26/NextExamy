import React, {Component, useEffect, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  Pressable,
  Alert,
  BackHandler,
} from 'react-native';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native';
import Button from '../../components/Button';
import apiClient from '../../utils/apiClient';
import {connect} from 'react-redux';
import {Toast} from 'react-native-toast-message';
import {RenderHTML} from 'react-native-render-html';
import TestInstructions from './TestInstructions';

function TestQuestions({navigation, authToken, route}) {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [optionId, setOptionId] = useState(null);
  const [agree, setAgree] = useState(false);
  const [start, setStart] = useState(false);
  const [assessment_id, setAssessment_id] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    // getAssessmentQuestion();
    console.warn('options is--->>', selectedOptions, optionId);
  }, [selectedOptions, optionId]);
  const getAssessmentQuestion = async () => {
    try {
      const response = await apiClient.post(`${apiClient.Urls.mockTest}`, {
        topic: route?.params.key.topic,
        authToken: authToken,
      });
      console.warn(response);
      if (response.status) {
        setData(response.data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (e) {
      Toast.show({
        text1: e.message || e || 'Something went wrong!',
        type: 'error',
      });
      setIsLoading(false);
    }
  };

  const startTest = async () => {
    try {
      const response = await apiClient.post(`${apiClient.Urls.startTest}`, {
        topic: route?.params.key.topic,
        subject_id: route?.params.subject_id,
        authToken: authToken,
      });
      console.warn(response);
      if (response.status) {
        setAssessment_id(response.assessment_id);
        setStart(true);
        setData(response.data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (e) {
      Toast.show({
        text1: e.message || e || 'Something went wrong!',
        type: 'error',
      });
      setIsLoading(false);
    }
  };

  const endTest = () => {
    Alert.alert('Are you sure?', 'Do you really want to submit your answers?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Submit',
        onPress: () => {
          submitTest();
        },
      },
    ]);
  };

  const handleSelectOption = id => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[index] = id;
    setSelectedOptions(updatedSelectedOptions);
    setOptionId(id);
    checkAnswer();
  };

  const checkAnswer = async () => {
    try {
      const response = await apiClient.post(`${apiClient.Urls.checkAnswer}`, {
        question_id: data[index]?.id,
        answer_id: optionId,
        assessment_id: assessment_id,
        authToken: authToken,
      });
      if (response.status) {
        // setIndex(index + 1);
      }
    } catch (e) {
      Toast.show({
        text1: e.message || e || 'Something went wrong!',
        type: 'error',
      });
    }
  };

  const submitTest = async () => {
    try {
      const response = await apiClient.post(`${apiClient.Urls.submitTest}`, {
        assessment_id: assessment_id,
        authToken: authToken,
      });
      if (response.status) {
        setSubmit(true);
        setResult(response);
      }
    } catch (e) {
      Toast.show({
        text1: e.message || e || 'Something went wrong!',
        type: 'error',
      });
    }
  };

  useEffect(() => {
    const handleBackButton = () => {
      Alert.alert(
        'Want to exit?',
        'If you exit your test will automatically submit at current stage.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
            textStyle: {
              color: 'red',
              fontWeight: 'bold',
            },
          },
          {
            text: 'Exit',
            onPress: () => {
              // navigation.navigate('TESTS');
              submitTest();
              // Handle the user's choice to continue
            },
            textStyle: {
              color: 'green',
              fontStyle: 'italic',
            },
          },
        ],
        {cancelable: false},
      );
      return true; // Return true to prevent default back button behavior
    };
    if (!start) {
      return; // Exit the useEffect if test is not started
    }
    if (submit) {
      return; // Exit the useEffect if test is submitted
    }
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );
    return () => {
      backHandler.remove(); // Clean up the event listener when the component unmounts
    };
  }, [start,submit]);

  const selectedOption = selectedOptions[index];

  // if (isLoading) {
  //   return (
  //     <View style={{justifyContent: 'center', flex: 1}}>
  //       <ActivityIndicator size={25} color={colors.primaryBlue} />
  //     </View>
  //   );
  // }

  // if (data == null) {
  //   return (
  //     <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
  //       <Text style={styles.h3}>No data found!</Text>
  //     </View>
  //   );
  // }

  if (!start) {
    return (
      <>
        <TestInstructions
          agree={agree}
          keys={route?.params.key}
          setAgree={setAgree}
          startTest={startTest}
          navigation={navigation}
          setAssessment_id={setAssessment_id}
        />
      </>
    );
  }

  if (submit) {
    console.log(result);
    return <TestResultComponent {...result} navigation={navigation} setSubmit={setSubmit} setStart={setStart} />;
  }
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
        <Text style={[styles.h6, {padding: 20}]}>
          {' '}
          {index + 1} of {data?.length}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Timer
            duration={route?.params.key.duration}
            onTimeUp={() =>
              Alert.alert(
                'Time is up!',
                'Your test time has expired. Do you want to submit your answers?',
                [
                  {
                    text: 'Submit',
                    onPress: () => {
                      // navigation.navigate('TESTS');
                      submitTest();
                    },
                  },
                ],
                {cancelable: false},
              )
            }
          />
          <Pressable
            onPress={() => endTest()}
            style={{
              borderWidth: 1,
              paddingVertical: 6,
              paddingHorizontal: 25,
              marginHorizontal: 10,
              borderColor: '#d3d3d3',
              borderRadius: 7,
            }}>
            <Text style={styles.h6}>Finish</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 15,
            marginBottom: 100,
          }}>
          <Text style={[styles.h6, {marginLeft: 10, color: colors.black}]}>
            Question {index + 1}
          </Text>
          <View style={{marginLeft: 10, marginTop: 10}}>
            <RenderHTML source={{html: data?.[index]?.question.text}} />
            {/* <Text style={[styles.p, {lineHeight: 18, marginBottom: 10}]}>
                  {data?.[index]?.question.text}
                </Text> */}
            {data?.[index]?.question.images.img != '' &&
            data?.[index]?.question.images.img != null ? (
              <View style={{height: 210, width: 250, alignSelf: 'center'}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  resizeMode="contain"
                  source={{
                    uri: `https://app.ankitbangwaldigitalmarketing.in/images/assessments/${data?.[index]?.question.images.img}`,
                  }}
                />
              </View>
            ) : null}
            {data?.[index]?.options[0].option.includes('png') ? (
              <>
                {data?.[index]?.options.map(key => {
                  return (
                    key.option &&
                    <Pressable
                      onPress={() => handleSelectOption(key.option_id)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 15,
                        borderBottomWidth: 1,
                        paddingBottom: 10,
                        borderColor: '#d3d3d3',
                        flex: 1,
                        height: 'auto',
                        // width:'100%'
                      }}>
                      <Icon
                        name={
                          selectedOption === key.option_id
                            ? 'radio-button-on-outline'
                            : 'radio-button-off-outline'
                        }
                        color={
                          selectedOption === key.option_id
                            ? colors.primaryBlue
                            : '#000'
                        }
                        type="ionicon"
                        size={20}
                      />
                      <View
                        style={{
                          width: 180,
                          height: 30,
                          alignItems: 'center',
                        }}>
                        <Image
                          resizeMode="contain"
                          source={{
                            uri: `https://app.ankitbangwaldigitalmarketing.in/images/assessments/${key.option}`,
                          }}
                          style={style.optionImg}
                        />
                      </View>
                    </Pressable>
                  );
                })}
              </>
            ) : (
              <>
                {data?.[index]?.options.map(key => {
                  return (
                    <Pressable
                      onPress={() => handleSelectOption(key.option_id)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 15,
                        borderBottomWidth: 1,
                        paddingBottom: 10,
                        borderColor: '#d3d3d3',
                      }}>
                      <Icon
                        name={
                          selectedOption === key.option_id
                            ? 'radio-button-on-outline'
                            : 'radio-button-off-outline'
                        }
                        color={
                          selectedOption === key.option_id
                            ? colors.primaryBlue
                            : '#000'
                        }
                        type="ionicon"
                        size={20}
                        style={{marginRight: 10}}
                      />
                      <View style={{width: '90%'}}>
                        <RenderHTML source={{html: key.option}} />
                      </View>
                    </Pressable>
                  );
                })}
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
          backgroundColor: colors.white,
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
            text={index + 1 == data?.length ? 'Finish' : 'Save & Next'}
            onpress={() => {
              if (index + 1 < data?.length) {
                // checkAnswer();
                setIndex(index + 1);
              } else {
                endTest();
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function Timer({duration, onTimeUp}) {
  const [seconds, setSeconds] = useState(duration * 60);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds <= 0) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        if (prevSeconds < 59) {
          setAlert(true);
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <View style={styles.timerContainer}>
      {alert ? (
        <Blink text={formatTime(seconds)} />
      ) : (
        <Text style={style.timerText}>{formatTime(seconds)}</Text>
      )}
    </View>
  );
}

const TestResultComponent = ({
  message,
  total_attempt,
  correct_answer,
  marks,
  incorrect_answer,
  status,
  navigation,
  setSubmit,
  setStart
}) => {
  return (
    <View style={style.container}>
      <Image
        source={require('../../../assets/images/smile.gif')}
        style={{width: 200, height: 200}}
      />
      <Text style={[styles.h2, {color: colors.primaryBlue, fontWeight: 700}]}>
        Successfully Submitted !
      </Text>
      <View style={{flexDirection: 'row', alignSelf: 'center', width: '100%'}}>
        <View style={{paddingTop: 30, width: '50%', alignItems: 'flex-end'}}>
          <View>
            <Text style={style.text1}>Total Attempts</Text>
            <Text style={style.text1}>Correct Answers</Text>
            <Text style={style.text1}>Marks</Text>
            <Text style={style.text1}>Incorrect Answers</Text>
          </View>
        </View>
        <View style={{paddingTop: 30, width: '40%', marginLeft: 15}}>
          <Text style={[style.text, {fontWeight: 700}]}>
            :{'                   '}{total_attempt}
          </Text>
          <Text style={[style.text, {fontWeight: 700}]}>
            :{'                   '}{correct_answer}
          </Text>
          <Text style={[style.text, {fontWeight: 700}]}>
            :{'                   '}{marks}
          </Text>
          <Text style={[style.text, {fontWeight: 700}]}>
            :{'                   '}{incorrect_answer}
          </Text>
     
        </View>
      </View>
      {/* <View
        style={{
          bottom: 30,
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
        }}>
        <Button backgroundColor={colors.primaryBlue} text={'View Insights'} onpress={()=>{navigation.navigate('MyLearnings'),setSubmit(false),setStart(false)}} />
      </View> */}
    </View>
  );
};

const Blink = props => {
  const [isShowingText, setIsShowingText] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 600);

    return () => clearInterval(toggle);
  }, [isShowingText]);

  if (!isShowingText) {
    return null;
  }

  return <Text style={[style.timerText, {color: 'red'}]}>{props.text}</Text>;
};
//make this component available to the app
export default connect(state => {
  return {
    authToken: state.session.authToken,
  };
}, {})(TestQuestions);

// define your styles
const style = StyleSheet.create({
  optionImg: {
    width: '100%',
    height: '100%',
    marginLeft: 20,
  },
  timerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  timerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    elevation: 2,
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    paddingBottom: 2,

    textAlign: 'left',
    color: colors.gray,
  },
  text1: {
    fontSize: 14,
    paddingBottom: 2,

    textAlign: 'auto',
    color: colors.gray,
  },
});
