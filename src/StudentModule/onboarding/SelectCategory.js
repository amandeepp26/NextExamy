//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  ActivityIndicator
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import apiClient from '../../utils/apiClient';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { skipNow } from '../auth/signin';
import { setAuthData } from '../auth/session';
import SkeletonComponent from './Loader';

// const category = [
//   {
//     id: 1,
//     category: 'CAT',
//     description:
//       'CAT exams: Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), Quantitative Aptitude (QA)',
//     img: require('./images/cat.png'),
//   },
//   {
//     id: 2,
//     category: 'IIT-JEE',
//     description: 'IIT JEE exams: IIT JEE Prelims, IIT JEE Mains',
//     img: require('./images/iit.png'),
//   },
//   {
//     id: 3,
//     category: 'Medical',
//     description: 'Medical exams: NNET, NEET-PG, NEET MDS, INI CET, AIIMS, FGME',
//     img: require('./images/medical.png'),
//   },
//   {
//     id: 4,
//     category: 'State Exams',
//     description: 'State exams such UKSSC, UPSSC',
//     img: require('./images/state.png'),
//   },
//   {
//     id: 5,
//     category: 'Government Job Exams',
//     description: 'Exams through which you can qualify for government jobs',
//     img: require('./images/govt.png'),
//   },
// ];
// create a component
function SelectCategory({navigation}) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [category, setCategory] = useState(null);
  const [subCategory, setsubcategory] = useState(null);
  const [loading,setLoading] = useState(true);

  const dispatch = useDispatch();
  const tempToken = useSelector(state=>state.session.tempToken)


  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    try {
      const response = await apiClient.get(`${apiClient.Urls.categories}`, {});
      console.warn(response);
      if (response) {
        setCategory(response.data);
        setLoading(false);
      } else {
        setCategory(null);
      }
    } catch (e) {
      Toast.show({
        text1: e.message || e || 'Something went wrong!',
        type: 'error',
      });
      console.warn('error is-->', e);
    }
  };

  if(loading){
    return (
      <View style={{flex:1,backgroundColor:colors.white,justifyContent:'center'}}>
        <ActivityIndicator size='large' />
        </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={{padding: 20, marginTop: 10, backgroundColor: '#fff'}}>
        <Text style={styles.h6}>Let's setup your profile</Text>
        <Text style={[styles.h3, {fontWeight: '700'}]}>
          Select your Category
        </Text>
      </View>
      <ScrollView>
        <View style={{marginTop: 5, paddingBottom: 100}}>
          {category?.map((key, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  if (selectedCardIndex != index) {
                    setSelectedCardIndex(index);
                    setsubcategory(key.subcategories);
                  } else {
                    setSelectedCardIndex(null);
                    setsubcategory(null);
                  }
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 8,
                  marginHorizontal: 10,
                  borderWidth: selectedCardIndex === index ? 2.5 : 0,
                  borderColor:
                    selectedCardIndex === index
                      ? colors.primaryBlue
                      : colors.gray,
                  borderRadius: 10,
                  backgroundColor: colors.white,
                  elevation: 5,
                  padding: 10,
                  height: 85,
                  shadowColor: '#000',
                  shadowOffset: {width: 1, height: 1},
                  shadowOpacity: 0.7,
                  shadowRadius: 1,
                }}>
                {selectedCardIndex === index ? (
                  <View style={{position: 'absolute', right: 10, top: 10}}>
                    <Icon
                      name="check-circle"
                      color={colors.primaryBlue}
                      size={22}
                    />
                  </View>
                ) : null}
                <View style={{width: '25%', height: 90}}>
                  <Image
                    source={{
                      uri:
                        'https://app.ankitbangwaldigitalmarketing.in/images/category/' +
                        key.image,
                    }}
                    style={{width: '100%', height: '100%', marginLeft: -10}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{marginLeft: -15, width: '75%', padding: 5}}>
                  <Text style={styles.h3}>{key.name}</Text>
                  <Text style={styles.p} numberOfLines={2}>
                    {key.description || 'Description will come here...'}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <View
        style={{
          bottom: 30,
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
        }}>
        {selectedCardIndex != null ? (
          <Button
            backgroundColor={colors.primaryBlue}
            text={'Next'}
            onpress={() =>{
              subCategory!=null ?
              navigation.navigate('SelectSubCategory', {data: subCategory})
              :
              dispatch(skipNow(false));dispatch(setAuthData(tempToken))
            }
            }
          />
        ) : (
          <Button
            backgroundColor={'#a8d5e5'}
            text={'Next'}
            onpress={() => Toast.show('Please choose category!')}
          />
        )}
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
});

//make this component available to the app
export default SelectCategory;
