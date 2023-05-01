//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import {colors} from '../../styles';
import styles from '../navigation/styles';

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
// create a component
function SubjectWiseClass({navigation}) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  return (
    <View style={styles.container}>
      <View style={{padding: 10,marginLeft:10, marginTop: 5, backgroundColor: '#fff'}}>
        <Text style={[styles.h3, {fontWeight: '700'}]}>
          Subject-wise classes
        </Text>
        {subjects.map(key=>{
            return(
                <Pressable style={style.header} onPress={()=>navigation.navigate("ParticularSubjectClass",{subject:key.subject})}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={[style.circleView,{backgroundColor:`${key.color}40`}]}>
                    {/* <Image style={{height:25,width:25}} source={require('../../../assets/images/book.png')} /> */}
                    <Icon name='book-outline' type='ionicon' color={key.color} size={20} />
                        {/* <Text style={{opacity:1,color:colors.primaryBlue,fontWeight:'bold',fontSize:20}}>
                            {key.subject[0]}
                        </Text> */}
                  </View>
                  <View>
                  <Text style={[styles.h4,{marginLeft:10}]}>
                    {key.subject}
                  </Text>
                  
                  <Text style={[styles.p,{marginLeft:10}]}>
                    {key.topics}
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
