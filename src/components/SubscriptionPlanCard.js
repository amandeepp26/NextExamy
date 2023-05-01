import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {colors} from '../styles';
import styles from '../modules/navigation/styles';
import {Icon} from 'react-native-elements';
import Button from './Button';

// create a component
const SubscriptionPlanCard = () => {
  return (
    <View
      style={{
        borderRadius: 15,
        elevation:2,
        backgroundColor: '#FFECE5',
        marginTop: 20,
        paddingHorizontal: 10,
        width:Dimensions.get('window').width-35,
        height:Dimensions.get('window').height-150,
        paddingVertical: 10,
        marginLeft:15,
      }}>
      <View style={style.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('./images/plan1.png')}
            style={{width: 70, height: 70}}
          />
          <View>
            <Text style={[styles.h4, {fontWeight: 'bold', color: '#707070'}]}>
              IIT-JEE Mains
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 3,
              }}>
              <Icon name="star" color={colors.yellow} size={18} />
              <Text
                style={[styles.h5, {color: colors.primaryBlue, marginLeft: 5}]}>
                4.5
              </Text>
              <Text style={[styles.p, {color: colors.gray}]}>
                {' '}
                (40 reviews)
              </Text>
            </View>
          </View>
        </View>
        <Pressable>
          <Text style={[styles.h3, {fontWeight: 'bold'}]}>₹ 1499</Text>
        </Pressable>
      </View>
      <View style={{paddingHorizontal: 15, marginTop: 10}}>
        <Text style={[styles.h5, {fontWeight: 'bold', color: '#707070'}]}>
          About Course
        </Text>
        <Text
          style={[
            styles.h6,
            {color: '#707070', lineHeight: 22, marginVertical: 10},
          ]}>
          IIT JEE is mainly divided into two categories known as JEE Main and
          JEE Advanced. JEE Main is the first phase while JEE Advanced is the
          second phase of the exam. Candidates have to appear and clear JEE Main
          before proceeding to the next stage. Since 2019, National Testing
          Agency (NTA) is in charge of overseeing and conducting JEE Main.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text style={[styles.h5, {color: '#707070'}]}>Duration:</Text>
          <Text
            style={[
              styles.h6,
              {fontWeight: 'bold', color: '#707070', marginLeft: 5},
            ]}>
            6 months
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Icon
            name="checkmark-circle"
            type="ionicon"
            color={'#FF4400'}
            size={20}
          />
          <Text style={[styles.h6, {color: '#707070', marginLeft: 10}]}>
            Pre-recorded Videos
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Icon
            name="checkmark-circle"
            type="ionicon"
            color={'#FF4400'}
            size={20}
          />
          <Text style={[styles.h6, {color: '#707070', marginLeft: 10}]}>
            Subject-wise notes
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Icon
            name="checkmark-circle"
            type="ionicon"
            color={'#FF4400'}
            size={20}
          />
          <Text style={[styles.h6, {color: '#707070', marginLeft: 10}]}>
            Active Live Classes
          </Text>
        </View>
      </View>
        <View style={{position:'absolute',width:'105%',bottom:30,}}>
        <Button backgroundColor={'#535353'} text={'Buy Now'}  />
        </View>
    </View>
  );
};

// define your styles
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

//make this component available to the app
export default SubscriptionPlanCard;
