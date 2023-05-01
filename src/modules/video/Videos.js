//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {colors} from '../../styles';
import styles from '../navigation/styles';
import {Icon} from 'react-native-elements';
import SearchBar from '../../components/SearchBar';

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
    color:'#00BF93',
    topics: '15 Topics',
  },
  {
    id: 3,
    subject: 'Chemistry',
    topics: '8 Topics',
    color: '#A2D6E5',
  },
  {
    id: 4,
    subject: 'Biology',
    topics: '18 Topics',
    color: '#DB84F3',
  },
  {
    id: 5,
    subject: 'Mathematics',
    topics: '15 Topics',
    color: '#5DA493',
  },
  {
    id: 6,
    subject: 'Chemistry',
    topics: '8 Topics',
    color:'#326bf3'
  },
  {
    id: 7,
    subject: 'Biology',
    topics: '18 Topics',
    color: '#0C2C39',
  },
];

const Links = [
  {
    id: 1,
    category: 'SAVED VIDEOS',
    img: require('./images/saved.png'),
    screen:"SavedVideos"
  },
  {
    id: 2,
    category: 'LIVE VIDEOS',
    img: require('./images/live.png'),
    screen:"LiveClass"

  },
  {
    id: 3,
    category: 'FREE VIDEOS',
    img: require('./images/free.png'),
    screen:"FreeVideos"

  },
];
// create a component
function Videos({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: colors.white}}>
        <Text style={[styles.h3, {padding: 20}]}>Videos</Text>
      </View>
      <ScrollView
        style={{
          backgroundColor: colors.white,
          marginTop: 5,
          marginBottom: 50,
        }}>
          <SearchBar />
        {/* Video type section */}
        <View style={{flexDirection: 'row', paddingHorizontal: 10,paddingVertical:15, borderBottomWidth:5,borderColor:colors.lightGray}}>
          {Links.map(key => {
            return (
              <Pressable style={style.tabContainer} onPress={()=>navigation.navigate(key.screen)}>
                <Image source={key.img} style={{width: 42, height: 50}} />
                <Text
                  style={[
                    styles.p,
                    {
                      color: '#575757',
                      fontSize: 12,
                      marginTop: 5,
                      fontWeight: '700',
                    },
                  ]}>
                  {key.category}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <View style={{marginTop: 10,paddingLeft:15, backgroundColor: colors.white,paddingBottom:20}}>
          <Text style={[styles.h4, {fontWeight: '700', marginTop: 10}]}>
            Subjects
          </Text>
          {subjects.map(key => {
            return (
              <View style={[style.header]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={[style.circleView,{backgroundColor:`${key.color}40`}]}>
                    {/* <Image style={{height:25,width:25}} source={require('../../../assets/images/book.png')} /> */}
                    <Icon name='book-outline' type='ionicon' color={key.color} size={20} />
                        {/* <Text style={{opacity:1,color:colors.primaryBlue,fontWeight:'bold',fontSize:20}}>
                            {key.subject[0]}
                        </Text> */}
                  </View>
                  <View style={{marginLeft: 15}}>
                    <Text style={[styles.h4]}>{key.subject}</Text>

                    <Text style={[styles.p]}>{key.topics}</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="chevron-right" type="ionicons" size={25} />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

// define your styles
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    // paddingVertical: 5,
    marginTop: 20,
  },
  circleView:{
    width:35,height:35,
    // opacity:0.1,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center'

  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 5,
    backgroundColor: colors.lightGray,
    height: 100,
    width: '31%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 1,
  },
});

//make this component available to the app
export default Videos;
