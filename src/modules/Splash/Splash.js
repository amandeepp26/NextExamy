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
        <Image
          style={{height:200, width: 200,}}
          source={require('../../../assets/images/logoIcon.png')}
        />
        <Image
          style={{height:'8%', width: '62%',marginTop:-10,}}
          source={require('../../../assets/images/logoText.png')}
        />
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
