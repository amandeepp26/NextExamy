//import liraries
import React, {Component,useState} from 'react';
import {Image, Pressable, SafeAreaView} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {Icon} from 'react-native-elements';
import RNSTextInput from '../../components/RNSTextInput';
import Button from '../../components/Button';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

// create a component
const EditProfile = ({navigation}) => {
  
  const [dob, set_dob] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [image, setImage] = useState('');


  const handlePicker = date => {
    if (dob == '') {
      set_dob(dob);
    }
    setIsVisible(false);
    set_dob(moment(date).format('MM/DD/YYYY'));
  };
  const gallery = () => {
    let options = {
      title: 'Select Image',
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality:0.5
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
        // alert('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        // alert('ImagePicker Error: ' + response.error);
      } else {
        // const fileSize = response.data.length * (3 / 4) - 2;
        // console.log('filesize', fileSize);
        if (response.fileSize > 314572) {
alert('hyy')
        } else {
        let source = response.data;
        setImage(response.uri);
        // console.warn(source);
      }
    }
    });
  };
  const camera = () => {
    let options = {
      title: 'Select Image',
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality:0.5
    };
    ImagePicker.launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
        // alert('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        // alert('ImagePicker Error: ' + response.error);
      } else {
        // const fileSize = response.data.length * (3 / 4) - 2;
        // console.log('filesize', fileSize);
        if (response.fileSize > 314572) {
          alert('hy')
        } else {
        let source = response.data;
        setImage(response.uri);
        console.warn(source);
      }
    }
    });
  };
  return (
    <SafeAreaView  style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}
        <View style={style.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon onPress={()=>navigation.goBack()} name="chevron-left" type="ionicons" size={25} />
            <Text style={styles.h4}>Profile</Text>
          </View>
        </View>
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
              {image=='' ?
            <Icon
              name="person-outline"
              type="ionicons"
              size={35}
              color={colors.primaryBlue}
            />
            :
            <Image source={{uri:image}} style={{height:'100%',width:'100%'}}  />
          }
            <Pressable
            onPress={()=>camera()}
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
              <RNSTextInput placeHolder={'Enter Name'} />
            </View>
            <View style={{marginTop: 25}}>
              <Text style={[styles.h4, {marginLeft: 10}]}>Email</Text>
              <RNSTextInput placeHolder={'Enter Email'} />
            </View>
            <View style={{marginTop: 25}}>
              <Text style={[styles.h4, {marginLeft: 10}]}>Phone Number</Text>
              <RNSTextInput placeHolder={'Enter Phone Number'} />
            </View>
            <Pressable onPress={()=>setIsVisible(true)} style={{marginTop: 25}}>
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
          <View style={{position: 'absolute', bottom: 20, width: '100%', }}  >
            <Button text={'Save Changes'} backgroundColor={colors.primaryBlue
            } onpress={()=>navigation.navigate('Account')} />
          </View>
        </View>
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
