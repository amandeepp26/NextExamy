//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import {colors} from '../../styles';
import styles from '../../navigation/styles';

const category = [
  {
    id: 1,
    category: 'CAT',
    description:
      'CAT exams: Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), Quantitative Aptitude (QA)',
    img: require('./images/cat.png'),
  },
  {
    id: 2,
    category: 'IIT-JEE',
    description: 'IIT JEE exams: IIT JEE Prelims, IIT JEE Mains',
    img: require('./images/iit.png'),
  },
  {
    id: 3,
    category: 'Medical',
    description: 'Medical exams: NNET, NEET-PG, NEET MDS, INI CET, AIIMS, FGME',
    img: require('./images/medical.png'),
  },
  {
    id: 4,
    category: 'State Exams',
    description: 'State exams such UKSSC, UPSSC',
    img: require('./images/state.png'),
  },
  {
    id: 5,
    category: 'Government Job Exams',
    description: 'Exams through which you can qualify for government jobs',
    img: require('./images/govt.png'),
  },
];
// create a component
function SelectCategory({navigation}) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  return (
    <View style={styles.container}>
      <View style={{padding: 20, marginTop: 10, backgroundColor: '#fff'}}>
        <Text style={styles.h6}>Let's setup your profile</Text>
        <Text style={[styles.h3,{fontWeight:'700'}]}>Select your Category</Text>
      </View>
      <View style={{marginTop: 5}}>
        {category.map((key, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => {
                if (selectedCardIndex != index) {
                    setSelectedCardIndex(index);
                }
                else{
                    setSelectedCardIndex(null)
                }
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 7,
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
              <Image source={key.img} style={{width: '18%', height: '90%'}} />
              <View style={{marginLeft: 20, width: '80%', padding: 5}}>
                <Text style={styles.h3}>{key.category}</Text>
                <Text style={styles.p} numberOfLines={2}>
                  {key.description}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>

      <View
        style={{
          bottom: 30,
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
        }}>
        <Button backgroundColor={colors.primaryBlue} text={'Next'} onpress={()=>navigation.navigate('SelectSubCategory')} />
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
