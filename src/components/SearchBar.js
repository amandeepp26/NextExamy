import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors} from '../styles';

// create a component
const SearchBar = () => {
  return (
    <View style={style.searchBar}>
      <Icon
        name="search"
        color={'#696969'}
        style={{marginTop: 5, marginRight: 5}}
      />
      <TextInput placeholder="Search here..." />
    </View>
  );
};

// define your styles
const style = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 5,
    width: '93%',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 40,
    paddingLeft: 10,
    marginTop: 15,
  },
});

//make this component available to the app
export default SearchBar;
