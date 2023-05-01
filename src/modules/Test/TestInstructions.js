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
function TestInstructions({navigation}) {
  const [agree, setAgree] = useState(false);
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
        <Text style={[styles.h3, {padding: 20}]}>Mock Test- Kinematics</Text>
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
                15 Questions - 60 marks
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
                30 minutes
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
            <View style={{marginLeft: 10, marginTop: 10}}>
              <Text style={[styles.p, {lineHeight: 18}]}>
                • Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem
                {'\n'}
                {'\n'}• Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem
                {'\n'}
                {'\n'}• Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{position: 'absolute', bottom: 20, width: '100%'}}>
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

        <Button backgroundColor={colors.primaryBlue} text={'Start'} onpress={()=>{agree? navigation.navigate('TestQuestions') : null}} opacity={agree ? 1 : 0.5} />
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
