//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{height: '100%', width: '100%', position: 'absolute'}}
          source={require('../../../assets/images/splash_background.jpg')}
        />
        <View style={{width:'65%',height:'100%',flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image
          style={{height:'35%', width: '100%'}}
          source={require('../../../assets/images/logo.png')}
        />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Splash;
