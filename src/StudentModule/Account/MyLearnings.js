import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../navigation/styles';
import {colors} from '../../styles';
import {Icon} from 'react-native-elements';
import {Image} from 'react-native-ui-lib';
import LiveClassesVideo from '../../components/LiveClassesVideo';
import MockTestCard from '../../components/MockTestCard';
import apiClient from '../../utils/apiClient';
import {useSelector} from 'react-redux';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import Header from '../../components/Header';
const options = [
  {
    id: 1,
    type: 'Courses',
  },
  {
    id: 2,
    type: 'Mock Test',
  },
  {
    id: 3,
    type: 'Assessment',
  },
];
const subjects = [
  {
    id: 1,
    subject: 'Physics',
    image: require('./images/physics.png'),
  },
  {
    id: 2,
    subject: 'Mathematics',
    image: require('./images/maths.png'),
  },
  {
    id: 3,
    subject: 'Chemistry',
    image: require('./images/chemistry.png'),
  },
];
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
export default function MyLearnings({navigation}) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [selectedOptions, setselectedOptions] = useState('Courses');
  const [mockTestData, setMockTestData] = useState(null);

  const authToken = useSelector(state => state.session.authToken);

  const getRandomColor = () => {
    const colors = [
      '234, 87, 85',
      '0, 191, 147',
      '5, 126, 0',
      '255, 68, 0',
      '234, 87, 85',
      '0, 191, 147',
      '5, 126, 0',
      '255, 68, 0',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    getMockTestsList();
  }, []);

  // Function for the submitted mock test lists
  const getMockTestsList = async () => {
    try {
      const response = await apiClient.post(
        `${apiClient.Urls.submittedMockTests}`,
        {
          authToken: authToken,
        },
      );
      console.warn(response);
      if (response) {
        setMockTestData(response.data);
      } else {
      }
    } catch (e) {
      Toast.show({
        text1: e.message || e || 'Something went wrong!',
        type: 'error',
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}
        <Header title={'My Learnings'} navigation={navigation} />
        <View
          style={{
            backgroundColor: colors.white,
            marginTop: 5,
            alignItems: 'center',
          }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 20,
            }}>
            {options.map((type, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    setselectedOptions(type.type);
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
                  <Text style={styles.h6}>{type.type}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
        {selectedOptions === 'Courses' && (
          <View
            style={{
              backgroundColor: colors.white,
              height: 150,
              marginTop: 5,
              flexDirection: 'row',
            }}>
            {subjects.map((subject, index) => {
              return (
                <Pressable
                  onPress={() =>
                    navigation.navigate('ParticularSubjectClass', {
                      subject: subject.subject,
                    })
                  }
                  style={{
                    width: '33.3%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      margin: 8,
                      // marginHorizontal: 10,
                      borderRadius: 10,
                      backgroundColor: colors.white,
                      elevation: 5,
                      paddingHorizontal: 30,
                      paddingVertical: 12,
                      shadowColor: '#000',
                      shadowOffset: {width: 1, height: 1},
                      shadowOpacity: 0.7,
                      shadowRadius: 1,
                    }}>
                    <Image
                      source={subject.image}
                      style={{width: 50, height: 50}}
                    />
                  </View>

                  <Text>{subject.subject}</Text>
                </Pressable>
              );
            })}
          </View>
        )}
        {selectedOptions === 'Courses' && (
          <View
            style={{
              backgroundColor: colors.white,
              marginTop: 5,
              flex: 1,
              paddingHorizontal: 15,
            }}>
            <Text style={[styles.h5, {paddingTop: 10, fontWeight: 600}]}>
              Live Classes
            </Text>
            <ScrollView>
              <LiveClassesVideo />
              <LiveClassesVideo />
              <LiveClassesVideo />
              <LiveClassesVideo />
              <LiveClassesVideo />
              <LiveClassesVideo />
            </ScrollView>
          </View>
        )}
        {selectedOptions === 'Mock Test' && (
          <View style={{backgroundColor: colors.white, marginTop: 5, flex: 1}}>
            {/* <Text style={[styles.h5, {padding: 15, fontWeight: 700}]}>
              Submissions
            </Text> */}
            <ScrollView>
              {mockTestData?.length > 0 ? (
                <>
                  {mockTestData?.map(key => {
                    return (
                      <MockTestCard
                        data={key}
                        bgColor={getRandomColor()}
                        navigation={navigation}
                      />
                    );
                  })}
                </>
              ) : (
                <Text style={{textAlign: 'center', alignItems: 'center'}}>
                  No Data
                </Text>
              )}
            </ScrollView>
          </View>
        )}
        {selectedOptions === 'Assessment' && (
          <View style={{backgroundColor: colors.white, marginTop: 5, flex: 1}}>
            <Text style={[styles.h5, {padding: 15, fontWeight: 700}]}>
              Submissions
            </Text>
            <ScrollView>
              {testTopics?.length > 0 ? (
                <>
                  {testTopics.map(key => {
                    return (
                      <MockTestCard
                        topic={key.name}
                        subject={'Physics'}
                        question={key.questions}
                        bgColor={getRandomColor()}
                        navigation={navigation}
                      />
                    );
                  })}
                </>
              ) : (
                <Text style={{textAlign: 'center'}}>No data</Text>
              )}
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 20,
  },
});
