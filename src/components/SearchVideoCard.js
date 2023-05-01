import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

export default function SearchVideoCard({navigation}) {
  return (
    <Pressable
    onPress={()=>navigation.navigate('ParticularVideo')}
      style={{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth:0.8,
        borderBottomColor:'#d6d6d6'
      }}>
      <View>
        <Image
          source={require('./images/user.jpeg')}
          style={{width: 100, height: 70, position: 'relative',borderRadius:3}}
        />
        <Image
          source={require('./images/play.png')}
          style={{width: 17, height: 17, position: 'absolute',bottom:8,right:8}}
        />
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={{fontWeight:400}}>Solid and Fluid Mechanics</Text>
        <Text style={{fontSize:12}}>By : Rishabh Jaiswal</Text>
      </View>
      <Icon name="chevron-right" type="ionicons" style={{paddingLeft: 30}} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
