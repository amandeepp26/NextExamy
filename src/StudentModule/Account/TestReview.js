import {StyleSheet, Text, View, Image, ScrollView, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../../navigation/styles';
import {colors} from '../../styles';
import {Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import apiClient from '../../utils/apiClient';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import RenderHTML from 'react-native-render-html';

export default function TestReview({navigation, route}) {
  const authToken = useSelector(state => state.session.authToken);
  const [result, setResult] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    getMockTestDetail();
  }, []);
  // Function for the submitted mock test lists
  const getMockTestDetail = async () => {
    try {
      const response = await apiClient.post(
        `${apiClient.Urls.mocktestDetail}`,
        {
          authToken: authToken,
          assess_id: route?.params.id,
        },
      );
      console.warn('res--->', response);
      if (response) {
        setResult(response.result);
        setData(response.data);
        setIsLoading(false);
      } else {
      }
    } catch (e) {
      Toast.show({
        text1: e.message || e || 'Something went wrong!',
        type: 'error',
      });
    }
  };
  if(isLoading){
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size={'large'} color={colors.primaryBlue} />
      </View>
    )
  }
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
            <Text style={styles.h4}>
              Review Answers - {route?.params.topic}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            marginTop: 5,
            flexDirection: 'row',
            alignItems:'center',
            height: 120,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              paddingHorizontal: 15,
              alignItems:'center'
            }}>
            <Text style={[styles.h4, {color: '#6C6C6C'}]}>Your Score is</Text>
            <Text style={[styles.h1]}>{result?.marks}</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              width: '50%',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="checkmark-circle" type="ionicon" color={'green'} />
              <Text style={{marginLeft: 5}}>Correct</Text>
              <Text style={{paddingLeft: 20, color: colors.black}}>
                {result?.correct_answer}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 5,
              }}>
              <Icon name="close-circle" type="ionicon" color={'red'} />
              <Text style={{marginLeft: 5}}>Incorrect</Text>
              <Text style={{paddingLeft: 20, color: colors.black}}>
                {result?.incorrect_answer}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="alert-circle" type="ionicon" color={'lightgrey'} />
              <Text style={{marginLeft: 5}}>Unanswered</Text>
              <Text style={{paddingLeft: 20, color: colors.black}}>
                {data?.length - result?.total_attempt}
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
          {data?.map((key, index) => {
            return (
              <View
                style={{
                  backgroundColor: colors.white,
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                  borderBottomWidth: 0.4,
                  borderBottomColor: 'gray',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>Question {index + 1}</Text>
                  {key.given_ans == '' && (
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icon
                        name="alert-circle"
                        type="ionicon"
                        color={'lightgrey'}
                      />
                      <Text style={{marginLeft: 5}}>Unanswered</Text>
                    </View>
                  )}
                </View>
                <RenderHTML source={{html: key.question.text}} />
                {key.question.images.img != '' &&
            key.question.images.img != null ? (
              <View style={{height: 210, width: 250, alignSelf: 'center'}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  resizeMode="contain"
                  source={{
                    uri: `https://app.ankitbangwaldigitalmarketing.in/images/assessments/${key.question.images.img}`,
                  }}
                />
              </View>
            ) : null}
            
            {key.options[0].option.includes('png') ? (
                <View
                  style={{
                    height: 200,
                    borderWidth: 1,
                    borderColor: colors.grey,
                    borderRadius: 10,
                    marginVertical: 10,
                    overflow:'hidden'
                  }}>
                  {key.options.map((item, ind) => {
                    let backgroundColor = 'white';
                    if (item.option_id === key.answer) {
                      backgroundColor = 'rgba(5, 126, 0,0.12)';
                    } else if (item.option_id === key.given_ans) {
                      backgroundColor = 'rgba(255, 0, 0,0.1)';
                    }
                    return (
                      <View
                        style={{
                          height: '25%',
                          // backgroundColor: backgroundColor,
                          alignItems: 'center',
                          flexDirection: 'row',
                          paddingHorizontal: 10,
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '80%',
                          }}>
                          {item.option_id === key.answer &&
                          backgroundColor === 'rgba(5, 126, 0,0.12)' ? (
                            <Icon
                              name="checkmark-circle"
                              type="ionicon"
                              color={'green'}
                            />
                          ) : (
                            <Icon
                              name={
                                backgroundColor === 'rgba(255, 0, 0,0.1)'
                                  ? 'close-circle'
                                  : 'radio-button-off'
                              }
                              type="ionicon"
                              color={
                                backgroundColor === 'rgba(255, 0, 0,0.1)'
                                  ? 'red'
                                  : '#696969'
                              }
                            />
                          )}
                          
                      <View
                        style={{
                          width: 180,
                          height: 30,
                          alignItems: 'center',
                        }}>
                        <Image
                          resizeMode="contain"
                          source={{
                            uri: `https://app.ankitbangwaldigitalmarketing.in/images/assessments/${item.option}`,
                          }}
                          style={style.optionImg}
                        />
                      </View>
                        </View>
                        {backgroundColor === 'rgba(255, 0, 0,0.1)' ? (
                          <Text style={{fontSize: 10,color:'red'}}>Your answer</Text>
                        ) : null}
                        {backgroundColor === 'rgba(5, 126, 0,0.12)' ? (
                          <Text style={{fontSize: 10,color:'green'}}>Right answer</Text>
                        ) : null}
                      </View>
                    );
                  })}
                </View>
            )
            :
            <View
                  style={{
                    height: 200,
                    borderWidth: 1,
                    borderColor: colors.grey,
                    borderRadius: 10,
                    marginVertical: 10,
                    overflow:'hidden'
                  }}>
                  {key.options.map((item, ind) => {
                    let backgroundColor = 'white';
                    if (item.option_id === key.answer) {
                      backgroundColor = 'rgba(5, 126, 0,0.12)';
                    } else if (item.option_id === key.given_ans) {
                      backgroundColor = 'rgba(255, 0, 0,0.1)';
                    }
                    return (
                      <View
                        style={{
                          height: '25%',
                          backgroundColor: backgroundColor,
                          alignItems: 'center',
                          flexDirection: 'row',
                          paddingHorizontal: 10,
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '80%',
                          }}>
                          {item.option_id === key.answer &&
                          backgroundColor === 'rgba(5, 126, 0,0.12)' ? (
                            <Icon
                              name="checkmark-circle"
                              type="ionicon"
                              color={'green'}
                            />
                          ) : (
                            <Icon
                              name={
                                backgroundColor === 'rgba(255, 0, 0,0.1)'
                                  ? 'close-circle'
                                  : 'radio-button-off'
                              }
                              type="ionicon"
                              color={
                                backgroundColor === 'rgba(255, 0, 0,0.1)'
                                  ? 'red'
                                  : '#696969'
                              }
                            />
                          )}
                          <View style={{marginLeft:5,paddingTop:-2,width:'80%'}}>
                          <RenderHTML source={{html: item.option}} />
                          </View>
                        </View>
                        {backgroundColor === 'rgba(255, 0, 0,0.1)' ? (
                          <Text style={{fontSize: 10,color:'red'}}>Your answer</Text>
                        ) : null}
                        {backgroundColor === 'rgba(5, 126, 0,0.12)' ? (
                          <Text style={{fontSize: 10,color:'green'}}>Right answer</Text>
                        ) : null}
                      </View>
                    );
                  })}
                </View>
                }
              </View>
            );
          })}
        </ScrollView>
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
  optionImg: {
    width: '100%',
    height: '100%',
    marginLeft: 20,
  },
});
