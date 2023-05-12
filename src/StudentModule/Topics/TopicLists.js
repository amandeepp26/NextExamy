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

const VideoType = [
  {
    id: 1,
    type: 'All',
    topics: '10 Topics',
  },
  {
    id: 2,
    type: 'Free',
    topics: '15 Topics',
  },
  {
    id: 3,
    type: 'New',
    topics: '8 Topics',
  },
  {
    id: 4,
    type: 'Completed',
    topics: '18 Topics',
  },
];
const topics = [
  {
    id: 1,
    name: 'Technology',
    subtopics: [
      {id: 1, name: 'Programming'},
      {id: 2, name: 'Web Development'},
    ],
  },
  {
    id: 2,
    name: 'Business',
    subtopics: [
      {id: 1, name: 'Entrepreneurship'},
      {id: 2, name: 'Marketing'},
      {id: 3, name: 'Finance'},
      {id: 4, name: 'Management'},
    ],
  },
  {
    id: 3,
    name: 'Arts',
    subtopics: [
      {id: 1, name: 'Visual Arts'},
      {id: 2, name: 'Performing Arts'},
      {id: 3, name: 'Music'},
      {id: 4, name: 'Literature'},
    ],
  },
  {
    id: 4,
    name: 'Health',
    subtopics: [
      {id: 1, name: 'Fitness'},
      {id: 2, name: 'Nutrition'},
      {id: 3, name: 'Mental Health'},
      {id: 4, name: 'Disease Prevention'},
    ],
  },
  {
    id: 5,
    name: 'Education',
    subtopics: [
      {id: 1, name: 'Teaching Strategies'},
      {id: 2, name: 'Curriculum Development'},
      {id: 3, name: 'Assessment and Evaluation'},
      {id: 4, name: 'Educational Technology'},
    ],
  },
];

const TopicLists = ({navigation, route}) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

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
        <Text style={[styles.h3, {padding: 20}]}>{route?.params?.Topic}</Text>
      </View>
      <ScrollView>
        <View style={{marginTop: 5, backgroundColor: colors.white}}>
          {/* types */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 20,
              marginHorizontal: 10,
            }}>
            {VideoType.map((key, index) => {
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
                  <Text style={styles.h6}>{key.type}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
          {topics?.map((key, index) => {
            return (
              <Pressable style={[style.header]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      backgroundColor: '#d3d3d3',
                      // padding: 7,
                      borderRadius: 50,
                      width: 40,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={[styles.h4, {fontWeight: '700'}]}>
                      {index + 1}
                    </Text>
                  </View>
                  <Text
                    style={[styles.h3, {marginLeft: 15, fontWeight: '700'}]}>
                    {key.name}
                  </Text>
                </View>
                {key?.subtopics.map(item => {
                  return (
                    <Pressable
                    onPress={()=>navigation.navigate('ParticularVideo')}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1,
                        paddingBottom: 10,
                        borderColor: '#f1f1f1',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 15,
                          marginLeft: 5,
                        }}>
                        <View
                          style={{
                            backgroundColor: 'rgba(2, 146, 183, 0.17)',
                            borderRadius: 50,
                            width: 35,
                            height: 35,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Icon
                            name="play"
                            type="ionicon"
                            size={17}
                            color={colors.primaryBlue}
                          />
                        </View>
                        <View>
                          <Text
                            style={[
                              styles.h5,
                              {marginLeft: 15, fontWeight: '600'},
                            ]}>
                            {item.name}
                          </Text>

                          <Text
                            style={[
                              styles.p,
                              {marginLeft: 15, fontWeight: '600', marginTop: 5},
                            ]}>
                            20 min
                          </Text>
                        </View>
                      </View>

                      <Icon name="chevron-right" type="ionicons" />
                    </Pressable>
                  );
                })}
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
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const style = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    borderBottomWidth: 5,
    paddingHorizontal: 10,
    // marginHorizontal: 15,
    marginTop: 10,
    paddingVertical: 15,
    // paddingRight: 10,
    borderColor: '#f5f5f5',
    elevation: 1,
  },
});

//make this component available to the app
export default TopicLists;
