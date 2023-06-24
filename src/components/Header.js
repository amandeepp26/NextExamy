import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import styles from '../navigation/styles';
import {Icon} from 'react-native-elements';
import { colors } from '../styles';

const Header = ({title, navigation}) => {
  return (
    <View>
      <View style={style.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            onPress={() => navigation.goBack()}
            name="chevron-left"
            type="ionicons"
            size={25}
          />
          <Text style={[styles.h4,{paddingLeft:8}]}>{title || 'Title'}</Text>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 20,
  },
});
export default Header;
