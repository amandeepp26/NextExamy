//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import {colors} from '../../styles';
import styles from '../../navigation/styles';

const subjects = [
  {
    id: 1,
    subject: 'Physics',
    topics: '10 Topics',
    color:'#EE7877'
  },
  {
    id: 2,
    subject: 'Mathematics',
    topics: '15 Topics',
    color:'#EA55D7',
  },
  {
    id: 3,
    subject: 'Chemistry',
    topics: '8 Topics',
    color:'#00BF93'
  },
  {
    id: 4,
    subject: 'Biology',
    topics: '18 Topics',
    color:'#326bf3'
  },
];
const colorCodes = [
  {primary: '#EE7877', secondary: '#FFFFFF'}, // Blue and White
  {primary: '#00BF93', secondary: '#6C757D'}, // Green and Gray
  {primary: '#6F42C1', secondary: '#FF69B4'}, // Purple and Pink
  {primary: '#20C997', secondary: '#FD7E14'}, // Teal and Orange
  {primary: '#FFAEBC', secondary: '#FFC107'}, // Red and Yellow
  {primary: '#B4F8C8', secondary: '#FFD700'}, // Navy Blue and Gold
];
// create a component
function SubjectWiseClass({navigation,subjects}) {
console.warn(subjects);
  return (
    <View style={styles.container}>
      <View style={{padding: 10,marginLeft:10, marginTop: 5, backgroundColor: '#fff'}}>
        <Text style={[styles.h3, {fontWeight: '700'}]}>
          Subject-wise classes
        </Text>
        {subjects?.map((key,index)=>{
          const bgColor = colorCodes[index % colorCodes.length]?.primary;
            return(
                <Pressable style={style.header} onPress={()=>navigation.navigate("ParticularSubjectClass",{subject:key.name})}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={[style.circleView,{backgroundColor:`${bgColor}40`}]}>
                    {/* <Image style={{height:25,width:25}} source={require('../../../assets/images/book.png')} /> */}
                    <Icon name='book-outline' type='ionicon' color={bgColor} size={20} />
                        {/* <Text style={{opacity:1,color:colors.primaryBlue,fontWeight:'bold',fontSize:20}}>
                            {key.subject[0]}
                        </Text> */}
                  </View>
                  <View>
                  <Text style={[styles.h4,{marginLeft:10}]}>
                    {key.name}
                  </Text>
                  
                  <Text style={[styles.p,{marginLeft:10}]}>
                    {key.topics_count} Topics
                  </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="chevron-right" type="ionicons" size={25} />
                </View>
              </Pressable>
            )
        })}
      </View>
    </View>
  );
}

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
    marginTop:15,
  },
  circleView:{
    width:35,height:35,
    // opacity:0.1,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center'

  }
});

//make this component available to the app
export default SubjectWiseClass;
