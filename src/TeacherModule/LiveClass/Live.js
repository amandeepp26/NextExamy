import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import Video from 'react-native-video';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import user from './images/user.jpeg';
import user2 from './images/user2.jpg';
import user3 from './images/user3.jpeg';
import user4 from './images/user4.jpeg';
import user5 from './images/user5.jpeg';
import Button from '../../components/Button';
const data = [
  {image: user},
  {image: user2},
  {image: user3},
  {image: user4},
  {image: user5},
];
export default function TeacherLive({navigation}) {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={{width: '100%', height: 220}}
        controls={true}
      />

      <Pressable
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: 7,
          left: 10,
          padding: 2,
          backgroundColor: colors.white,
          borderRadius: 50,
        }}>
        <Icon name="chevron-left" size={30} />
      </Pressable>
      <View
        style={{
          backgroundColor: colors.white,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: colors.primaryBlue}}>Mathematics</Text>
          <Text style={[styles.h3, {fontWeight: '600'}]}>Algebra</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.white,
          padding: 15,
          marginTop: 5,
        }}>
        <Text style={styles.p}>About :</Text>
        <Text style={[styles.p, {paddingTop: 10}]}>
          Fluid mechanics, science concerned with the response of fluids to
          forces exerted upon them. It is a branch of classical physics with
          applications of great importance in hydraulic and aeronautical
          engineering, chemical engineering, meteorology, and zoology.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: colors.white,
          padding: 15,
          marginTop: 5,
          flex: 1,
        }}>
        <Text>Learners :</Text>
        <View style={{flexDirection: 'row', paddingTop: 10}}>
          {data.map((key, ind) => {
            const leftPosition = -15 * ind;
            return (
              <Image
                source={key.image}
                style={{
                  position: 'relative',
                  left: leftPosition,
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
            );
          })}
          <View style={style.userCount}>
            <Text style={{color: '#fff', fontSize: 10}}>+25</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 30,
            left: 0,
            right: 0,
            justifyContent: 'center',
          }}>
          <View style={{width: '45%'}}>
            <Button
              text={'Send Reminder'}
              backgroundColor={colors.primaryBlue}
            />
          </View>
          <View style={{width: '45%'}}>
            <Button
              text={'Share Notes'}
              color={true}
              backgroundColor={colors.primaryBlue}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  playIcon: {
    padding: 4,
    borderRadius: 50,
    backgroundColor: '#535353',
    alignItems: 'center',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 50,
    width: '87%',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 40,
    paddingLeft: 10,
    marginLeft: 15,
    backgroundColor: colors.white,
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
