//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {colors} from '../../styles';
import styles from '../../navigation/styles';
import {Icon} from 'react-native-elements';
import {TextInput} from 'react-native';
import {Pressable} from 'react-native';

// create a component
function ChatMessage({navigation, route}) {
  const [inputValue, setInputValue] = useState('');
  const [myArray, setMyArray] = useState([]);

  const handleAddToArray = () => {
    const newObject = { id: myArray.length + 1, value: inputValue };
    setMyArray([...myArray, newObject]);
    setInputValue('');
  };
  const handleTextInputSubmit = () => {
    if (inputValue.trim() !== '') {
      handleAddToArray();
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          elevation: 1,
          borderColor: '#e5e5e5',
          padding: 15,
          backgroundColor: colors.white,
        }}>
        <Icon
          name="chevron-left"
          type="ionicons"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Image
          source={require('../home/images/user.png')}
          style={{
            width: 30,
            height: 30,
            marginLeft: 5,
            borderRadius: 50,
          }}
        />
        <Text style={[styles.h3, {marginLeft: 10}]}>{route?.params?.user}</Text>
      </View>
      <ScrollView style={{backgroundColor: colors.white, marginTop: 5}}>
        <View
          style={{
            alignItems: 'center',
            alignSelf: 'flex-start',
            marginTop: 10,
            marginLeft: 10,
            borderWidth: 1,
            padding: 10,
            borderColor: '#d3d3d3',
            borderRadius: 15,
          }}>
          <Text style={[styles.h6, {}]}>Hi {route?.params.user} this side</Text>
        </View>
        {myArray?.map(key=>{
            return(
                <View
                  style={{
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    marginTop: 10,
                    marginRight: 10,
                    backgroundColor: colors.primaryBlue,
                    borderWidth: 1,
                    padding: 10,
                    borderColor: '#d3d3d3',
                    borderRadius: 15,
                  }}>
                  <Text style={[styles.h6, {color: colors.white}]}>
                    {key.value}
                  </Text>
                </View>

            )
        })}
      </ScrollView>
      <View style={{backgroundColor: '#fafafa'}}>
        <TextInput
          placeholder="Type message..."
          value={inputValue}
          onChangeText={text => setInputValue(text)}
          style={style.textInput}
          onSubmitEditing={handleTextInputSubmit}
        />
        <Pressable 
        onPress={handleAddToArray} style={{position: 'absolute', right: 20, top: 25}}>
          <Icon name="send" type="ionicon" color={colors.primaryBlue} />
        </Pressable>
      </View>
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
  textInput: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 15,
    paddingHorizontal: 15,
    color: colors.black,
    backgroundColor: colors.white,
    borderColor: '#d3d3d3',
    elevation: 0.5,
    fontSize: 17,
  },
});

//make this component available to the app
export default ChatMessage;
