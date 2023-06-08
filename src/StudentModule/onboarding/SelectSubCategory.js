//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import Button from '../../components/Button';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import { skipNow } from '../auth/signin';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthData } from '../auth/session';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const colorCodes = [
  { primary: '#A0E7E5', secondary: '#FFFFFF' }, // Blue and White
  { primary: '#28A745', secondary: '#6C757D' }, // Green and Gray
  { primary: '#6F42C1', secondary: '#FF69B4' }, // Purple and Pink
  { primary: '#20C997', secondary: '#FD7E14' }, // Teal and Orange
  { primary: '#FFAEBC', secondary: '#FFC107' }, // Red and Yellow
  { primary: '#B4F8C8', secondary: '#FFD700' }, // Navy Blue and Gold
];

const category = [
  {
    id: 1,
    category: 'Defence',
    description: 'NDA,CDS,FCAT',
    img: require('./images/defence.png'),
  },
  {
    id: 2,
    category: 'Agriculture',
    description: 'NDA,CDS,FCAT',
    img: require('./images/agriculture.png'),
  },
  {
    id: 3,
    category: 'Railways',
    description: 'NDA,CDS,FCAT',
    img: require('./images/railway.png'),
  },
  {
    id: 4,
    category: 'SSC',
    description: 'NDA,CDS,FCAT',
    img: require('./images/ssc.png'),
  },
  {
    id: 5,
    category: 'UPSC',
    description: 'NDA,CDS,FCAT',
    img: require('./images/upsc.png'),
  },
  {
    id: 6,
    category: 'Teaching',
    description: 'NDA,CDS,FCAT',
    img: require('./images/teaching.png'),
  },
];
// create a component
function SelectSubCategory({navigation,route}) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const dispatch = useDispatch();

  if (route?.params.data.length % 2 !== 0) {
    route?.params.data.push({ id: 'dummy', isDummy: true });
  }
  const tempToken = useSelector(state=>state.session.tempToken)
  renderItem = ({item, index}) => {
    console.log('indexxis--------------<',index)
    const bgColor = colorCodes[index % colorCodes.length]?.primary;
    if (item.isDummy) {
      return <View style={style.dummyItem} />;
    }
    return (

      <Pressable
        key={index}
        onPress={() => {
          if (selectedCardIndex != index) {
            setSelectedCardIndex(index);
          } else {
            setSelectedCardIndex(null);
          }
        }}
        
        style={[style.gradientContainer,{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 8,
          // marginHorizontal: 10,
          borderWidth: selectedCardIndex === index ? 2.5 : 0,
          borderColor:
            selectedCardIndex === index ? colors.primaryBlue : bgColor,
          borderRadius: 10,
          backgroundColor: colors.white,
          elevation: 5,
          padding: 10,
          height: 100,
          width: '46%',
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.7,
          shadowRadius: 1, 
          borderLeftWidth:10,
          borderLeftColor:bgColor
          
        }]}>
          
        {selectedCardIndex === index ? (
          <View style={{position: 'absolute', right: 10, top: 5}}>
            <Icon name="check-circle" color={colors.primaryBlue} size={22} />
          </View>
        ) : null}
        <View style={{marginLeft: 5, width: '90%', padding: 5}}>
          <Text style={[styles.h6,{fontWeight:'700'}]}>{item.name}</Text>
          <Text style={[styles.p, {fontSize: 11}]} numberOfLines={2}>
            {item.description || 'Description will come here....'}
          </Text>
        </View>
      </Pressable>
     
    );
  };
  return (
    <View style={styles.container}>
      <View style={{padding: 20, marginTop: 10, backgroundColor: '#fff'}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: -10}}>
          <Icon
            name="chevron-left"
            onPress={() => {
              navigation.goBack();
            }}
            type="ionicons"
            size={30}
          />
          <Text style={[styles.h6, {marginLeft: 10}]}>
            {' '}
            Go Back to category List
          </Text>
        </View>
        <Text style={[styles.h3, {fontWeight: '700', marginTop: 10}]}>
          Select your sub-Category
        </Text>
      </View>
      <View style={{marginTop: 5,paddingBottom:100,backgroundColor:colors.white, flex:1 }}>
        <FlatList
          numColumns={2}
          data={route?.params.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View
        style={{
          bottom: 30,
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
        }}>
          {selectedCardIndex !=null ?
        <Button backgroundColor={colors.primaryBlue} text={'Next'} onpress={() => {dispatch(skipNow(false));dispatch(setAuthData(tempToken))}} />
            :
            <Button
            backgroundColor={'#a8d5e5'}
            text={'Next'}
            onpress={() => Toast.show('Please choose category!')}
          />
}
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
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(2,146,183)',
    backgroundImage: 'linear-gradient(125deg, rgba(2,146,183,1) 0%, rgba(255,255,255,1) 100%)',
  },
  dummyItem: {
    width: 0,
    flex: 1,
    margin:20
  },
});

//make this component available to the app
export default SelectSubCategory;
