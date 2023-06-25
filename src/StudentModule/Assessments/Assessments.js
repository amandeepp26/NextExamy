import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {Icon} from 'react-native-elements';
import Header from '../../components/Header';

const subjects = [
  {
    subject: 'Mathematics',
    img: require('./images/notes5.png'),
    total_topics: 20,
  },
  {subject: 'Science', img: require('./images/notes2.png'), total_topics: 30},
  {subject: 'History', img: require('./images/notes3.png'), total_topics: 25},
  {
    subject: 'Computer Science',
    img: require('./images/notes4.png'),
    total_topics: 35,
  },
];

function Assessments({navigation}) {
  renderItem = ({item, index}) => {
    return (
      <Pressable
        key={index}
        onPress={() =>
          navigation.navigate('SubjectWiseTest', {subject: item.subject})
        }
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
        <Image
          source={item.img}
          style={{width: '50%', height: '60%', marginTop: 10}}
        />
        <View style={{marginTop: 5, alignItems: 'center'}}>
          <Text style={[styles.h5, {fontSize: 14}]}>{item.subject}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Icon name="document-outline" type="ionicon" size={15} />
            <Text
              style={[styles.p, {fontSize: 12, marginLeft: 5}]}
              numberOfLines={1}>
              {item.total_topics} Topics
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <Header title={'Test'} navigation={navigation} />

      <View style={{marginTop: 5, backgroundColor: colors.white, flex: 1}}>
        <View style={{paddingLeft: 15}}>
          <Text
            style={[
              styles.h3,
              {fontWeight: '700', color: colors.primaryBlue, marginTop: 10},
            ]}>
            Assessments
          </Text>
          <Text style={[styles.h4, {fontWeight: '700'}]}>
            to evaluate your preparation
          </Text>
        </View>
        <FlatList
          numColumns={2}
          data={subjects}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

export default Assessments;
