//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {useDispatch} from 'react-redux';
import {logout} from '../auth/session';
// create a component
const Account = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}
        <View style={style.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              onPress={() => navigation.goBack()}
              name="chevron-left"
              type="ionicons"
              size={25}
            />

            <Image
              source={require('../../../assets/images/logoIcon.png')}
              style={{width: 70, height: 70, margin: 5}}
            />
            <Text style={styles.h4}>IIT-JEE Mains</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate('EditProfile')}
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
              <Pressable
                onPress={() => navigation.navigate('Subscription')}
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
              </Pressable>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Pressable
              onPress={() => navigation.navigate('Notification')}
              style={style.tab}>
              <Image
                source={require('./images/notification.png')}
                style={{height: 22, width: 21}}
              />

              <Text style={[styles.h5, {color: '#575757', marginLeft: 10}]}>
                Notifications
              </Text>
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate('HelpandSupport')}
              style={style.tab}>
              <Image
                source={require('./images/support.png')}
                style={{height: 27, width: 27}}
              />
              <Text style={[styles.h5, {color: '#575757', marginLeft: 10}]}>
                Help & Support
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Pressable
              onPress={() => navigation.navigate('MyLearnings')}
              style={style.tab}>
              <Image
                source={require('./images/books.png')}
                style={{height: 30, width: 30}}
              />
              <Text style={[styles.h5, {color: '#575757', marginLeft: 10}]}>
                My Learnings
              </Text>
            </Pressable>

            <View style={style.tab}>
              <Image
                source={require('./images/chat.png')}
                style={{height: 30, width: 30}}
              />
              <Text style={[styles.h5, {color: '#575757', marginLeft: 10}]}>
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
                source={require('./images/aboutus.png')}
                style={{height: 30, width: 30}}
              />
              <Text style={[styles.h5, {color: '#575757', marginLeft: 10}]}>
                About Us
              </Text>
            </View>

            <View style={style.tab}>
              <Image
                source={require('./images/termsandcondition.png')}
                style={{height: 30, width: 30}}
              />
              <Text
                style={[
                  styles.h5,
                  {color: '#575757', marginLeft: 10, width: '75%'},
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
                source={require('./images/privacy.png')}
                style={{height: 30, width: 30}}
              />
              <Text style={[styles.h5, {color: '#575757', marginLeft: 10}]}>
                Privacy Policy
              </Text>
            </View>
            <View style={style.tab}>
              <Image
                source={require('./images/delete.png')}
                style={{height: 28, width: 28}}
              />
              <Text style={[styles.h5, {color: '#575757', marginLeft: 10}]}>
                Delete Account
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => {
              dispatch(logout());
            }}
            style={{
              borderWidth: 1,
              alignItems: 'center',
              paddingHorizontal: 40,
              paddingVertical: 10,
              // marginRight: 12,
              borderColor: '#d5d5d5',
              borderRadius: 5,
              position: 'absolute',
              alignSelf: 'center',
              bottom: 70,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              source={require('./images/logout.png')}
              style={{height: 25, width: 25}}
            />
            <Text style={[styles.h6, {fontWeight: '700', marginLeft: 15}]}>
              Logout
            </Text>
          </Pressable>
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
    backgroundColor: colors.lightGray,
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
