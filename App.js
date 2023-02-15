//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:20,color:"#000"}}>NextExammy</Text>
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
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default App;
