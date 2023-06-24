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
  { name: 'Algebra',questions:25, locked:false },
  { name: 'Biology', questions:15, locked:false },
  { name: 'Literature',questions:20, locked:true },
  { name: 'World History', questions:25, locked:true },
  { name: 'Chemistry', questions:10, locked:true },
  { name: 'Writing',questions:20, locked:true },
  { name: 'Geography', questions:10, locked:true },
  { name: 'Physics',questions:13, locked:true }
]
const SubjectWiseTest = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>

      <Header title={route?.params?.subject} navigation={navigation} />

      <ScrollView style={{flex: 1}}>
       
        <View
          style={{
            borderTopWidth: 2,
            borderColor: '#e5e5e5',
            paddingVertical: 10,
          }}>
          <Text style={[styles.h6, {fontWeight: '700', marginLeft: 15}]}>
            Practice a specific topic in {route?.params?.subject}
          </Text>
        </View>
        <View style={{paddingHorizontal: 10, marginBottom: 20}}>
          {Topics.map((key,index) => {
            return (
              <Pressable
                onPress={() =>
                  {key.locked ?  alert('No'):
                  navigation.navigate('TestInstructions', {Topic: key.name})
                }
                }
                style={[style.header]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text>
                    {index+1}
                  </Text>
                  <View style={{marginLeft: 15}}>
                    <Text style={[styles.h4]}>{key.name}</Text>
                    <Text style={[styles.p]}>{key.questions} questions</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name={ key.locked ? 'lock-outline' : "chevron-right"} type="ionicons" size={22} />
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
    paddingHorizontal:5
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
export default SubjectWiseTest;
