import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {Icon} from 'react-native-elements';
import {Image} from 'react-native-ui-lib';
import Button from '../../components/Button';
import Header from '../../components/Header';

const faq = [
  {
    id: 0,
    question:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
    answer:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: 2,
    question:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
    answer:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
  },
  {
    id: 3,
    question:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
    answer:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
  },
  {
    id: 4,
    question:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
    answer:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
  },
];

export default function HelpandSupport({navigation}) {
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}
        <Header title={'Help and Support'} navigation={navigation}/>
        <View
          style={{
            backgroundColor: colors.white,
            marginVertical: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 25,
            paddingHorizontal: 20,
            alignItems:'center'
          }}>
          <Text
            style={[
              styles.h5,
              {fontWeight: 700, color: colors.primaryBlue, width: '50%'},
            ]}>
            We will be more than happy to assist you!
          </Text>
          <Image
            source={require('./images/people.png')}
            style={{width: 100, height: 100}}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.white,

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          <Text style={[styles.h6,{fontWeight:700}]}>Have any Query?</Text>
          <Pressable
            // onPress={()=>navigation.navigate('EditProfile')}
            style={{
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginRight: 12,
              borderColor: '#d5d5d5',
              borderRadius: 5,
              backgroundColor: colors.primaryBlue,
            }}>
            <Text style={[styles.h6, {color: colors.white}]}>Mail Us</Text>
          </Pressable>
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            marginTop: 5,
            paddingVertical: 10,
            paddingHorizontal: 20,
            flex:1
          }}>
          <Text style={[styles.h6,{fontWeight:700}]}>Frequently Asked Questions</Text>
          {faq.map((val, index) => {
            const isActive = activeQuestion === index;

            return (
              <View
                key={index}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#CACACA',
                  paddingVertical: 10,
                }}>
                <Pressable
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => setActiveQuestion(isActive ? null : index)}>
                  <Text
                    style={[
                      styles.p,
                      { fontWeight: 600, width: '93%',color:colors.black},
                    ]}>
                    {val.question}
                  </Text>
                  <Icon
                    name={isActive ? 'chevron-up' : 'chevron-down'}
                    type="ionicon"
                    style={{paddingLeft: 5}}
                  />
                </Pressable>

                {isActive && (
                  <Text style={[styles.p, {color: '#999999', paddingTop: 10}]}>
                    {val.answer}
                  </Text>
                )}
              </View>
            );
          })}
        </View>
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
