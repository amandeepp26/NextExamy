//import liraries
import React, {Component, useEffect, useState} from 'react';
import {Image, Modal, Pressable, SafeAreaView, ScrollView} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {Icon} from 'react-native-elements';
import RNSTextInput from '../../components/RNSTextInput';
import Button from '../../components/Button';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import * as ImagePicker from 'react-native-image-picker';
import {Toast} from 'react-native-toast-message';
import {PermissionsAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setEmail, setName, setPhoneNumber, setProfilePic} from '../auth/signin';
import apiClient from '../../utils/apiClient';
import Header from '../../components/Header';

// create a component
const EditProfile = ({navigation})=> {
  const [dob, set_dob] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [userId,setUserId] = useState(null);

  const authToken = useSelector(state => state.session.authToken);
  const name = useSelector(state => state.signin.name);
  const phone_number = useSelector(state => state.signin.phone_number);
  const email = useSelector(state => state.signin.email);
  const profile_pic = useSelector(state=>state.signin.profile_pic);
  const dispatch = useDispatch();

  useEffect(() => {
    getProfile();
  }, []);

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
        set_dob(response.data.date_of_birth);
        setUserId(response.data.id);
        if (response.data.profile != null) {
          dispatch(
            setProfilePic(
              'https://nextexamy.com/images/students/' + response.data.profile,
            ),
          );
        }
        else{
          dispatch(setProfilePic(null));
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

  const updateProfile = async () => {
    try {
      const response = await apiClient.post(`${apiClient.Urls.updateProfile}`, {
        authToken: authToken,
        name:name,
        email:email,
        date_of_birth:dob,
        user_id:userId,
        profile: profile_pic
      });
      console.warn("update profile response------->>>>",response);
      if (response.status == 'success') {
        navigation.goBack();
        Toast.show({
          text1: response.message,
          type: 'success',
        });
      } else {
      }
    } catch (e) {
      Toast.show({
        text1: e.message || e || 'Something went wrong!',
        type: 'error',
      });
      console.log("error---->",e)
    }
  };

  const handlePicker = date => {
    if (dob == '') {
      set_dob(dob);
    }
    setIsVisible(false);
    set_dob(moment(date).format('DD-MMM-yyyy'));
  };

  //function to launch gallery
  const gallery = () => {
    let options = {
      title: 'Select Image',
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality: 0.5,
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
        // alert('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Toast.show({
          text1: 'Image size should be less than 3mb!',
          type: 'error',
        });
        setPopupVisible(false);
        // alert('ImagePicker Error: ' + response.error);
      } else {
        let source = response.assets[0];
        dispatch(setProfilePic(source.uri));
        // console.warn(source);
        setPopupVisible(false);
      }
    });
  };

  const camera = async () => {
    const cameraPermission = PermissionsAndroid.PERMISSIONS.CAMERA;

    try {
      const granted = await PermissionsAndroid.request(cameraPermission);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission granted, proceed with launching the camera
        let options = {
          title: 'Select Image',
          customButtons: [],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
          quality: 0.5,
        };

        ImagePicker.launchCamera(options, response => {
          console.warn('Response = ',response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
            // alert('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            Toast.show({
              text1: response.error,
              type: 'error',
            });
            // alert('ImagePicker Error: ' + response.error);
          } else {
            // const fileSize = response.data.length * (3 / 4) - 2;
            // console.log('filesize', fileSize);
            let source = response.assets[0];
            dispatch(setProfilePic(source.uri));
            setPopupVisible(false);
          }
        });
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.log('Error requesting camera permission: ', error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}
 
        <Header title={'Profile'} navigation={navigation}/>

        <ScrollView style={{flex:1,backgroundColor:'white'}}>
        <View style={{backgroundColor: colors.white, marginTop: 5, flex: 1}}>
          
          <View
            style={{
              borderWidth: 2,
              width: 80,
              height: 80,
              borderRadius: 50,
              alignSelf: 'center',
              marginVertical: 20,
              borderColor: colors.grey,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {profile_pic == null ? (
              <Icon
                name="person-outline"
                type="ionicons"
                size={35}
                color={colors.primaryBlue}
              />
            ) : (
              <Image
                source={{uri: profile_pic}}
                style={{height: '110%', width: '110%', borderRadius: 50}}
              />
            )}
            <Pressable
              onPress={() => setPopupVisible(true)}
              style={{
                position: 'absolute',
                backgroundColor: '#696969',
                padding: 7,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                bottom: -5,
                right: -5,
              }}>
              <Icon
                name="create-outline"
                type="ionicon"
                size={15}
                color={colors.white}
              />
            </Pressable>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <View style={{marginTop: 25}}>
              <Text style={[styles.h4, {marginLeft: 10}]}>Name</Text>
              <RNSTextInput
                placeHolder={'Enter Name'}
                value={name}
                onChangeText={e => dispatch(setName(e))}
              />
            </View>
            <View style={{marginTop: 25}}>
              <Text style={[styles.h4, {marginLeft: 10}]}>Email</Text>
              <RNSTextInput
                placeHolder={'Enter Email'}
                value={email}
                onChangeText={e => dispatch(setEmail(e))}
              />
            </View>
            {/* <View style={{marginTop: 25}}>
              <Text style={[styles.h4, {marginLeft: 10}]}>Phone Number</Text>
              <RNSTextInput
                placeHolder={'Enter Phone Number'}
                value={phone_number}
                maxLength={10}
                onChangeText={e => dispatch(setPhoneNumber(e))}
                keyboardType="numeric"
              />
            </View> */}
            <Pressable
              onPress={() => setIsVisible(true)}
              style={{marginTop: 25}}>
              <Text style={[styles.h4, {marginLeft: 10}]}>
                Enter Date of Birth
              </Text>
              <RNSTextInput placeHolder={'Select Date of Birth'} value={dob} />
              <View style={{position: 'absolute', right: 10, bottom: 10}}>
                <Icon
                  name="calendar-outline"
                  type="ionicon"
                  color={'#696969'}
                />
              </View>
            </Pressable>
          </View>
          <DateTimePicker
            isVisible={isVisible}
            mode={'date'}
            is24Hour={false}
            // minimumDate={new Date()}
            onConfirm={handlePicker}
            onCancel={() => setIsVisible(false)}
          />
          <View style={{marginVertical:20, width: '100%'}}>
            <Button
              text={'Save Changes'}
              backgroundColor={colors.primaryBlue}
              onpress={() => updateProfile()}
            />
          </View>
        </View>
          </ScrollView>
        <Modal visible={popupVisible} transparent>
          <Pressable
            onPress={e => {
              if (e.target == e.currentTarget) {
                setPopupVisible(false);
              }
            }}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}>
            <View
              style={{
                // height: profile_pic != null ? 220 : 180,
                height:180,
                borderWidth: 1,
                borderColor: '#d3d3d3',
                width: '90%',
                alignSelf: 'center',
                backgroundColor: '#fff',
              }}>
              <Pressable
                onPress={e => {
                  if (e.target != e.currentTarget) {
                    camera();
                  }
                }}
                style={{padding: 25}}>
                <Text style={[styles.h6, {color: '#000', fontWeight: '100'}]}>
                  Take from camera..
                </Text>
              </Pressable>

              <Pressable
                onPress={e => {
                  if (e.target != e.currentTarget) {
                    gallery();
                  }
                }}
                style={{padding: 25}}>
                <Text
                  style={[
                    styles.h6,
                    {color: '#000', fontWeight: '100', marginTop: -20},
                  ]}>
                  Choose from Library..
                </Text>
              </Pressable>
              {/* {profile_pic != null && (
                <Pressable
                  onPress={e => {
                    if (e.target != e.currentTarget) {
                      dispatch(setProfilePic(null));
                      setPopupVisible(false);
                    }
                  }}
                  style={{padding: 25}}>
                  <Text
                    style={[
                      styles.h6,
                      {color: 'red', fontWeight: '100', marginTop: -20},
                    ]}>
                    Delete Photo
                  </Text>
                </Pressable>
              )} */}

              <Pressable
                onPress={e => {
                  if (e.target != e.currentTarget) {
                    setPopupVisible(false);
                  }
                }}
                style={{alignSelf: 'flex-end', right: 25}}>
                <Text style={[styles.h6, {color: '#326bf3'}]}>Cancel</Text>
              </Pressable>
            </View>
          </Pressable>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 20,
  },
});

//make this component available to the app
export default EditProfile;
