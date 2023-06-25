//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Video from '../../components/Video';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import QuickLinks from './QuickLinks';
import SubjectWiseClass from './SubjectWiseClass';
import Swiper from 'react-native-swiper';
import Button from '../../components/Button';
import CompleteProfilePopup from '../../components/CompleteProfilePopup';
import apiClient from '../../utils/apiClient';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCategory,
  setEmail,
  setName,
  setPhoneNumber,
  setProfilePic,
  setSubcategory,
} from '../auth/signin';
// import Video from 'react-native-video';

// create a component

const Home = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [subjects, setSubjects] = useState(null);
  const authToken = useSelector(state => state.session.authToken);
  const category = useSelector(state => state.signin.category);
  const profile_pic = useSelector(state => state.signin.profile_pic);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    getSubjects();
    getProfile();
  }, []);

  const getSubjects = async () => {
    try {
      const response = await apiClient.post(
        `${apiClient.Urls.subjectWiseClass}`,
        {
          authToken: authToken,
        },
      );
      console.warn('response is', response);
      if (response) {
        setSubjects(response);
      } else {
        setSubjects(null);
      }
    } catch (e) {
      Toast.show({
        text1: e.message || e || 'Something went wrong!',
        type: 'error',
      });
      console.warn('error is-->', e);
    }
  };

  const getProfile = async () => {
    try {
      const response = await apiClient.get(`${apiClient.Urls.getProfile}`, {
        authToken: authToken,
      });
      console.warn(response);
      if (response.status == 'success') {
        dispatch(setName(response.data.name));
        dispatch(setEmail(response.data.email));
        dispatch(setPhoneNumber(response.data.mobile));
        dispatch(setCategory(response.data.category_name));
        dispatch(setSubcategory(response.data.subcategory_name));
        if (response.data.profile != null) {
          dispatch(
            setProfilePic(
              'https://nextexamy.com/images/students/' + response.data.profile,
            ),
          );
        }
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
        <View style={style.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/logoIcon.png')}
              style={{width: 70, height: 70, margin: 5}}
            />
            <Text style={styles.h4}>{category || 'Your Category'}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              onPress={() => navigation.navigate('Search')}
              name="search"
              type="ionicons"
              size={25}
            />
            <Pressable onPress={() => navigation.navigate('Account')}>
              {profile_pic ==null ?
              <Image
              source={require('../../components/images/user.jpeg')}
              style={{
                width: 40,
                height: 40,
                margin: 5,
                marginLeft: 15,
                borderRadius: 50,
              }}
            /> :
              <Image
                source={{uri:profile_pic}}
                style={{
                  width: 40,
                  height: 40,
                  margin: 5,
                  marginLeft: 15,
                  borderRadius: 50,
                }}
              />
}
            </Pressable>
          </View>
        </View>
        <ScrollView style={{marginBottom: 110}}>
          {subjects && (
            <SubjectWiseClass navigation={navigation} subjects={subjects} />
          )}
          <QuickLinks navigation={navigation} />
          <View
            style={{
              padding: 10,
              marginLeft: 10,
              paddingTop: 15,
              backgroundColor: '#fff',
            }}>
            <Text style={[styles.h3, {fontWeight: '700'}]}>
              Suggested Modules
            </Text>
          </View>
          <View style={{height: 320, backgroundColor: colors.white}}>
            <Swiper
              style={style.wrapper}
              showsButtons={false}
              loop={true}
              dot={false}
              autoplay
              activeDotStyle={{width: 25}}
              activeDotColor={colors.primaryBlue}
              paginationStyle={{bottom: 10}}>
              <Video navigation={navigation} />
              <Video navigation={navigation} />
              <Video navigation={navigation} />
            </Swiper>
          </View>
          <View
            style={{
              padding: 10,
              marginLeft: 10,
              marginTop: 5,
              backgroundColor: '#fff',
            }}>
            <Text style={[styles.h3, {fontWeight: '700'}]}>Free Classes</Text>
          </View>
          <View style={{backgroundColor: colors.white, paddingBottom: 30}}>
            <Video navigation={navigation} />
            <Button
              onpress={() => navigation.navigate('FreeVideos')}
              text={'See all free classes'}
              backgroundColor={'#535353'}
            />
          </View>

          {/* <Video source={{uri :"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"}} style={{width:300,height:300}} controls={true} /> */}
        </ScrollView>
        {/* Subscribe button */}
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            width: '100%',
            justifyContent: 'space-between',
            padding: 10,
            alignItems: 'center',
            backgroundColor: colors.white,
            bottom: 60,
          }}>
          <Text style={styles.h6}>Want to achieve your dreams?</Text>
          <Pressable
            onPress={() => navigation.navigate('Subscription')}
            style={{
              backgroundColor: colors.primaryBlue,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
            }}>
            <Text
              style={[
                styles.h6,
                {color: colors.white, textDecorationLine: 'underline'},
              ]}>
              Subscribe Now!
            </Text>
          </Pressable>
        </View>
        {/* Complete profile button */}
        {isVisible && <CompleteProfilePopup navigation={navigation} />}
      </View>
    </SafeAreaView>
  );
};

// define your styles
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 5,
  },
});

//make this component available to the app
export default Home;
