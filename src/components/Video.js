//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { colors } from '../styles';
import styles from '../modules/navigation/styles';
import { Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper';

// create a component
function Video  () {
    return (
        
        <View style={{backgroundColor:colors.white,}}>
            <Image source={require('./images/thumbnail.jpg')} style={{width:'93%',height:200,borderRadius:10,alignSelf:'center'}}  />
            <View style={{paddingLeft:22,paddingTop:7}}>
            <Text style={[styles.h3,{fontWeight:'600'}]}>
                Mechanics
            </Text>
            <Text style={[styles.h6,{color:colors.gray}]}>
                Total duration: 3hr 20mins
            </Text>
            <Text style={[styles.h6,{marginTop:5}]}>
                By: Rishabh Jaiswal 
            </Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name="star" color={colors.yellow} size={18} />
                <Text style={[styles.h5,{color:colors.primaryBlue,marginLeft:5}]}>4.5</Text>
                <Text style={[styles.p,{color:colors.gray}]}> (40 reviews)</Text>
            </View>
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
export default Video;
