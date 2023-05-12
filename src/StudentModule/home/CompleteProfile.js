import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../../navigation/styles';
import {colors} from '../../styles';
import {Icon} from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown';
import Button from '../../components/Button';

const options1 = ['Option 1', 'Option 2', 'Option 3'];
const options2 = ['Option A', 'Option B', 'Option C'];
const options3 = ['Option X', 'Option Y', 'Option Z'];
const options4 = ['Option P', 'Option Q', 'Option R'];
const options5 = ['Option M', 'Option N', 'Option O'];

export default function CompleteProfile({navigation}) {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [selectedOption5, setSelectedOption5] = useState(null);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}
        <View style={style.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              onPress={() => navigation.goBack()}
              name="chevron-left"
              type="ionicons"
              size={25}
            />
            <Text style={[styles.h3,{paddingLeft:5}]}>Add Graduation Details</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            marginTop: 5,
            paddingTop: 20,
          }}>
          <View style={style.dropdownContainer}>
            <Text style={style.label}>Select Education Level</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-around',
              }}>
              <SelectDropdown
                data={options1}
                onSelect={(selectedItem, index) => {
                  setSelectedOption1(selectedItem);
                }}
                defaultButtonText="Education Level"
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                buttonStyle={style.dropdownText}
                buttonTextStyle={style.placeholder}
                dropdownIconPosition="right"
                dropdownStyle={style.dropdown}
              />
              <Icon
                name="chevron-down"
                type="entypo"
                size={20}
                color="#444"
                style={[style.dropdownIcon, {marginRight: 5}]}
              />
            </View>
          </View>
          <View style={style.dropdownContainer}>
            <Text style={style.label}>Select Country</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-around',
              }}>
              <SelectDropdown
                data={options2}
                onSelect={(selectedItem, index) => {
                  setSelectedOption2(selectedItem);
                }}
                defaultButtonText="Country"
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                buttonStyle={style.dropdownText}
                buttonTextStyle={style.placeholder}
              />
              <Icon
                name="chevron-down"
                type="entypo"
                size={20}
                color="#444"
                style={{marginRight: 5}}
              />
            </View>
          </View>
          <View style={style.dropdownContainer}>
            <Text style={style.label}>Select University</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-around',
              }}>
              <SelectDropdown
                data={options3}
                onSelect={(selectedItem, index) => {
                  setSelectedOption3(selectedItem);
                }}
                defaultButtonText="University"
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                buttonStyle={style.dropdownText}
                buttonTextStyle={style.placeholder}
              />
              <Icon
                name="chevron-down"
                type="entypo"
                size={20}
                color="#444"
                style={[style.dropdownIcon, {marginRight: 5}]}
              />
            </View>
          </View>
          <View style={style.dropdownContainer}>
            <Text style={style.label}>Select Your Course</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'baseline',
                  justifyContent: 'space-around',
                }}>
                <SelectDropdown
                  data={options4}
                  onSelect={(selectedItem, index) => {
                    setSelectedOption4(selectedItem);
                  }}
                  defaultButtonText="Course"
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  buttonStyle={style.dropdownText}
                  buttonTextStyle={style.placeholder}
                />
                <Icon
                  name="chevron-down"
                  type="entypo"
                  size={20}
                  color="#444"
                  style={[style.dropdownIcon, {marginRight: 5}]}
                />
              </View>
            </View>
          </View>
          <View style={style.dropdownContainer}>
            <Text style={style.label}>Year of Study</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-around',
              }}>
              <SelectDropdown
                data={options5}
                onSelect={(selectedItem, index) => {
                  setSelectedOption5(selectedItem);
                }}
                defaultButtonText="Year"
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                buttonStyle={style.dropdownText}
                buttonTextStyle={style.placeholder}
              />
              <Icon
                name="chevron-down"
                type="entypo"
                size={20}
                color="#444"
                style={[style.dropdownIcon, {marginRight: 5}]}
              />
            </View>
          </View>
          <View style={{position: 'absolute', bottom: 20, width: '100%'}}>
            <Button text={'Save'} backgroundColor={colors.primaryBlue} />
          </View>
        </View>
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
    paddingVertical: 20,
  },
  dropdown: {
    width: '100%',
    fontSize: 10,
  },
  dropdownText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'left',
    backgroundColor: 'none',
    width: '100%',
  },
  placeholder: {
    fontSize: 16,
    textAlign: 'left',
    color: 'gray',
  },
  dropdownContainer: {
    marginBottom: 10,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  
    height:80
  },
  label: {
    fontWeight: 500,
    marginBottom: 10,
    color: colors.black,
  },
});
