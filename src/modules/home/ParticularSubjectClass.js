//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Video from '../../components/Video';
import {colors} from '../../styles';
import styles from '../navigation/styles';
import Button from '../../components/Button';
import {Pressable} from 'react-native';
// create a component
const Topics = [
  {
    id: 1,
    name: 'Mechanics',
    description: 'The study of motion and forces on objects.',
  },
  {
    id: 2,
    name: 'Electricity and Magnetism',
    description:
      'The study of electric and magnetic fields and their effects on objects.',
  },
  {
    id: 3,
    name: 'Thermodynamics',
    description:
      'The study of heat and temperature and their relationship to energy and work.',
  },
  {
    id: 4,
    name: 'Waves and Optics',
    description: 'The study of wave phenomena and the behavior of light.',
  },
  {
    id: 5,
    name: 'Modern Physics',
    description:
      'The study of the fundamental nature of matter and energy, including relativity and quantum mechanics.',
  },
  {
    id: 6,
    name: 'Atomic and Nuclear Physics',
    description:
      'The study of the properties and behavior of atoms and nuclei.',
  },
  {
    id: 7,
    name: 'Quantum Mechanics',
    description:
      'The study of the behavior of matter and energy at the atomic and subatomic level.',
  },
  {
    id: 8,
    name: 'Relativity',
    description:
      "The study of the relationships between space, time, and gravity, as described by Einstein's theory of relativity.",
  },
];
const ParticularSubjectClass = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View
        style={{
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
        <Text style={[styles.h3, {padding: 20}]}>{route?.params?.subject}</Text>
      </View>
      <ScrollView style={{flex: 1}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
          }}>
          <View style={{width: '40%'}}>
            <Video navigation={navigation} />
          </View>
          <View style={{width: '40%'}}>
            <Video navigation={navigation} />
          </View>
          <View style={{width: '40%'}}>
            <Video navigation={navigation} />
          </View>
          <View style={{width: '40%'}}>
            <Video navigation={navigation} />
          </View>
        </ScrollView>
        <View
          style={{
            borderTopWidth: 2,
            borderColor: '#e5e5e5',
            // marginTop: -30,
            paddingVertical: 10,
          }}>
          <Text style={[styles.h4, {fontWeight: '700', marginLeft: 15}]}>
            Best in Quantative Aptitude
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
          }}>
          <View style={{width: '40%'}}>
            <Video navigation={navigation} />
          </View>
          <View style={{width: '40%'}}>
            <Video navigation={navigation} />
          </View>
          <View style={{width: '40%'}}>
            <Video navigation={navigation} />
          </View>
          <View style={{width: '40%'}}>
            <Video navigation={navigation} />
          </View>
        </ScrollView>
        <View
          style={{
            borderTopWidth: 2,
            borderColor: '#e5e5e5',
            paddingVertical: 10,
          }}>
          <Text style={[styles.h4, {fontWeight: '700', marginLeft: 15}]}>
            Topics in {route?.params?.subject}
          </Text>
        </View>
        <View style={{paddingHorizontal: 10, marginBottom: 20}}>
          {Topics.map(key => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate('TopicLists', {Topic: key.name})
                }
                style={[style.header]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={style.circleView}>
                    <Text
                      style={{
                        opacity: 1,
                        color: colors.primaryBlue,
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      {key.name[0]}
                    </Text>
                  </View>
                  <View style={{marginLeft: 15}}>
                    <Text style={[styles.h4]}>{key.name}</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="chevron-right" type="ionicons" size={25} />
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    // paddingVertical: 5,
    marginTop: 20,
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
});

//make this component available to the app
export default ParticularSubjectClass;
