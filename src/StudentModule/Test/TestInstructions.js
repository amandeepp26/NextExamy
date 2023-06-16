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
import {SafeAreaView} from 'react-native';
import Button from '../../components/Button';
// create a component
function TestInstructions({
  keys,
  agree,
  setAgree,
  navigation,
  startTest,
  ...props
}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View
        style={{
          backgroundColor: colors.white,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 3,
          borderColor: '#e5e5e5',
        }}>
        <Icon
          name="chevron-left"
          type="ionicons"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={[styles.h4, {padding: 15, width: '80%'}]}>
          Mock Test- {keys?.topic}
        </Text>
      </View>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: colors.white}}>
          <View
            style={{
              backgroundColor: colors.white,
              paddingLeft: 15,
              paddingVertical: 20,
              marginTop: 5,
              borderBottomWidth: 3,
              borderColor: '#e5e5e5',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="reader-outline"
                color={colors.primaryBlue}
                type="ionicon"
                size={20}
              />
              <Text style={[styles.p, {marginLeft: 10, color: colors.black}]}>
                {keys?.question_count} Questions - {keys?.total_marks} marks
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Icon
                name="time-outline"
                color={colors.primaryBlue}
                type="ionicon"
                size={20}
              />
              <Text style={[styles.p, {marginLeft: 10, color: colors.black}]}>
                {keys?.duration} minutes
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: colors.white,
              marginTop: 5,
              paddingHorizontal: 15,
              //   flex:1
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Icon
                name="reader-outline"
                color={colors.primaryBlue}
                type="ionicon"
                size={20}
              />
              <Text style={[styles.h6, {marginLeft: 10, color: colors.black}]}>
                Instructions
              </Text>
            </View>
            <View style={{marginLeft: 10, marginTop: 10, marginBottom: 120}}>
              <Text style={[styles.p, {lineHeight: 18}]}>
                Welcome to the Mock Test!{'\n'}
                {'\n'}
                Please read the following instructions carefully before starting
                the test:{'\n'}
                1. This mock test is designed to assess your knowledge on the
                subject matter. It consists of multiple-choice questions (MCQs).
                {'\n'}
                2. The test duration is {keys?.duration} minutes. Please ensure
                that you have enough time to complete the test without
                interruptions.
                {'\n'}
                3. You are not allowed to use any reference materials, such as
                books, notes, or online resources, during the test. The purpose
                is to evaluate your understanding based on your existing
                knowledge.{'\n'}
                4. Each question has four options (A, B, C, and D). Choose the
                most appropriate answer by selecting the corresponding option.
                {'\n'}
                5. Make sure to select only one answer per question. Multiple
                answers will be considered incorrect.{'\n'}
                6. Pay attention to the time remaining for the test. Submit your
                answers before the time limit expires. Any unanswered questions
                will be automatically marked as incorrect.{'\n'}
                7. Once you submit your answers, you will not be able to make
                any changes. Review your answers carefully before clicking the
                submit button.
                {'\n'}
                8. Stay focused, manage your time wisely, and do your best!
                {'\n'}
                {'\n'}
                Are you ready? If so, begin the test and good luck!{'\n'}
                {'\n'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: colors.white,
          paddingBottom: 20,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 25,
            marginTop: 15,
          }}>
          <Icon
            onPress={() => setAgree(!agree)}
            name={agree ? 'checkbox-outline' : 'square-outline'}
            color={agree ? colors.primaryBlue : '#000'}
            type="ionicon"
            size={20}
          />
          <Text style={[styles.p, {marginLeft: 10}]}>
            I agree to the Instructions
          </Text>
        </View>

        <Button
          backgroundColor={colors.primaryBlue}
          text={'Start'}
          onpress={() => {
            agree ? startTest() : null;
          }}
          opacity={agree ? 1 : 0.5}
        />
      </View>
    </SafeAreaView>
  );
}

// define your styles
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default TestInstructions;
