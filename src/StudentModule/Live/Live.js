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
export default function Live({navigation}) {
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
          <Text style={[styles.p, {marginTop: 5}]}>By: Rishabh Jaiswal</Text>
          <Text style={[styles.p, {marginTop: 5, fontSize: 10}]}>
            Started at 11:00 AM
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.white,
          padding: 15,
          marginTop: 5,
          flex: 1,
        }}>
        <Text style={[styles.h4, {fontWeight: 700}]}>Chat</Text>
        <View>
          <View style={{flexDirection: 'row', paddingVertical: 10}}>
            <Image
              source={require('../../components/images/user.jpeg')}
              style={{width: 25, height: 25, borderRadius: 50}}
            />
            <View>
              <Text style={{fontSize: 10, paddingLeft: 25}}>Aman Deep</Text>
              <View
                style={{
                  backgroundColor: '#F2F2F2',
                  width: '100%',
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 20,
                  marginHorizontal: 10,
                  marginTop: 5,
                }}>
                <Text style={{fontSize: 11, color: colors.black}}>
                  Lorem ipsum Lorem ipsum
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', paddingVertical: 10}}>
            <Image
              source={require('../../components/images/user.jpeg')}
              style={{width: 25, height: 25, borderRadius: 50}}
            />
            <View>
              <Text style={{fontSize: 10, paddingLeft: 25}}>Aman Deep</Text>
              <View
                style={{
                  backgroundColor: '#F2F2F2',
                  width: '100%',
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 20,
                  marginHorizontal: 10,
                  marginTop: 5,
                }}>
                <Text style={{fontSize: 11, color: colors.black}}>
                  Lorem ipsum Lorem ipsum
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', paddingVertical: 10}}>
            <Image
              source={require('../../components/images/user.jpeg')}
              style={{width: 25, height: 25, borderRadius: 50}}
            />
            <View>
              <Text style={{fontSize: 10, paddingLeft: 25}}>Aman Deep</Text>
              <View
                style={{
                  backgroundColor: '#F2F2F2',
                  width: '100%',
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 20,
                  marginHorizontal: 10,
                  marginTop: 5,
                }}>
                <Text style={{fontSize: 11, color: colors.black}}>
                  Lorem ipsum Lorem ipsum
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', paddingVertical: 10}}>
            <Image
              source={require('../../components/images/user.jpeg')}
              style={{width: 25, height: 25, borderRadius: 50}}
            />
            <View>
              <Text style={{fontSize: 10, paddingLeft: 25}}>Aman Deep</Text>
              <View
                style={{
                  backgroundColor: '#F2F2F2',
                  width: '100%',
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 20,
                  marginHorizontal: 10,
                  marginTop: 5,
                }}>
                <Text style={{fontSize: 11, color: colors.black}}>
                  Lorem ipsum Lorem ipsum
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom:20,
            backgroundColor:colors.white
          }}>
          <View>
            <Image
              source={require('../../components/images/user.jpeg')}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
          </View>

          <Pressable style={style.searchBar}>
            <TextInput placeholder="Type a message..." />
          </Pressable>
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
    marginLeft:15,
    backgroundColor:colors.white
  },
});
