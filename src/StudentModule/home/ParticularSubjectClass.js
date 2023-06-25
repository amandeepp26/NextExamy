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
import styles from '../../navigation/styles';
import Button from '../../components/Button';
import {Pressable} from 'react-native';
import Header from '../../components/Header';
// create a component
// const Topics = [
//   {
//     id: 1,
//     name: 'Mechanics',
//     description: 'The study of motion and forces on objects.',
//     color:'#EE7877'
//   },
//   {
//     id: 2,
//     name: 'Electricity and Magnetism',
//     color:'#00BF93',
//     description:
//       'The study of electric and magnetic fields and their effects on objects.',
//   },
//   {
//     id: 3,
//     name: 'Thermodynamics',
//     color:'#EA55D7',
//     description:
//       'The study of heat and temperature and their relationship to energy and work.',
//   },
//   {
//     id: 4,
//     name: 'Waves and Optics',
//     color:'#BF40BF',
//     description: 'The study of wave phenomena and the behavior of light.',
//   },
//   {
//     id: 5,
//     name: 'Modern Physics',
//     color:'#326bf3',
//     description:
//       'The study of the fundamental nature of matter and energy, including relativity and quantum mechanics.',
//   },
//   {
//     id: 6,
//     name: 'Atomic and Nuclear Physics',
//     color:'#FF3300',
//     description:
//       'The study of the properties and behavior of atoms and nuclei.',
//   },
//   {
//     id: 7,
//     name: 'Quantum Mechanics',
//     color:'#FF7F50',
//     description:
//       'The study of the behavior of matter and energy at the atomic and subatomic level.',
//   },
//   {
//     id: 8,
//     name: 'Relativity',
//     color:'#FF69B4',
//     description:
//       "The study of the relationships between space, time, and gravity, as described by Einstein's theory of relativity.",
//   },
// ];
const Topics =[
  { name: 'Algebra', color: '#9b59b6' },
  { name: 'Biology', color: '#27ae60' },
  { name: 'Literature', color: '#34495e' },
  { name: 'World History', color: '#e67e22' },
  { name: 'Chemistry', color: '#16a085' },
  { name: 'Writing', color: '#e74c3c' },
  { name: 'Geography', color: '#1abc9c' },
  { name: 'Physics', color: '#f39c12' }
]
const ParticularSubjectClass = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Header title={route?.params?.subject} navigation={navigation} />
      <ScrollView style={{flex: 1}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
            <Video navigation={navigation} horizontal={true} />
            <Video navigation={navigation} horizontal={true} />
            <Video navigation={navigation} horizontal={true} />
            <Video navigation={navigation} horizontal={true} />
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
          >
            <Video navigation={navigation} horizontal={true} />
            <Video navigation={navigation} horizontal={true}/>
            <Video navigation={navigation} horizontal={true} />
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
                  <View style={[style.circleView,{backgroundColor:`${key.color}40`}]}>
                  <Icon name='book-outline' type='ionicon' color={key.color} size={20} />
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
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default ParticularSubjectClass;
