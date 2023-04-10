//import liraries
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../styles';
import styles from '../navigation/styles';
import {Icon} from 'react-native-elements';
import RNSTextInput from '../../components/RNSTextInput';
import Button from '../../components/Button';

// create a component
const EditProfile = () => {
  return (
    <SafeAreaView  style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}
        <View style={style.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="chevron-left" type="ionicons" size={25} />
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
            <Icon
              name="person-outline"
              type="ionicons"
              size={35}
              color={colors.primaryBlue}
            />
            <View
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
            </View>
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
            <View style={{marginTop: 25}}>
              <Text style={[styles.h4, {marginLeft: 10}]}>
                Enter Date of Birth
              </Text>
              <RNSTextInput placeHolder={'Select Date of Birth'} />
              <View style={{position: 'absolute', right: 10, bottom: 10}}>
                <Icon
                  name="calendar-outline"
                  type="ionicon"
                  color={'#696969'}
                />
              </View>
            </View>
          </View>
          <View style={{position: 'absolute', bottom: 20, width: '100%', }}  >
            <Button text={'Save Changes'} />
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
