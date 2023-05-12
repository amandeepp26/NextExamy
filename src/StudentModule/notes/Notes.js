//import liraries
import React, {Component} from 'react';
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
import { color } from 'react-native-elements/dist/helpers';
import Video from '../../components/Video';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
// create a component
const NotesArray = [
    {
      id: 1,
      category: 'Static GK',
      description: 'NDA,CDS,FCAT',
      img: require('./images/notes6.png'),
    },
    {
      id: 2,
      category: 'Economics',
      description: 'NDA,CDS,FCAT',
      img: require('./images/notes1.png'),
    },
    {
      id: 3,
      category: 'General Science',
      description: 'NDA,CDS,FCAT',
      img: require('./images/notes2.png'),
    },
    {
      id: 4,
      category: 'Geography',
      description: 'NDA,CDS,FCAT',
      img: require('./images/notes3.png'),
    },
    {
      id: 5,
      category: 'Science & Technology',
      description: 'NDA,CDS,FCAT',
      img: require('./images/notes4.png'),
    },
    {
      id: 6,
      category: 'History',
      description: 'NDA,CDS,FCAT',
      img: require('./images/notes5.png'),
    },
  ];
const Notes = ({navigation}) => {


    renderItem = ({item, index}) => {
        return (
          <Pressable
            key={index}
            
            style={{
            //   flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'center',
              margin: 8,
              borderWidth: 0,
              borderColor:colors.gray,
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
            <View style={{marginTop:5,alignItems:'center'}}>
              <Text style={[styles.h5,{fontSize:15}]}>{item.category}</Text>
              <Text style={[styles.p, {fontSize: 12}]} numberOfLines={2}>
                {item.description}
              </Text>
            </View>
          </Pressable>
        );
      };
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:colors.white}}>
      <View
        style={{
          backgroundColor: colors.white,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth:5,
          borderColor:'#e5e5e5'
        }}>
        <Icon
          name="chevron-left"
          type="ionicons"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={[styles.h3, {padding: 20}]}>Notes</Text>
      </View>
      <View style={{marginTop: 5, backgroundColor: colors.white, flex: 1}}>
        <FlatList
          numColumns={2}
          data={NotesArray}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
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
});

//make this component available to the app
export default Notes;
