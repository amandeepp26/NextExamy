import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../navigation/styles';
import {colors} from '../../styles';
import SearchBar from '../../components/SearchBar';
import SearchVideoCard from '../../components/SearchVideoCard';
import SubjectWiseClass from './SubjectWiseClass';
import MockTestCard from '../../components/MockTestCard';
import {Icon} from 'react-native-elements';
import AssessmentTestCard from '../../components/AssessmentTestCard';

const subjects = [
  {
    id: 1,
    subject: 'Physics',
    topics: '10 Topics',
    color: '#EE7877',
  },
  {
    id: 2,
    subject: 'Mathematics',
    topics: '15 Topics',
    color: '#EA55D7',
  },
  {
    id: 3,
    subject: 'Chemistry',
    topics: '8 Topics',
    color: '#00BF93',
  },
  {
    id: 4,
    subject: 'Biology',
    topics: '18 Topics',
    color: '#326bf3',
  },
];
export default function Search({navigation}) {
  const [searchActive, setsearchActive] = useState(false);
  const [searchData, setsearchData] = useState('jh');
  const getRandomColor = () => {
    const colors = [
      '234, 87, 85',
      '0, 191, 147',
      '5, 126, 0',
      '255, 68, 0',
      '234, 87, 85',
      '0, 191, 147',
      '5, 126, 0',
      '255, 68, 0',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white,}}>
      <View style={[styles.container, {backgroundColor: colors.white}]}>
        {/* search input */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <View style={{width: '85%'}}>
            <SearchBar searchData={searchData} setsearchData={setsearchData} />
          </View>
          <Text
            style={{marginTop: 10, fontWeight: 600, color: colors.black}}
            onPress={() => navigation.goBack()}>
            Cancel
          </Text>
        </View>
        {/* {searchActive && (

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('./images/search.png')}
              style={{width: 100, height: 100}}
            />
            <Text style={{marginTop: 20, fontWeight: 600}}>
              Search for Videos, Topics and Tests
            </Text>
          </View> */}
        {searchData.length > 0 ? (
          <ScrollView >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                paddingTop: 10,
                alignItems: 'center',
              }}>
              <Text style={[styles.h5]}>Video</Text>
              <Text onPress={()=>navigation.navigate('VIDEO')} style={[styles.p, {fontSize: 10}]}>SEE ALL</Text>
            </View>
            <SearchVideoCard navigation={navigation} />
            <SearchVideoCard navigation={navigation} />
            <SearchVideoCard navigation={navigation} />
            <SearchVideoCard navigation={navigation} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                paddingTop: 10,
                alignItems: 'center',
              }}>
              <Text style={[styles.h5]}>Topics</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                borderBottomWidth: 1,
                paddingBottom: 15,
                borderColor: '#d6d6d6',
              }}>
              {subjects.map(key => {
                return (
                  <Pressable
                    style={style.header}
                    onPress={() =>
                      navigation.navigate('TopicLists', {
                        Topic: key.subject,
                      })
                    }>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={[
                          style.circleView,
                          {backgroundColor: `${key.color}40`},
                        ]}>
                        {/* <Image style={{height:25,width:25}} source={require('../../../assets/images/book.png')} /> */}
                        <Icon
                          name="book-outline"
                          type="ionicon"
                          color={key.color}
                          size={20}
                        />
                        {/* <Text style={{opacity:1,color:colors.primaryBlue,fontWeight:'bold',fontSize:20}}>
                            {key.subject[0]}
                        </Text> */}
                      </View>
                      <View>
                        <Text style={[styles.h4, {marginLeft: 10}]}>
                          {key.subject}
                        </Text>

                        <Text style={[styles.p, {marginLeft: 10}]}>
                          {key.topics}
                        </Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icon name="chevron-right" type="ionicons" size={25} />
                    </View>
                  </Pressable>
                );
              })}
            </View>
            {/* <SubjectWiseClass /> */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                paddingTop: 10,
                alignItems: 'center',
              }}>
              <Text style={[styles.h5]}>Tests</Text>
            </View>
            <View style={{marginBottom:10}}>
              <AssessmentTestCard
                topic={'Kinematics'}
                subject={'Physics'}
                question={'50'}
                navigation={navigation}
              />
              <AssessmentTestCard
                topic={'Kinematics'}
                subject={'Physics'}
                question={'50'}
                navigation={navigation}
              />
            </View>
          </ScrollView>
        ) : null}
        {/* )} */}
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    // paddingVertical: 5,
    marginTop: 15,
  },
  circleView: {
    width: 35,
    height: 35,
    // opacity:0.1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
