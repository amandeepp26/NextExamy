//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import {colors} from '../../styles';
import styles from '../navigation/styles';

const Links = [
  {
    id: 1,
    category: 'NOTES',
    img: require('./images/notes.png'),
  },
  {
    id: 2,
    category: 'SAVED VIDEOS',
    img: require('./images/saved.png'),
  },
  {
    id: 3,
    category: 'LIVE VIDEOS',
    img: require('./images/live.png'),
  },
  {
    id: 4,
    category: 'SYLLABUS',
    img: require('./images/syllabus.png'),
  },
  {
    id: 5,
    category: 'TAKE A MOCK TEST',
    img: require('./images/test.png'),
  },
  {
    id: 6,
    category: 'ASK A DOUBT',
    img: require('./images/doubt.png'),
  },
];
// create a component
function QuickLinks({navigation}) {
  renderItem = ({item, index}) => {
    return (
      <Pressable
        key={index}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin:5,
          borderRadius: 5,
          backgroundColor: colors.lightGray,
          height: 100,
          width: '32%',
        }}>
        <Image source={item.img} style={{width: 42, height: 50}} />
          <Text style={[styles.p,{color:'#575757',fontSize:12,marginTop:5,fontWeight:'700'}]}>{item.category}</Text>
      </Pressable>
    );
  };
  return (
    <View style={[styles.container,]}>
      <View style={{padding: 10,marginLeft:10, backgroundColor: '#fff'}}>
        <Text style={[styles.h3, {fontWeight: '700'}]}>Quick Links</Text>
      </View>
      <View style={{backgroundColor: colors.white, flex: 1, marginLeft: 10}}>
        <FlatList
          numColumns={3}
          data={Links}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
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
export default QuickLinks;
