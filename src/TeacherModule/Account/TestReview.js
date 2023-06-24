import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../../navigation/styles';
import {colors} from '../../styles';
import {Icon} from 'react-native-elements';
import Header from '../../components/Header';

export default function TeacherTestReview({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}
   
        <Header title={'Review Answers - Kinematics<'} navigation={navigation} />
        
        <View
          style={{
            backgroundColor: colors.white,
            marginTop: 5,
            flexDirection: 'row',
            height: 140,
            paddingHorizontal:10
          }}>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              paddingHorizontal: 15,
            }}>
            <Text style={[styles.h4, {color: '#6C6C6C'}]}>Your Score is</Text>
            <Text style={[styles.h1]}>135</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              width: '50%',
              paddingHorizontal: 20,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Icon name="checkmark-circle" type="ionicon" color={'green'} />
              <Text>Correct</Text>
              <Text style={{paddingLeft: 20, color: colors.black}}>18</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 5,
              }}>
              <Icon name="close-circle" type="ionicon" color={'red'} />
              <Text>Incorrect</Text>
              <Text style={{paddingLeft: 20, color: colors.black}}>12</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Icon name="alert-circle" type="ionicon" color={'lightgrey'} />
              <Text>Unanswered</Text>
              <Text style={{paddingLeft: 20, color: colors.black}}>12</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              backgroundColor: colors.white,
              marginTop: 5,
              paddingVertical: 15,
              paddingHorizontal: 15,
              borderBottomWidth: 0.4,
              borderBottomColor: 'gray',
            }}>
            <Text>Question 1</Text>
            <Text style={[styles.p, {paddingVertical: 10}]}>
              A particle P is sliding down a frictionless hemispherical bowl. It
              passes point A at t = 0. At this instant of time, the horizontal
              component of its velocity is v. A bead Q of the same mass as P is
              ejected from A at t = 0 along the horizontal string AB, with speed
              v. Friction between the bead and the string may be neglected. Let
              tp and tq be the respective times taken by P and Q to reach point
              B.
            </Text>
            <View
              style={{
                height: 150,
                borderWidth: 1,
                borderColor: colors.grey,
                borderRadius: 10,
                marginVertical: 10,
              }}>
              <View
                style={{
                  height: '25%',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  backgroundColor: 'rgba(5, 126, 0,0.12)',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name="checkmark-circle"
                    type="ionicon"
                    color={'green'}
                  />
                  <Text style={{paddingLeft: 15}}>{'tP < tQ'}</Text>
                </View>
                <Text style={{fontSize: 10}}>Right answer</Text>
              </View>
              <View
                style={{
                  height: '25%',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name="radio-button-off"
                    type="ionicon"
                    color={'#707070'}
                  />
                  <Text style={{paddingLeft: 15}}>{'tP < tQ'}</Text>
                </View>
              </View>
              <View
                style={{
                  height: '25%',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name="radio-button-off"
                    type="ionicon"
                    color={'#707070'}
                  />
                  <Text style={{paddingLeft: 15}}>{'tP < tQ'}</Text>
                </View>
              </View>
              <View
                style={{
                  height: '25%',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name="radio-button-off"
                    type="ionicon"
                    color={'#707070'}
                  />
                  <Text style={{paddingLeft: 15}}>{'tP < tQ'}</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: colors.white,
              paddingVertical: 15,
              paddingHorizontal: 15,
              borderBottomWidth: 0.4,
              borderBottomColor: 'gray',
            }}>
            <Text>Question 2</Text>
            <Text style={[styles.p, {paddingVertical: 10}]}>
              A particle P is sliding down a frictionless hemispherical bowl. It
              passes point A at t = 0. At this instant of time, the horizontal
              component of its velocity is v. A bead Q of the same mass as P is
              ejected from A at t = 0 along the horizontal string AB, with speed
              v. Friction between the bead and the string may be neglected. Let
              tp and tq be the respective times taken by P and Q to reach point
              B.
            </Text>
            <View
              style={{
                height: 150,
                borderWidth: 1,
                borderColor: colors.grey,
                borderRadius: 10,
                marginVertical: 10,
              }}>
              <View
                style={{
                  height: '25%',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  backgroundColor: 'rgba(5, 126, 0,0.12)',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name="checkmark-circle"
                    type="ionicon"
                    color={'green'}
                  />
                  <Text style={{paddingLeft: 15}}>{'tP < tQ'}</Text>
                </View>
                <Text style={{fontSize: 10}}>Right answer</Text>
              </View>
              <View
                style={{
                  height: '25%',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name="radio-button-off"
                    type="ionicon"
                    color={'#707070'}
                  />
                  <Text style={{paddingLeft: 15}}>{'tP < tQ'}</Text>
                </View>
              </View>
              <View
                style={{
                  height: '25%',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(255, 0, 0,0.1)',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="close-circle" type="ionicon" color={'red'} />
                  <Text style={{paddingLeft: 15}}>{'tP < tQ'}</Text>
                </View>
                <Text style={{fontSize: 10}}>Your answer</Text>
              </View>
              <View
                style={{
                  height: '25%',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name="radio-button-off"
                    type="ionicon"
                    color={'#707070'}
                  />
                  <Text style={{paddingLeft: 15}}>{'tP < tQ'}</Text>
                </View>
              </View>
            </View>
          </View>
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
});
