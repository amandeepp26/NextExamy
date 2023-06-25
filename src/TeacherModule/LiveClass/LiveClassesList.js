import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles from '../../navigation/styles';
import {colors} from '../../styles';
import {Icon} from 'react-native-elements';
import user from './images/user.jpeg';
import user2 from './images/user2.jpg';
import user3 from './images/user3.jpeg';
import user4 from './images/user4.jpeg';
import user5 from './images/user5.jpeg';
import Header from '../../components/Header';

const data = [
  {
    topic: 'Introduction to Biology',
    users: [
      {image: user},
      {image: user2},
      {image: user3},
      {image: user4},
      {image: user5},
    ],
    time: '9:00 AM',
    date: 'March 10',
  },
  {
    topic: 'Chemistry Basics',
    users: [
      {image: user3},
      {image: user5},
      {image: user2},
      {image: user4},
      {image: user},
    ],
    time: '11:00 AM',
    date: 'March 20',
  },
  {
    topic: 'Physics Concepts',
    users: [
      {image: user},
      {image: user2},
      {image: user3},
      {image: user4},
      {image: user5},
    ],
    time: '1:00 PM',
    date: 'March 20',
  },
  {
    topic: 'Physics Concepts',
    users: [
      {image: user},
      {image: user2},
      {image: user3},
      {image: user4},
      {image: user5},
    ],
    time: '1:00 PM',
    date: 'March 20',
  },
  {
    topic: 'Physics Concepts',
    users: [
      {image: user},
      {image: user2},
      {image: user3},
      {image: user4},
      {image: user5},
    ],
    time: '1:00 PM',
    date: 'March 20',
  },
  {
    topic: 'Physics Concepts',
    users: [
      {image: user},
      {image: user2},
      {image: user3},
      {image: user4},
      {image: user5},
    ],
    time: '1:00 PM',
    date: 'March 20',
  },
  // add more objects as needed
];
export default function LiveClassesList({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}

        <Header title={'Live Classes'} navigation={navigation} />

        <ScrollView
          style={{
            backgroundColor: '#fff',
            paddingVertical: 10,
            flex: 1,
          }}>
          {data.map(data => {
            return (
              <Pressable
                style={style.container}
                onPress={() => navigation.navigate('Live')}>
                <Text
                  style={[styles.h6, {paddingVertical: 10, fontWeight: 500}]}>
                  {data.topic}
                </Text>
                <Text style={{fontSize: 12}}>
                  Scheduled on {data.date},{data.time}
                </Text>
                <View style={style.users}>
                  {data.users.map((key, ind) => {
                    const leftPosition = -15 * ind;
                    return (
                      <Image
                        style={{
                          position: 'relative',
                          left: leftPosition,
                          width: 30,
                          height: 30,
                          borderRadius: 100,
                        }}
                        source={key.image}
                      />
                    );
                  })}

                  <View style={style.userCount}>
                    <Text style={{color: '#fff', fontSize: 10}}>+25</Text>
                  </View>
                  <View style={style.joinBtn}>
                    <Text style={styles.p}>Join Now </Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
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
  container: {
    backgroundColor: '#f5f5f5',
    marginHorizontal: 15,
    marginTop: 7,
    padding: 10,
    borderRadius: 10,
    position: 'relative',
  },
  users: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
    position: 'relative',
  },
  joinBtn: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
  userCount: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 100,
    width: 30,
    height: 30,
    position: 'relative',
    left: -70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
