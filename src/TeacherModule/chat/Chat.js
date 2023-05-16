//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {Icon} from 'react-native-elements';
import {Pressable} from 'react-native';
import SearchBar from '../../components/SearchBar';
import user from '../home/images/user.jpeg';
import user2 from '../home/images/user2.jpg';
import user3 from '../home/images/user3.jpeg';
import user4 from '../home/images/user4.jpeg';
import user5 from '../home/images/user5.jpeg';

const users = [
  {
    id: 1,
    subject: 'Physics',
    name: 'Rishabh Jaiswal',
    img: user
  },
  {
    id: 2,
    subject: 'Mathematics',
    name: 'Aman Deep',
    img: user2
  },
  {
    id: 3,
    subject: 'Chemistry',
    name: 'Kartik Sharma',
    img: user3
  },
  {
    id: 4,
    subject: 'Biology',
    name: 'Arun Tyagi',
    img: user4
  },
  {
    id: 5,
    subject: 'Physics',
    name: 'Priyanshi Rana',
    img: user5
  },
  {
    id: 6,
    subject: 'Mathematics',
    name: 'Aman Deep',
    img : user2
  },
  {
    id: 7,
    subject: 'Chemistry',
    name: 'Kartik Sharma',
    img: user4
  },
  {
    id: 8,
    subject: 'Biology',
    name: 'Anjali',
    img: user5
  },
];
// create a component
function TeacherChat({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: colors.white}}>
        <Text style={[styles.h3, {padding: 20}]}>Chats</Text>
      </View>
      <ScrollView
        style={{backgroundColor: colors.white, marginTop: 5, marginBottom: 60}}>
        <SearchBar />
        {users.map(key => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate('ChatMessage', {user: key.name});
              }}
              style={style.header}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={key.img}
                  style={{
                    width: 40,
                    height: 40,
                    margin: 5,
                    marginLeft: 15,
                    borderRadius: 50,
                  }}
                />
                <View>
                  <Text style={[styles.h4, {marginLeft: 10}]}>{key.name}</Text>

                  <Text style={[styles.p, {marginLeft: 10}]}>
                    {key.subject}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="chevron-right" type="ionicons" size={25} />
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

// define your styles
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    // paddingVertical: 5,
    marginTop: 15,
  },
});

//make this component available to the app
export default TeacherChat;
