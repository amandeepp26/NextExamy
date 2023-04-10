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
import styles from '../navigation/styles';
// create a component

const Topics = [
  {
    id: 1,
    name: 'Introduction',
    questions: 50,
    color: '#0C2C39',
  },
  {
    id: 2,
    name: 'Discription',
    questions: 50,
    color: '#343148',
  },
  {
    id: 3,
    name: 'Kinematics',
    questions: 50,
    color: '#3B0D11',
  },
  {
    id: 4,
    name: 'Kinematics',
    questions: 50,
    color: '#5DA493',
  },
  {
    id: 5,
    name: 'Kinematics',
    questions: 50,
    color: '#DB84F3',
  },
  {
    id: 6,
    name: 'Kinematics',
    questions: 50,
    color: '#A2D6E5',
  },
  {
    id: 7,
    name: 'Kinematics',
    questions: 50,
    color: '#E3F7B3',
  },
  {
    id: 8,
    name: 'Kinematics',
    questions: 50,
    color: '#B9E0B5',
  },
];

const SubTopics = ({navigation, route}) => {
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
        <Text style={[styles.h3, {padding: 20}]}>{route?.params?.topic}</Text>
      </View>

      <View style={{marginTop: 5, backgroundColor: colors.white}}>
        {/* subjects */}
        {Topics.map(key => {
          return (
            <Pressable
              onPress={() => navigation.navigate('MockTest')}
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
                <View>
                  <Text style={[styles.h4, {marginLeft: 10}]}>{key.name}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="chevron-right" type="ionicons" size={25} />
              </View>
            </Pressable>
          );
        })}
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
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderColor: '#f5f5f5',
    elevation: 1,
  },
  circleView: {
    width: 35,
    height: 35,
    backgroundColor: 'rgba(2, 146, 183, 0.5)',
    opacity: 0.4,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default SubTopics;
