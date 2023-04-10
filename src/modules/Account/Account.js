//import liraries
import React, {Component} from 'react';
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
import Button from '../../components/Button';
import Video from '../../components/Video';
import {colors} from '../../styles';
import styles from '../navigation/styles';
// create a component
const Account = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}
        <View style={style.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="chevron-left" type="ionicons" size={25} />

            <Image
              source={require('../../../assets/images/logoIcon.png')}
              style={{width: 70, height: 70, margin: 5}}
            />
            <Text style={styles.h4}>IIT-JEE Mains</Text>
          </View>
          <Pressable
          onPress={()=>navigation.navigate('EditProfile')}
            style={{
              borderWidth: 1,
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginRight: 12,
              borderColor: '#d5d5d5',
              borderRadius: 5,
            }}>
            <Text style={[styles.h6]}>Edit Profile</Text>
          </Pressable>
        </View>

        <View style={{flex: 1, backgroundColor: colors.white}}>
          <View
            style={{
              backgroundColor: '#FFF8ED',
              height: 90,
              elevation: 3,
              paddingHorizontal: 12,
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: '65%'}}>
                <Text style={styles.h6}>Easy Subscription</Text>
                <Text>Get access to sessions,live classes and many more.</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 5,

                  borderRadius: 5,
                  backgroundColor: colors.primaryBlue,
                }}>
                <Text style={[styles.h6, {color: colors.white}]}>
                  Subscribe Now!
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={style.tab}>
              <Image
                source={require('./images/user.png')}
                style={{height: 25, width: 25}}
              />

              <Text style={[styles.h5, {color: '#696969', marginLeft: 15}]}>
                Notifications
              </Text>
            </View>

            <View style={style.tab}>
              <Image
                source={require('./images/user.png')}
                style={{height: 25, width: 25}}
              />
              <Text style={[styles.h5, {color: '#696969', marginLeft: 15}]}>
                Help & Support
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={style.tab}>
              <Image
                source={require('./images/user.png')}
                style={{height: 25, width: 25}}
              />
              <Text style={[styles.h5, {color: '#696969', marginLeft: 15}]}>
                My Learnings
              </Text>
            </View>

            <View style={style.tab}>
              <Image
                source={require('./images/user.png')}
                style={{height: 25, width: 25}}
              />
              <Text style={[styles.h5, {color: '#696969', marginLeft: 15}]}>
                Send Feedback
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={style.tab}>
              <Image
                source={require('./images/user.png')}
                style={{height: 25, width: 25}}
              />
              <Text style={[styles.h5, {color: '#696969', marginLeft: 15}]}>
                About Us
              </Text>
            </View>

            <View style={style.tab}>
              <Image
                source={require('./images/user.png')}
                style={{height: 25, width: 25}}
              />
              <Text
                style={[
                  styles.h5,
                  {color: '#696969', marginLeft: 15, width: '75%'},
                ]}>
                Terms & Conditions
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={style.tab}>
              <Image
                source={require('./images/user.png')}
                style={{height: 25, width: 25}}
              />
              <Text style={[styles.h5, {color: '#696969', marginLeft: 15}]}>
                Privacy Policy
              </Text>
            </View>
            <View style={style.tab}>
              <Image
                source={require('./images/user.png')}
                style={{height: 25, width: 25}}
              />
              <Text style={[styles.h5, {color: '#696969', marginLeft: 15}]}>
                Delete Account
              </Text>
            </View>
          </View>
          
          <View
            style={{
              borderWidth: 1,
              alignItems: 'center',
              paddingHorizontal: 40,
              paddingVertical: 10,
              // marginRight: 12,
              borderColor: '#d5d5d5',
              borderRadius: 5,
              position:'absolute',
              alignSelf:'center',
              bottom:70,
              flexDirection:'row',
              justifyContent:'space-between'
            }}>
              <Image
                source={require('./images/user.png')}
                style={{height: 25, width: 25}}
              />
            <Text style={[styles.h6,{fontWeight:'700',marginLeft:15}]}>Logout</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 5,
  },
  tab: {
    backgroundColor: '#f5f5f5',
    width: '44%',
    height: 75,
    borderRadius: 10,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    paddingLeft: 10,
  },
});

//make this component available to the app
export default Account;
