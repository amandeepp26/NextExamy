//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {color} from 'react-native-elements/dist/helpers';
import Video from '../../components/Video';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
// create a component

const subjects = [
  {
    id: 1,
    subject: 'Physics',
    topics: '10 Topics',
  },
  {
    id: 2,
    subject: 'Mathematics',
    topics: '15 Topics',
  },
  {
    id: 3,
    subject: 'Chemistry',
    topics: '8 Topics',
  },
  {
    id: 4,
    subject: 'Biology',
    topics: '18 Topics',
  },
];
const Topics = [
  {
    id: 1,
    name: 'Kinematics',
    questions: 10,
    color:'#0C2C39'
  },
  {
    id: 2,
    name: 'Solid & Fuel Mechanics',
    questions: 4,
    color:'#343148'

  },
  {
    id: 3,
    name: 'Waves',
    questions: 7,
    color:'#3B0D11'
  },
  {
    id: 4,
    name: 'Electricity & Magnetism',
    questions: 12,
    color:'#5DA493'
  },
  {
    id: 5,
    name: 'Thermal Physics',
    questions: 3,
    color:'#DB84F3'
  },
  {
    id: 6,
    name: 'Modern Physics',
    questions: 14,
    color:'#A2D6E5'
  },
  {
    id: 7,
    name: 'Mechanism',
    questions: 5,
    color:'#E3F7B3'
  },
  {
    id: 8,
    name: 'Kinematics',
    questions: 9,
    color:'#B9E0B5'
  },
];

const Syllabus = ({navigation}) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  renderItem = ({item, index}) => {
    return (
      <Pressable
        key={index}
        style={{
          //   flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 8,
          borderWidth: 0,
          borderColor: colors.gray,
          borderRadius: 10,
          backgroundColor: colors.lightGray,
          elevation: 5,
          padding: 10,
          height: 130,
          width: '46%',
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.7,
          shadowRadius: 1,
        }}>
        <Image source={item.img} style={{width: '50%', height: '60%'}} />
        <View style={{marginTop: 5, alignItems: 'center'}}>
          <Text style={[styles.h5, {fontSize: 15}]}>{item.category}</Text>
          <Text style={[styles.p, {fontSize: 12}]} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View
        style={{
          backgroundColor: colors.white,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 5,
          borderColor: '#e5e5e5',
        }}>
        <Icon
          name="chevron-left"
          type="ionicons"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={[styles.h3, {padding: 20}]}>Syllabus</Text>
      </View>

      <View style={{marginTop: 5, backgroundColor: colors.white}}>
        {/* subjects */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 20,
            marginHorizontal: 10,
          }}>
          {subjects.map((subject, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  if (selectedCardIndex != index) {
                    setSelectedCardIndex(index);
                  } else {
                    setSelectedCardIndex(null);
                  }
                }}
                style={{
                  borderWidth: selectedCardIndex === index ? 2 : 1,
                  borderColor:
                    selectedCardIndex === index
                      ? colors.primaryBlue
                      : '#d3d3d3',
                  paddingVertical: 6,
                  paddingHorizontal: 20,
                  borderRadius: 25,
                  alignItems: 'center',
                  marginRight: 8,
                }}>
                <Text style={styles.h6}>{subject.subject}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
        <ScrollView >
          <View >
        {Topics.map(key => {
          return (
            <Pressable
              onPress={() => navigation.navigate('SubTopics',{topic:key.name})}
              style={[style.header]}>
                
              <View style={{flexDirection: 'row', alignItems: 'center',borderLeftWidth:15,paddingLeft:10,borderTopLeftRadius:10,borderBottomLeftRadius:10,borderColor:key.color}}>
                <View style={{width:'92%',paddingVertical:12}}>
                <View>
                  <Text style={[styles.h5, {marginTop: 2}]}>{key.name}</Text>

                  <Text style={[styles.p, {fontSize: 13}]}>
                    {key.questions} courses
                  </Text>
                </View>
              </View>
              <Icon name="chevron-right" type="ionicons" />
              </View>
            </Pressable>
          );
        })}
        </View>
        </ScrollView>
        {/* <FlatList
          numColumns={2}
          data={NotesArray}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        /> */}
      </View>
    </SafeAreaView>
  );
};

// define your styles
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
    // paddingVertical: 15,
    paddingRight: 10,
    borderColor: '#f5f5f5',
    elevation: 1,
  },
});

//make this component available to the app
export default Syllabus;
