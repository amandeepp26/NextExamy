import React, {Component, useState} from 'react';
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
import styles from '../navigation/styles';
import {Icon} from 'react-native-elements';
import Button from './Button';
import RenderHTML from 'react-native-render-html';
import RazorpayCheckout from 'react-native-razorpay';
import apiClient from '../utils/apiClient';
import { useSelector } from 'react-redux';
import { Toast } from 'react-native-toast-message';

// create a component
const SubscriptionPlanCard = ({data}) => {
  const [loading,setLoading] =useState(false);
  const authToken = useSelector(state => state.session.authToken);

  const handleBuyNow = async () => {
    try {
      setLoading(true);
      RazorpayCheckout.open({
        key: 'rzp_test_pMpiDPZ9Svz0EW',
        amount: data.price*100,
        name: 'Next Examy',
        description: 'Subscription Plan Payment',
        prefill: {
          email: 'user@example.com', // Pass the customer's email here (optional)
          contact: '1234567890', // Pass the customer's contact number here (optional)
        },
        theme: { color: colors.primaryBlue }, 
      }).then((response)=>{
        if(response.razorpay_payment_id){
            paymentSuccess(response.razorpay_payment_id);
        }
        else{
          paymentFailure(response.razorpay_payment_id);
        }
      })

    } catch (error) {
      console.log('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const paymentSuccess =async (e) => {
    try {
      const response = await apiClient.post(`${apiClient.Urls.paymentSuccess}`, {
        authToken: authToken,
        payment_id:e,
        plan_id:data.id,
      });
      console.warn("Payment success response------->>>>",response);
      
    } catch (e) {
      Toast.show({
        text1: e.message || e || 'Something went wrong!',
        type: 'error',
      });
      console.log("error---->",e)
    }
  };

  const paymentFailure =async (e) => {
    try {
      const response = await apiClient.post(`${apiClient.Urls.paymentFailure}`, {
        authToken: authToken,
        payment_id:e,
        plan_id:data.id
      });
      console.warn("Payment Failed response------->>>>",response);
      
    } catch (e) {
      Toast.show({
        text1: e.message || e || 'Something went wrong!',
        type: 'error',
      });
      console.log("error---->",e)
    }
  };

  return (
    <View
      style={{
        borderRadius: 15,
        elevation: 2,
        backgroundColor: '#FFECE5',
        marginTop: 20,
        paddingHorizontal: 10,
        width: Dimensions.get('window').width - 35,
        height: Dimensions.get('window').height - 150,
        paddingVertical: 10,
        marginLeft: 15,
      }}>
      <View style={style.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('./images/plan1.png')}
            style={{width: 70, height: 70}}
          />
          <View>
            <Text style={[styles.h4, {fontWeight: 'bold', color: '#707070'}]}>
              {data.plan_name}
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
          <Text style={[styles.h3, {fontWeight: 'bold'}]}>₹ {data.price}</Text>
        </Pressable>
      </View>
      <View style={{paddingHorizontal: 15, marginTop: 10}}>
        <Text style={[styles.h5, {fontWeight: 'bold', color: '#707070'}]}>
          About Course
        </Text>
        <RenderHTML source={{html: data.description}} />
        {/* <Text
          style={[
            styles.h6,
            {color: '#707070', lineHeight: 22, marginVertical: 10},
          ]}>
            {data.description}
        </Text> */}
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
            {data.duration} days
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
      {loading ? (
        <Button load={true} backgroundColor={colors.primaryBlue} />
      ) : (
        <View style={{position: 'absolute', width: '105%', bottom: 30}}>
          <Button backgroundColor={'#535353'} text={'Buy Now'} onpress={()=>handleBuyNow()} />
        </View>
      )}
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
