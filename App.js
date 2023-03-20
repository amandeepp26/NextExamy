//import liraries
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import AppView from './src/modules/AppView';
import Splash from './src/modules/Splash/Splash';
import {store} from './src/redux/store'

// create a component
class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    appReady: false,
    restartAllowed: true,
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ appReady: true });
    }, 2000);
  }
  render() {
    if (!this.state.appReady) {
      return (
        <Splash />
      );
    }

    return (
      <Provider store={store}>
      <NavigationContainer>
        <AppView />
      </NavigationContainer>
      </Provider>
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
