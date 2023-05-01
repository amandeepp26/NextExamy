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
  TextInput,
} from 'react-native';
import {Icon, Rating} from 'react-native-elements';
import Video from '../../components/Video';
import {colors} from '../../styles';
import styles from '../navigation/styles';
import Button from '../../components/Button';
// create a component
const VideoRateReview = ({navigation}) => {
  return (
    <View style={[styles.container, {color: colors.white, flex: 1}]}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{alignSelf: 'flex-start', padding: 15}}>
        <Icon name="chevron-left" size={25} />
      </Pressable>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('./images/rate.png')}
          style={{width: 150, height: 150, alignSelf: 'center'}}
        />
        <Text style={[styles.h3, {fontWeight: 'bold'}]}>
          Solid & Fluid Mechanism
        </Text>
        <Text style={[styles.h6, {marginTop: 10}]}>By: Rishabh Jaiswal</Text>
        <Rating imageSize={25}  style={{marginTop: 20,}} />
      </View>
      <View style={{marginTop:20,borderTopWidth:1,borderColor:'#d3d3d3',padding:20}}>
        <Text style={[styles.h5,{color:'#707070',fontWeight:'700'}]}>
            Leave a Review
        </Text>
        <TextInput placeholder='Type your review....' style={{borderWidth:1,marginTop:15,borderRadius:5,borderColor:'#d3d3d3'}} />
      </View>
      
      <View
        style={{
          bottom: 30,
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
        }}>
            <Button onpress={()=>navigation.navigate('VIDEO')} backgroundColor={colors.primaryBlue} text={'Submit'} />
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
});

//make this component available to the app
export default VideoRateReview;
