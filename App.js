//import liraries
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import AppView from './src/StudentModule/AppView';
import Splash from './src/StudentModule/Splash/Splash';
import {store} from './src/redux/store'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { fonts } from './src/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#69C779' }}
      text1Style={{
        fontSize: 12,
        fontFamily: fonts.primarySemiBold,
        marginLeft: -10,
      }}
      text1NumberOfLines={3}
      text2Style={{
        fontSize: 12,
        fontFamily: fonts.primarySemiBold,
        marginLeft: -10,
      }}
      autoHide={false}
      onPress={() => Toast.hide()}
      renderLeadingIcon={() => <AntDesign style={[styles.toastIconStyles, { color: '#69C779', paddingLeft: 10, }]} name={'checkcircleo'} />}
      renderTrailingIcon={() => <MaterialIcons style={[styles.toastIconStyles, { color: '#FE6301', paddingRight: 10, }]} name={'cancel'} />}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 12,
        fontFamily: fonts.primarySemiBold,
        marginLeft: -10,
      }}
      text1NumberOfLines={3}
      text2Style={{
        fontSize: 12,
        fontFamily: fonts.primarySemiBold,
        marginLeft: -10,
      }}
      autoHide={false}
      onPress={() => Toast.hide()}
      renderLeadingIcon={() => <AntDesign style={[styles.toastIconStyles, { color: '#FE6301', paddingLeft: 10, }]} name={'warning'} />}
      renderTrailingIcon={() => <MaterialIcons style={[styles.toastIconStyles, { color: '#FE6301', paddingRight: 10, }]} name={'cancel'} />}
    />
  ),
};
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
      
      <Toast config={toastConfig} />
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
  toastIconStyles: {
    fontSize: 24,
    alignSelf: 'center',
  }
});

//make this component available to the app
export default App;
