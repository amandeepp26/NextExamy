import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from '../../navigation/styles';
import {colors} from '../../styles';
import UpcomingClasses from './UpcomingClasses';
import SelectDropdown from 'react-native-select-dropdown';
import {Icon} from 'react-native-elements';
import Assessments from './Assessments';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';
const options2 = ['Option A', 'Option B', 'Option C'];
const data = [
  {
    subject: 'Physics',
    name: 'simran',
    topic: 'Solid and Fluid Mechanic',
    questions: '60',
    marks: '100',
    completed_on: '02-09-2023',
  },
  {
    subject: 'Mathematics',
    name: 'Aman',
    topic: 'Algebra',
    questions: '10',
    marks: '50',
    completed_on: '10-06-2023',
  },
  {
    subject: 'Chemistry',
    name: 'Kiran',
    topic: 'Thermodynamics',
    questions: '40',
    marks: '80',
    completed_on: '05-11-2023',
  },
];

export default function Home({navigation}) {
  const name = useSelector(state => state.signin.name);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={[styles.container, {backgroundColor: colors.white}]}>
        {/* Header */}
        <View style={style.header}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.p}>Welcome</Text>
            <Text
              style={[
                styles.h5,
                {color: colors.primaryBlue, fontWeight: '600'},
              ]}>
              {name}
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate('Account')}>
            <Image
              source={require('./images/user.jpeg')}
              style={{width: 40, height: 40, borderRadius: 100}}
            />
          </Pressable>
        </View>
        <ScrollView style={{marginBottom: 60}}>
          <View style={style.scheduleContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.h5, {fontWeight: 600}]}>My Schedule</Text>
              {/* <View
                style={{
                  flexDirection: 'row',
                }}>
                <SelectDropdown
                  data={options2}
                  onSelect={(selectedItem, index) => {
                    setSelectedOption2(selectedItem);
                  }}
                  defaultButtonText="Today"
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  buttonStyle={style.dropdownText}
                  buttonTextStyle={style.placeholder}
                />
              </View> */}
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Pressable
                style={style.scheduleInfo}
                onPress={() => navigation.navigate('LiveClassesList')}>
                <Text style={[styles.h4, {fontWeight: 700}]}>35</Text>
                <Text style={[styles.h6, {color: colors.gray}]}>
                  Live Classes
                </Text>
              </Pressable>
              <Pressable
                style={style.scheduleInfo}
                onPress={() => navigation.navigate('MyClassesList')}>
                <Text style={[styles.h4, {fontWeight: 700}]}>4.8</Text>
                <Text style={[styles.h6, {color: colors.gray}]}>
                  Class Rating
                </Text>
              </Pressable>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={[styles.h5, {fontWeight: 600}]}>
                Upcoming Classes
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('UpcomingClassesList')}>
                <Text>View all</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.upcomingClassesContainer}>
            <UpcomingClasses navigation={navigation} />
            <Text
              style={[
                styles.h5,
                {fontWeight: 600, paddingHorizontal: 15, paddingTop: 10},
              ]}>
              Assessments
            </Text>
          </View>

          <View style={style.asssessmentContainer}>
            <Assessments data={data} navigation={navigation} />
            <View>
              <Button text={'See all'} backgroundColor={colors.gray} onpress={()=>navigation.navigate('TESTS')} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  scheduleContainer: {
    marginTop: 5,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  scheduleInfo: {
    width: '49%',
    padding: 10,
    paddingVertical: 25,
    borderRadius: 15,
    marginVertical: 20,
    marginHorizontal: 3,
    backgroundColor: '#ffff',
    elevation: 5,
  },
  upcomingClassesContainer: {
    marginTop: 5,
    backgroundColor: '#ffff',
    paddingVertical: 10,
    flex: 1,
  },
  dropdownText: {
    fontSize: 10,
    color: 'gray',
    textAlign: 'left',
    backgroundColor: '#fff',
    width: 80,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 100,
  },
  placeholder: {
    fontSize: 13,
    textAlign: 'left',
    color: 'gray',
  },
  asssessmentContainer: {
    backgroundColor: '#ffff',
    marginTop: 5,
    marginBottom: 10,
  },
});
