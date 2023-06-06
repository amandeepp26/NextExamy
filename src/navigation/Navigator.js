import React from 'react';
import NavigatorView from './RootNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import Login from '../StudentModule/auth/Login';
import Welcome from '../StudentModule/auth/Welcome';
import Signup from '../StudentModule/auth/SignUp';
import SelectCategory from '../StudentModule/onboarding/SelectCategory';
import SelectSubCategory from '../StudentModule/onboarding/SelectSubCategory';
import OtpVerification from '../StudentModule/auth/OtpVerification';
import TeacherLogin from '../TeacherModule/auth/Login';
import signupOtpVerification from '../StudentModule/auth/signupOtpVerification';

function Navigator(props) {
  console.warn('ppppp', props);
  const Stack = createStackNavigator();
  if (!props.authToken) {
    if (props.userType === 'Student') {
      return (
        <>
          {props.skip ? (
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen
                name="OtpVerification"
                component={OtpVerification}
              />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen
                name="signupOtpVerification"
                component={signupOtpVerification}
              />
            
            </Stack.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="SelectCategory" component={SelectCategory} />
              <Stack.Screen
                name="SelectSubCategory"
                component={SelectSubCategory}
              />
            </Stack.Navigator>
          )}
        </>
      );
    } else if (props.userType === 'Teacher') {
      return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={TeacherLogin} />
        </Stack.Navigator>
      );
    } else {
      return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
      );
    }
  }
  return <NavigatorView />;
}

export default connect(
  state => {
    return {
      authToken: state.session.authToken,
      profile: state.session.profile,
      skip: state.signin.skip,
      userType: state.signin.userType,
    };
  },
  // {
  //   logout,
  //   skipNow,
  // },
)(Navigator);
