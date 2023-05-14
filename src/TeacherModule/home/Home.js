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
const options2 = ['Option A', 'Option B', 'Option C'];

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}
        <View style={style.header}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.p}>Welcome</Text>
            <Text
              style={[
                styles.h5,
                {color: colors.primaryBlue, fontWeight: '600'},
              ]}>
              Akash Saini
            </Text>
          </View>
          <Image
            source={require('./images/user.jpeg')}
            style={{width: 40, height: 40, borderRadius: 100}}
          />
        </View>
        <ScrollView>
          <View style={style.scheduleContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.h5, {fontWeight: 600}]}>My Schedule</Text>
              <View
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
                {/* <Icon
                name="chevron-down"
                type="entypo"
                size={15}
                color="#444"
                style={{marginRight: 5}}
              /> */}
              </View>
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
              <View style={style.scheduleInfo}>
                <Text style={[styles.h4, {fontWeight: 700}]}>4.8</Text>
                <Text style={[styles.h6, {color: colors.gray}]}>
                  Class Rating
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={[styles.h5, {fontWeight: 600}]}>Upcomg Classes</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('UpcomingClassesList')}>
                <Text>View all</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.upcomingClassesContainer}>
            <UpcomingClasses />
            <Text
              style={[
                styles.h5,
                {fontWeight: 600, paddingHorizontal: 15, paddingTop: 10},
              ]}>
              Assessments
            </Text>
          </View>

          <View style={style.asssessmentContainer}>
            <Assessments />
            <View>
              <Button text={'See all'} backgroundColor={colors.gray} />
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
  },
});
