//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Video from '../../components/Video';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import Button from '../../components/Button';
import {Pressable} from 'react-native';
import SubscriptionPlanCard from '../../components/SubscriptionPlanCard';
import Header from '../../components/Header';
import apiClient from '../../utils/apiClient';
import {Toast} from 'react-native-toast-message';
import {useSelector} from 'react-redux';

const Subscription = ({navigation, route}) => {
  const [isloading,setIsLoading] =useState(true);
  const [data, setData] = useState(null);
  const authToken = useSelector(state => state.session.authToken);

  useEffect(() => {
    getSubscription();
  }, []);

  const getSubscription = async () => {
    try {
      const response = await apiClient.get(
        `${apiClient.Urls.subscriptionPlanList}`,
        {
          authToken: authToken,
        },
      );
      console.warn(response);
      if(response.status){
        setData(response.plans);
        setIsLoading(false);
      }
    } catch (e) {
      Toast.show({
        text1: e.message || e || 'Something went wrong!',
        type: 'error',
      });
      setIsLoading(false);
    }
  };

  if(isloading){
    return (
      
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={colors.primaryBlue} />
      </View>
        );
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Header title={'Choose a plan'} navigation={navigation} />

      <View style={{flexDirection: 'row', flex: 1}}>
        {data == null || data.length < 1 ? (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.h5}>No Plans Found!</Text>
          </View>
        ) : (
          <ScrollView horizontal>
            {data.map(key=>{
              return(
                <SubscriptionPlanCard data={key} />
              )
            })}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
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
    backgroundColor: colors.white,
    // paddingVertical: 5,
    marginTop: 20,
  },
  circleView: {
    width: 35,
    height: 35,
    backgroundColor: 'rgba(2, 146, 183, 0.5)',
    opacity: 0.3,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Subscription;
