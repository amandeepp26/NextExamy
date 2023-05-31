//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {Icon} from 'react-native-elements';
import apiClient from '../../utils/apiClient';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {useSelector} from 'react-redux';
import SkeletonComponent from './Loader';

const testTopics = [
  {
    id: 1,
    name: 'Kinematics',
    questions: 50,
    time: '30 minutes',
  },
  {
    id: 2,
    name: 'Solid & Fuel Mechanics',
    questions: 50,
    time: '30 minutes',
  },
  {
    id: 3,
    name: 'Waves',
    questions: 50,
    time: '30 minutes',
  },
  {
    id: 4,
    name: 'Electricity & Magnetism',
    questions: 50,
    time: '30 minutes',
  },
  {
    id: 5,
    name: 'Modern Physics',
    questions: 50,
    time: '30 minutes',
  },
  {
    id: 6,
    name: 'Thermal Physics',
    questions: 50,
    time: '30 minutes',
  },
  {
    id: 7,
    name: 'Kinematics',
    questions: 50,
    time: '30 minutes',
  },
  {
    id: 8,
    name: 'Mechanism',
    questions: 50,
    time: '30 minutes',
  },
];
// create a component
function Tests({navigation}) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [subjects, setSubjects] = useState(null);
  const [topics, setTopics] = useState(null);
  const [isloading,setIsLoading] = useState(true);


  const authToken = useSelector(state => state.session.authToken);

  useEffect(() => {
    getSubjects();
  }, []);

  const getSubjects = async () => {
    try {
      const response = await apiClient.post(`${apiClient.Urls.subjects}`, {
        authToken: authToken,
      });
      console.warn(response);
      if (response.status) {
        setSubjects(response.data);
        getTopics(response.data[0].id);
      } else {
        setSubjects(null);
      }
    } catch (e) {
      Toast.show({
        text1: e.message || e || 'Something went wrong!',
        type: 'error',
      });
    }
  };

  const getTopics = async (e) => {
    try {
      const response = await apiClient.post(`${apiClient.Urls.topicList}`, {
        authToken: authToken,
        subject_id:e
      });
      console.warn(response);
      setTopics(response);
      setIsLoading(false)
    } catch (e) {
      Toast.show({
        text1: e.message || e || 'Something went wrong!',
        type: 'error',
      });
    }
  };

  if(isloading){
    return(
      <SkeletonComponent />
    )
  }

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: colors.white}}>
        <Text style={[styles.h3, {padding: 20}]}>Tests</Text>
      </View>
      <ScrollView
        style={{
          backgroundColor: colors.white,
          marginTop: 5,
          marginBottom: 50,
        }}>
        <View
          style={{
            marginTop: 10,
            backgroundColor: colors.white,
            paddingBottom: 20,
          }}>
          <View style={{paddingLeft: 12}}>
            <Text
              style={[
                styles.h3,
                {fontWeight: '700', color: colors.primaryBlue, marginTop: 10},
              ]}>
              Mock tests
            </Text>
            <Text style={[styles.h4, {fontWeight: '700'}]}>
              to evaluate your preparation
            </Text>
            {/* subjects */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 20,
              }}>
              {subjects?.map((subject, index) => {
                return (
                  <Pressable
                    key={index}
                    onPress={() => {
                      if (selectedCardIndex != index) {
                        setSelectedCardIndex(index);
                        getTopics(subject.id)
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
                    <Text style={styles.h6}>{subject.name}</Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
          {topics?.map(key => {
            return (
              <Pressable
                onPress={() => navigation.navigate('TestInstructions',{topic:key.topic})}
                style={[style.header]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{width:'90%'}}>
                    <Text style={[styles.p, {color: colors.primaryBlue}]}>
                      50 Questions
                    </Text>
                    <Text style={[styles.h5, {marginTop: 2,}]}>{key.topic}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 2,
                      }}>
                      <Icon name="time-outline" type="ionicon" size={15} />
                      <Text style={[styles.p, {marginLeft: 5}]}>
                        30 minutes
                        {/* {key.time} */}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ alignItems: 'center'}}>
                  <Image
                    style={{height: 40, width: 40}}
                    source={require('./images/notebook.png')}
                  />
                </View>
              </Pressable>
            );
          })}
        </View>
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
    borderWidth: 1,
    marginHorizontal: 15,
    // paddingVertical: 5,
    marginTop: 15,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#f5f5f5',
    elevation: 1,
  },
  circleView: {
    width: 35,
    height: 35,
    backgroundColor: 'rgba(2, 146, 183, 0.5)',
    opacity: 0.3,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 5,
    backgroundColor: colors.lightGray,
    height: 100,
    width: '31%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 1,
  },
});

//make this component available to the app
export default Tests;
