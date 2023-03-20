//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,ScrollView } from 'react-native';
import {colors} from '../../styles';
import styles from '../navigation/styles';
import { Icon } from 'react-native-elements';

const users = [
    {
      id: 1,
      subject: 'Physics',
      name: 'Rishabh Jaiswal',
    },
    {
      id: 2,
      subject: 'Mathematics',
      name: 'Aman Deep',
    },
    {
      id: 3,
      subject: 'Chemistry',
      name: 'Kartik Sharma',
    },
    {
      id: 4,
      subject: 'Biology',
      name: 'Arun Tyagi',
    },
    {
        id: 5,
        subject: 'Physics',
        name: 'Rishabh Jaiswal',
      },
      {
        id: 6,
        subject: 'Mathematics',
        name: 'Aman Deep',
      },
      {
        id: 7,
        subject: 'Chemistry',
        name: 'Kartik Sharma',
      },
      {
        id: 8,
        subject: 'Biology',
        name: 'Arun Tyagi',
      },
  ];
// create a component
function Chat () {
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:colors.white}}>
            <Text style={[styles.h3,{padding:20}]}>Chats</Text>
            </View>
            <ScrollView style={{backgroundColor:colors.white,marginTop:5}}>
            {users.map(key=>{
                return(

                    <View style={style.header}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                source={require('../home/images/user.png')}
                style={{
                  width: 40,
                  height: 40,
                  margin: 5,
                  marginLeft: 15,
                  borderRadius: 50,
                }}
              />
                      <View>
                      <Text style={[styles.h4,{marginLeft:10}]}>
                        {key.name}
                      </Text>
                      
                      <Text style={[styles.p,{marginLeft:10}]}>
                        {key.subject}
                      </Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icon name="chevron-right" type="ionicons" size={25} />
                    </View>
                  </View>
                )
            })}
            </ScrollView>
        </View>
    );
};

// define your styles
const style= StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    // paddingVertical: 5,
    marginTop:20,
  },
});

//make this component available to the app
export default Chat;
